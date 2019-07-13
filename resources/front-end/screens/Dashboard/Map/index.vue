<template>
  <v-content>
    <!-- Video Maps -->
    <div class="maps">
      <video muted v-show="!selected" ref="initial_video">
        <source src="/assets/dashboard/rendered/videos/concierge.mp4" type="video/mp4" />
      </video>
      <video muted v-for="kiosk in kiosks" :key="kiosk.slug" v-show="kiosk.slug === selected" :ref="kiosk.slug">
        <source :src="`/assets/dashboard/rendered/videos/${kiosk.slug}.mp4`" type="video/mp4" />
      </video>
    </div>
    <!-- Navigation -->
    <div class="navigation" v-show="!selected">
      <div class="garden-and-wellness-area" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="goTo('garden-and-wellness-area')">
        <span>Garden and<br />Wellness Area</span>
      </div>
      <div class="concierge" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="goTo('concierge')">
        <span>Concierge</span>
      </div>
      <div class="innovation-lounge" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="goTo('innovation-lounge')">
        <span>Innovation Lounge</span>
      </div>
      <div class="game-zone" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="goTo('game-zone-1')">
        <span>Game Zone</span>
      </div>
      <div class="game-zone-2" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="goTo('game-zone-2')">
        <span>Game Zone</span>
      </div>
      <div class="souvenir-shoppe" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="goTo('souvenir-shoppe')">
        <span>Souvenir Shoppe</span>
      </div>
      <div class="sustainable-development-goal-16" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="goTo('sustainable-development-goal-16')">
        <span>Sustainable Development Goal 16</span>
      </div>
      <div class="sustainable-development-goal-1" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="goTo('sustainable-development-goal-1')">
        <span>Sustainable Development Goal 1</span>
      </div>
      <div class="sustainable-development-goal-8" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="goTo('sustainable-development-goal-8')">
        <span>Sustainable Development Goal 8</span>
      </div>
    </div>
    <!-- Contents -->
    <v-container fluid fill-height>
      <v-layout align-start>
        <v-flex xs1>
          <v-btn fab v-if="selected" class="ma-3" @click="leaveFrom(selected)">
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-btn fab v-else class="ma-3" @click="$router.go(-1)">
            <v-icon>arrow_back</v-icon>
          </v-btn>
        </v-flex>
        <v-flex offset-xs9 xs2 d-flex>
          <v-container fluid grid-list-lg v-if="selected">
            <v-layout column>
              <v-flex>
                <v-card>
                  <v-card-title primary-title>
                    <h6 class="title">{{kiosk.name}}</h6>
                  </v-card-title>
                  <v-card-text>
                    <p v-html="kiosk.description"></p>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex>
                <v-card>
                  <v-card-title primary-title>
                    <h6 class="title">Downloads</h6>
                  </v-card-title>
                  <v-list>
                    <v-list-tile ripple v-for="n in 5" :key="n" @click="showDownload(n)">
                      <v-list-tile-title>File name</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title class="indigo">
          <div class="white--text">
            <h6 class="title">Download File</h6>
            <span class="caption">{{selectedFile.name}}</span>
          </div>
        </v-card-title>
        <v-card-text class="indigo lighten-5">
          <v-layout>
            <v-flex d-flex xs4>
              <v-img :src="`/api/qrcode/generate.png?data=${selectedFile.name}`" class="elevation-2" />
            </v-flex>
            <v-flex d-flex xs8 class="pl-2">
              <div>
                <p>Instructions:</p>
                <ol>
                  <li>Connect to the Concierge WiFi.</li>
                  <li>And scan the QR code to download.</li>
                </ol>
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-divider />
        <v-card-actions class="indigo lighten-5">
          <v-btn flat @click="dialog = false">
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</template>
<script>
import { exhibits } from '@/contents.json'
export default {
  data () {
    return {
      kiosks: exhibits.kiosks.map(kiosk => {
        kiosk.slug = kiosk.name.toLowerCase().split(' ').join('-')
        if (kiosk.name === 'Game Zone') kiosk.slug += '-1'
        return kiosk
      }),
      selected: null,
      resume: false,
      dialog: false,
      selectedFile: {}
    }
  },
  computed: {
    kiosk () {
      return this.kiosks.find(kiosk => kiosk.slug === this.selected) || {}
    }
  },
  methods: {
    goTo(kiosk) {
      this.selected = kiosk
      const video = this.$refs[kiosk][0]

      video.playbackRate = 1.5

      video.addEventListener('timeupdate', () => {
        let duration = kiosk.startsWith('game-zone') ? 4.2 : 2

        // If video reaches the specified duration, pause.
        if (video.currentTime >= duration && !this.resume) video.pause()

        // If video reaches its full length, return to initial state.
        if (video.currentTime === video.duration) {
          this.resume = false
          this.selected = null
        }
      })

      video.play()
    },
    leaveFrom (kiosk) {
      this.resume = true
      this.$refs[kiosk][0].play()
    },
    showDownload (id) {
      this.dialog = true
      this.selectedFile = {
        name: `Filename #${id}`
      }
    }
  },
  beforeMount () {
    // Duplicate game-zone as game-zone-2
    let gameZone2 = JSON.parse(JSON.stringify(this.kiosks.find(kiosk => kiosk.name === 'Game Zone')))
    gameZone2.slug = 'game-zone-2'
    this.kiosks.push(gameZone2)
  }
}
</script>
<style scoped>
.maps > video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100vh !important;
}

.navigation > div {
  /* background-color: rgba(0,0,0,0.2); */
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 2px 4px #000000;
  font-size: 25px;
}

.navigation > .garden-and-wellness-area {
  width: 310px;
  height: 310px;
  bottom: 53px;
  right: 567px;
  z-index: 0;
}

.navigation > .concierge {
  width: 245px;
  height: 245px;
  bottom: 159px;
  right: 401px;
  z-index: 1;
}

.navigation > .innovation-lounge {
  width: 410px;
  height: 410px;
  bottom: 65px;
  left: 417px;
  z-index: 2;
}

.navigation > .game-zone {
  width: 400px;
  height: 400px;
  top: 137px;
  right: 431px;
  z-index: 3;
}

.navigation > .game-zone-2 {
  width: 385px;
  height: 385px;
  top: 71px;
  right: 764px;
  z-index: 4;
}

.navigation > .souvenir-shoppe {
  width: 430px;
  height: 430px;
  top: 52px;
  left: 395px;
  z-index: 5;
}

.navigation > .sustainable-development-goal-16 {
  width: 455px;
  height: 455px;
  top: 252px;
  left: 287px;
  z-index: 6;
}

.navigation > .sustainable-development-goal-1 {
  width: 475px;
  height: 475px;
  top: 329px;
  right: 315px;
  z-index: 7;
}

.navigation > .sustainable-development-goal-8 {
  width: 590px;
  height: 590px;
  bottom: 44px;
  left: 638px;
  z-index: 8;
}
</style>
