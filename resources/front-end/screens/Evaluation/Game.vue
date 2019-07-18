<template>
  <v-content>
    <v-container fill-height grid-list-lg>
      <v-layout column>
        <!-- Header -->
        <v-flex shrink>
          <h2 :class="[$vuetify.breakpoint.mdAndDown ? 'display-1' : 'display-3']">#ASTIGCountryside Mini-game</h2>
          <span>Prizes are randomly hidden in {{prizes.length || 0}} of the cards below. You only have {{maxTries}} {{maxTries > 1 ? 'tries' : 'try'}} until you get one. Enjoy!</span>
          <v-btn fab style="position: fixed; top: 0; right: 0;" to="/evaluation/form/">
            <v-icon>close</v-icon>
          </v-btn>
        </v-flex>

        <!-- Main Content -->
        <v-flex d-flex>
          <v-layout wrap>
            <v-flex xs6 lg2 d-flex v-for="n in 30" :key="n" :class="['flip-card', flipped.indexOf(n) >= 0 ? 'flip-the-card' : '']">
              <div class="flip-card-inner">
                <v-card class="flip-card-front" @click="flipCard(n)">
                  <v-layout fill-height align-center class="ma-0">
                    <v-flex class="text-xs-center">
                      <!-- <v-icon large style="font-size: 48px !important;">help_outline</v-icon> -->
                      <v-btn fab class="elevation-0 title" color="blue white--text">{{n}}</v-btn>
                    </v-flex>
                  </v-layout>
                </v-card>
                <v-card class="flip-card-back" :class="[withPrize.findIndex(({ card }) => card === n) >= 0 ? 'blue white--text' : '', userFlipped.indexOf(n) >= 0 ? 'user-flipped' : '']">
                  <v-layout fill-height align-center class="ma-0">
                    <v-flex class="text-xs-center">
                      <div v-if="withPrize.findIndex(({ card }) => card === n) >= 0">
                        <span v-if="userFlipped.indexOf(n) >= 0">
                          Congratulations!<br />
                          You won a<br />
                        </span>
                        <strong>{{withPrize.find(({ card }) => card === n).prize}}</strong>
                        <v-btn small class="d-block mx-auto" v-if="userFlipped.indexOf(n) >= 0" @click="dialog = true">Claim</v-btn>
                        <div :ref="`card-${n}`" style="width: 10px; margin: 0 auto;"></div>
                      </div>
                      <div v-else>
                        <span v-if="userFlipped.indexOf(n) >= 0">
                          Sorry!
                        </span>
                        <v-icon v-else color="red" style="font-size: 48px !important;">highlight_off</v-icon>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title primary-title>
          <span class="title">Congratulations!</span>
        </v-card-title>
        <v-form ref="winner">
          <v-card-text>
            <p>You won a {{prizeWon.prize}}.</p>
            <p>To claim your prize, please provide your full name below and <em>present an ID</em> to the concierge.</p>
            <v-text-field label="Full name" v-model="full_name" :rules="[$rules.required]" />
            <p class="caption">*DISCLAIMER: Prizes are only good until supplies last. Please claim immediately.</p>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn flat color="blue" @click="submitName" :disabled="loading" :loading="loading">
              Submit
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-content>
</template>
<script>
import { confetti } from 'dom-confetti'

export default {
  data () {
    return {
      flipped: [],
      userFlipped: [],
      withPrize: [],
      winner: false,
      prizes: [],
      prizeWon: {},
      dialog: false,
      full_name: undefined,
      maxTries: 1,
      loading: false
    }
  },
  methods: {
    flipCard (n) {
      // Flip card
      if (this.flipped.length < this.maxTries && !this.winner) {
        this.flipped.push(n)
        this.userFlipped.push(n)
      }

      // Reveal cards if max tries reached or a prize has been picked
      if (this.flipped.length === this.maxTries || this.withPrize.findIndex(({ card }) => card === n) >= 0) {
        setTimeout(() => this.revealCards(), 1000)
      }

      // Confetti
      if (this.withPrize.findIndex(({ card }) => card === n) >= 0) {
        confetti(this.$refs[`card-${n}`][0])
        this.winner = true
        this.prizeWon = this.withPrize.find(({ card }) => card === n)
      }
    },
    revealCards () {
      let timeout = 100
      for (let i = 1; i <= 30; i++) {
        setTimeout(() => {
          if (this.flipped.indexOf(i) < 0) this.flipped.push(i)
        }, timeout)

        timeout += 100
      }
    },
    async addPrize(prizes) {
      const generateWinningCards = () => new Promise((resolve, reject) => {
        let winningCards = []

        while (winningCards.length < prizes.length) {
          const winningCard = Math.floor(Math.random()*((30)-1+1)+1)

          if (winningCards.indexOf(winningCard) < 0) {
            winningCards.push(winningCard)
          }

          if (winningCards.length === prizes.length) {
            resolve(winningCards)
          }
        }
      })

      const winningCards = await generateWinningCards()

      this.withPrize = prizes.map((prize, n) => ({
        card: winningCards[n],
        prize
      }))
    },
    async submitName () {
      this.loading = true

      const { data: response } = await this.$request.post('/api/evaluation/winner', {
        full_name: this.full_name,
        prize: this.prizeWon.prize,
        quantity: 1
      })

      if (!response.error) {
        // this.dialog = false
        this.$router.push({ path: '/evaluation/form/' })
      }

      this.loading = false
    }
  },
  async created () {
    let { data: prizes } = await this.$request.get('/prizes.json')
    const { data: givenPrizes } = await this.$request.post('/api/evaluation/prizes-won', prizes)

    Object.keys(prizes).forEach(prize => {
      prizes[prize] = prizes[prize] - givenPrizes[prize]
    })

    const difficulty = 13
    const totalNumberOfPrizes = this.$objectSum(prizes)
    const prizeCalculation = Object.keys(prizes).map(key => ({
      prize: key,
      remainingQty: prizes[key],
      percent: Math.round(prizes[key] * 100 / totalNumberOfPrizes),
      qtyPerGame: Math.round((prizes[key] * 100 / totalNumberOfPrizes) / difficulty)
    }))

    let prizeList = []

    prizeCalculation.forEach(item => {
      if (item.qtyPerGame === 0 && item.remainingQty > 0) {
        item.qtyPerGame = 1
      }

      const qty = [...Array(item.qtyPerGame)].map(i => item.prize)
      prizeList = [...prizeList, ...qty]
    })

    this.prizes = prizeList
    this.addPrize(this.prizes)
    console.log(this.prizes)
  }
}
</script>
<style scoped>
.v-content {
  background-image: linear-gradient(145deg, #e1eec3, #f05053);
}
.display-3, .display-2, .display-1 {
  font-family: 'Poppins', sans-serif !important;
}

.flip-card {
  min-height: 128px;
  perspective: 1000px;
}

.flip-card-inner {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-the-card .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}

.user-flipped {
  border: 3px solid #ff0000 !important;
  border-radius: 2px;
}
</style>
