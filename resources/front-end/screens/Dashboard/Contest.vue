<template>
  <v-dialog persistent v-model="modal" max-width="70%" content-class="contest-dialog">
    <v-card>
      <v-card-title primary-title class="teal white--text">
        <div class="white--text">
          <p class="title mb-0">{{done ? 'Congratulations!' : 'Raffle'}}</p>
          <!-- <p class="caption mb-0">and win special prizes!</p> -->
        </div>
        <v-spacer />
        <v-btn icon class="ma-0 white--text" @click="$router.go(-1)">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text style="min-height: 240px; align-items: center;" class="d-flex">
        <div class="text-xs-center">
          <h3 class="display-2 grey--text">{{prevName}}</h3>
          <h2 :class="[done ? 'display-4' : 'display-3']">{{winner}}</h2>
          <h3 class="display-2 grey--text">{{nextName}}</h3>
          <div ref="confetti" style="width: 10px; margin: 0 auto;"></div>
        </div>
        <!-- <v-layout wrap>
          <v-flex xs2>
            <v-card v-for="(name, index) in names" :key="index" :color="winnerIndex === index ? 'teal white--text' : ''">
              <v-card-text>{{name}}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout> -->
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn dark flat color="teal" @click="generateWinner()">
          Roll
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { confetti } from 'dom-confetti'

export default {
  data () {
    return {
      modal: false,
      winner: null,
      winnerIndex: null,
      names: [],
      done: false
    }
  },
  computed: {
    prevName () {
      const prevIndex = this.winnerIndex - 1
      return this.names[prevIndex < 0 ? this.names.length - 1 : prevIndex]
    },
    nextName () {
      const nextIndex = this.winnerIndex + 1
      return this.names[nextIndex >= this.names.length ? 0 : nextIndex]
    }
  },
  mounted () {
    this.modal = true
    console.log(this.$refs.confetti)
  },
  async created () {
    const { data: { profiles } } = await this.$request.get('/api/profiles')
    this.names = profiles.map(profile => `${profile.first_name} ${profile.surname}`)
    this.winner = this.names[0]
  },
  methods: {
    generateWinner () {
      let timeout = 100
      let rounds = 0
      let winner = Math.floor(Math.random()*((this.names.length - 1)-1+1)+1)
      let currentIndex = 0

      this.done = false

      const roller = () => setTimeout(() => {
        this.winner = this.names[currentIndex]
        this.winnerIndex = currentIndex

        if (rounds >= 2) {
          timeout += 25
        }

        if (currentIndex === winner) {
          rounds++
        }

        if (rounds >= 3 && currentIndex === winner) {
          this.done = true
          confetti(this.$refs.confetti)
        } else {
          currentIndex += (currentIndex === (this.names.length - 1)) ? currentIndex * -1 : 1
          roller()
        }
      }, timeout)

      roller()
    }
  }
}
</script>
<style scoped>
.display-4, .display-3, .display-2 {
  font-family: 'Poppins', sans-serif !important;
}
</style>
<style>
.contest-dialog {
  overflow: hidden !important;
}
</style>
