<template>
  <v-content :style="{ minHeight: '100vh', backgroundImage: `url('/assets/kiosk-${kiosk.name.toLowerCase().split(' ').join('-')}.jpg')` }">
    <v-container fluid>
      <v-layout row wrap align-center>
        <v-flex>
          <v-img contain src="/assets/nstw.png" width="76" class="d-inline-block" />
          <h2 class="display-1 blue--text d-inline-block fw-700">#NSTW2019</h2>
        </v-flex>
        <v-flex>
          <v-img contain src="/assets/ro-exhibit-branding-02.png" width="256" height="91.13" class="mx-auto primary elevation-1" style="border: 10px solid #4fa891;" />
        </v-flex>
        <v-flex class="text-xs-right">
          <h3 class="headline blue--text fw-700 fs-italic">#ASTIGCountryside</h3>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid class="fixed-bottom">
      <v-layout row wrap align-end>
        <v-flex xs3>
          <v-card dark class="mb-5">
            <v-card-title primary-title class="pb-0">
              <h4 class="yellow--text fw-300 headline">{{kiosk.name}}</h4>
            </v-card-title>
            <v-card-text>
              <p v-html="kiosk.description"></p>
            </v-card-text>
          </v-card>

          <v-btn v-if="kiosk.action" large color="primary yellow--text" :to="kiosk.action.path">{{kiosk.action.label}}</v-btn>
        </v-flex>
        <v-flex xs3 offset-xs6 class="text-xs-right">
          <v-card class="mb-5">
            <v-img contain :src="`/assets/kiosk-mini-map-${kiosk.name.toLowerCase().split(' ').join('-')}.jpg`" />
          </v-card>
          <v-btn large color="primary yellow--text" @click="$router.go(-1)">Back</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import { exhibits } from '@/contents.json'

export default {
  name: 'exhibit-kiosk',
  data () {
    return {
      kiosk: exhibits.kiosks.find(kiosk => kiosk.name.toLowerCase().split(' ').join('-') === this.$route.params.pathMatch)
    }
  },
  created () {
    console.log(this.$route.params.pathMatch)
  }
}
</script>
<style scoped>
.v-content {
  background-position: center center;
  background-size: cover;
}

.fixed-bottom {
  position: absolute;
  bottom: 0;
}

h2, h3, h4 {
  font-family: 'Poppins', sans-serif !important;
  text-transform: uppercase;
}

h2, h3 {
  text-shadow: 1px 1px 0 #ffffff;
}
</style>
