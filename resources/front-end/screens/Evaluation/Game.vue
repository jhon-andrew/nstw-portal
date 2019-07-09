<template>
  <v-content>
    <v-container fill-height grid-list-lg>
      <v-layout column>
        <!-- Header -->
        <v-flex shrink>
          <h2 :class="[$vuetify.breakpoint.mdAndDown ? 'display-1' : 'display-3']">#ASTIGCountryside Mini-game</h2>
          <span class="caption">We have hidden prizes in some of the cards below. Choose one and try your luck!</span>
          <v-btn small class="right" @click="reset">Reset</v-btn>
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
                          Try again.
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

    <v-dialog v-model="dialog" max-width="340">
      <v-card>
        <v-card-title primary-title>
          <span class="title">Congratulations!</span>
        </v-card-title>
        <v-form ref="winner">
          <v-card-text>
            <p>You won a {{prizeWon.prize}}.</p>
            <p>To claim your prize, please provide your full name below and present an ID to the concierge.</p>
            <v-text-field label="Full name" v-model="full_name" :rules="[$rules.required]" />
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn flat color="blue" @click="submitName">
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
      full_name: undefined
    }
  },
  methods: {
    flipCard (n) {
      // Flip card
      if (this.flipped.length < 3 && !this.winner) {
        this.flipped.push(n)
        this.userFlipped.push(n)
      }

      // Reveal cards if max tries reached or a prize has been picked
      if (this.flipped.length === 3 || this.withPrize.findIndex(({ card }) => card === n) >= 0) {
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
            console.log('Winning numbers are:', winningCards)
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
    submitName () {
      console.log({
        full_name: this.full_name,
        prize: this.prizeWon.prize
      })
      /**
       * TODO:
       * 1. Send the data to an API endpoint, record to the database for reference.
       * 2. Create a controller to manage this request.
       * 3. Create a migration file containing the schema.
       */
    },
    reset () {
      this.flipped = []
      this.userFlipped = []
      this.withPrize = []
      this.winner = false
      this.addPrize(this.prizes)
    }
  },
  created () {
    this.prizes = [
      'House and Lot',
      'Honda Civic RS Turbo',
      'Php 1,000,000.00',
      'iPhone XS',
      'Sticker (8ft x 6ft)'
    ]
    this.addPrize(this.prizes)

    /**
     * TODO:
     * 1. List a record of all items available as prizes and its quantity.
     * 2. Create a database table containing the winner's info and the prize they won.
     * 3. Base from the records, count the prizes won and deduct to the quantity in the list
     *    to identify how many is left.
     * 4. Prizes will be randomly included but with a configurable quantity. (E.g. 5 possible prizes per game)
     * 5. Remove 'reset button' as the user has only 1 chance to win after filling up the evaluation form.
     */
  }
}
</script>
<style scoped>
.v-content {
  background-image: linear-gradient(145deg, #e1eec3, #f05053);
  /* background-image: linear-gradient(145deg, #b2fefa, #0ed2f7); */
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
