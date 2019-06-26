<template>
  <!-- <v-content :style="{ backgroundImage: `url('/assets/venue-view-${mapPerspective}.jpg')` }"> -->
  <v-content :style="{ backgroundImage: `url('${cdnLink}')` }">
    <v-container fluid grid-list-lg>
      <v-layout row wrap align-center>
        <v-flex>
          <!-- <v-img contain src="/assets/nstw.png" width="76" class="d-inline-block" /> -->
          <v-img contain src="https://drive.google.com/uc?id=1MHlfZJiNYYXK0gTZRMrJO6XxCqhN0S9C" width="76" class="d-inline-block" />
          <h2 class="display-1 primary--text d-inline-block fw-700">#NSTW2019</h2>
        </v-flex>
        <v-flex>
          <!-- <v-img contain src="/assets/ro-exhibit-branding-light-02.png" width="256" height="76.19" class="mx-auto" /> -->
          <v-img contain src="https://drive.google.com/uc?id=18zAsZ0GrXK6czuNV2SdnzvOVbixBwdTs" width="256" height="76.19" class="mx-auto" />
        </v-flex>
        <v-flex class="text-xs-right">
          <h3 class="headline blue--text fw-700 fs-italic">#ASTIGCountryside</h3>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout row wrap align-center>
        <v-flex xs3>
          <v-btn block color="primary yellow--text" class="my-5 py-2" style="height: fit-content;" v-for="(kiosk, index) in kiosksLeft" :key="index" :to="kiosk.path">
            <div class="text-xs-center">
              <h3>{{kiosk.name}}</h3>
              <span class="white--text caption">{{kiosk.caption}}</span>
            </div>
          </v-btn>
        </v-flex>
        <v-flex xs3 offset-xs6>
          <v-btn block large color="primary yellow--text" class="my-5 py-2" style="height: fit-content;" v-for="(kiosk, index) in kiosksRight" :key="index" :to="kiosk.path">
            <div class="text-xs-center">
              <h3>{{kiosk.name}}</h3>
              <span class="white--text caption">{{kiosk.caption}}</span>
            </div>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid style="position: absolute; bottom: 0;">
      <v-layout row wrap justify-center>
        <v-btn-toggle v-model="mapPerspective" class="elevation-0">
          <v-btn style="border: 1px solid #4fa891;" class="mx-2" value="top">Top View</v-btn>
          <v-btn style="border: 1px solid #4fa891;" class="mx-2" value="front">Front View</v-btn>
          <v-btn style="border: 1px solid #4fa891;" class="mx-2" value="rear">Rear View</v-btn>
          <v-btn style="border: 1px solid #4fa891;" class="mx-2" value="semitop">Semi-top View</v-btn>
        </v-btn-toggle>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import { exhibits } from '@/contents'
const { left, right } = exhibits.map.navigation

export default {
  name: 'exhibit-map',
  data () {
    return {
      mapPerspective: 'top',
      kiosksLeft: left,
      kiosksRight: right
    }
  },
  watch: {
    mapPerspective (to, from) {
      this.mapPerspective = !to ? from : to
    }
  },
  computed: {
    cdnLink () {
      const cdnLinks = {
        top: 'https://drive.google.com/uc?id=1VmlTDbGFZfXLSh53vPv_xW9g9B4UXJnV',
        front: 'https://drive.google.com/uc?id=1NHWiAOSyZdRQCHg_ojlu9d03Ocgcqnn9',
        rear: 'https://drive.google.com/uc?id=1KlvVvP2pYW7xjRijfI47mCqAzJOsHyGH',
        semitop: 'https://drive.google.com/uc?id=1dkLW0fRtjKrX_SJRP5bjkr1DsdcH-w--'
      }

      return cdnLinks[this.mapPerspective]
    }
  }
}
</script>
<style scoped>
.v-content {
  background-size: cover;
  background-position: center center;
  transition: background-image .6s ease-in-out !important;
}

h2, h3 {
  font-family: 'Poppins', sans-serif !important;
}
</style>
