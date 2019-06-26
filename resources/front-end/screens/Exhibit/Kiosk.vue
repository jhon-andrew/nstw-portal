<template>
  <!-- <v-content :style="{ minHeight: '100vh', backgroundImage: `url('/assets/kiosk-${kiosk.name.toLowerCase().split(' ').join('-')}.jpg')` }"> -->
  <v-content :style="{ minHeight: '100vh', backgroundImage: `url('${cdnLink.bg}')` }">
    <v-container fluid>
      <v-layout row wrap align-center>
        <v-flex>
          <!-- <v-img contain src="/assets/nstw.png" width="76" class="d-inline-block" /> -->
          <v-img contain src="https://drive.google.com/uc?id=1MHlfZJiNYYXK0gTZRMrJO6XxCqhN0S9C" width="76" class="d-inline-block" />
          <h2 class="display-1 blue--text d-inline-block fw-700">#NSTW2019</h2>
        </v-flex>
        <v-flex>
          <!-- <v-img contain src="/assets/ro-exhibit-branding-02.png" width="256" height="91.13" class="mx-auto primary elevation-1" style="border: 10px solid #4fa891;" /> -->
          <v-img contain src="https://drive.google.com/uc?id=1lpKjUaxvKp8qLJHA6aqpvtrZfzFr6pgD" width="256" height="91.13" class="mx-auto primary elevation-1" style="border: 10px solid #4fa891;" />
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
            <!-- <v-img contain :src="`/assets/kiosk-mini-map-${kiosk.name.toLowerCase().split(' ').join('-')}.jpg`" /> -->
            <v-img contain :src="`${cdnLink.map}`" />
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
  computed: {
    cdnLink () {
      const cdnLinks = {
        'concierge': {
          map: 'https://drive.google.com/uc?id=1IfOkVDTfozjEaTB3cvx4V6h4VxOlay5t',
          bg: 'https://drive.google.com/uc?id=15aeXAeVG7S9jvgQLhH0OtGov3Hz4Z-2o'
        },
        'game-zone': {
          map: 'https://drive.google.com/uc?id=1uya3fNI2vykO70RA6gxVFidl-s7EUdET',
          bg: 'https://drive.google.com/uc?id=1ezAK4Qw44XvtzEbpIAJR093DRoEJsK-g'
        },
        'garden-and-wellness-area': {
          map: 'https://drive.google.com/uc?id=1AUpAIaSD7EliRjVWREPpHrljMxj-vXZG',
          bg: 'https://drive.google.com/uc?id=1oCMZs6OP97lktFRABUT1bEdnLzw0dtpL'
        },
        'innovation-lounge': {
          map: 'https://drive.google.com/uc?id=1ytstymcu5qnN-xRth4qVWwsTd7Gk_q_D',
          bg: 'https://drive.google.com/uc?id=1qO_dUr8gPQZdvvpUDcfif7MwH8mIDFkN'
        },
        'souvenir-shoppe': {
          map: 'https://drive.google.com/uc?id=1P9Thu8Lt3I19lDXSeISeME1Z_F0vMzgX',
          bg: 'https://drive.google.com/uc?id=1nQjeS9-Q0rH_P03dPYfk2oyagLYkdqur'
        },
        'sustainable-development-goal-1': {
          map: 'https://drive.google.com/uc?id=1MemH0lqumlw0S6BPg9VSBXOV2jWMLYRi',
          bg: 'https://drive.google.com/uc?id=1bDs-7uiqsOLwM_53wbOuE7tYpBfXAT6f'
        },
        'sustainable-development-goal-8': {
          map: 'https://drive.google.com/uc?id=1T42EwmCGkxPq5L8p_MAU2X6THGfv8YUd',
          bg: 'https://drive.google.com/uc?id=1K9tkf38LOlPHMz7_ouEWM-Rzu9fpk_fA'
        },
        'sustainable-development-goal-16': {
          map: 'https://drive.google.com/uc?id=1qAK1xx9IMl2ayaly-WGgromFab9pkmCo',
          bg: 'https://drive.google.com/uc?id=1Kw01gUUA1HzxgFJHEOJzGoA0VcAHZNP2'
        }
      }
      return cdnLinks[this.kiosk.name.toLowerCase().split(' ').join('-')]
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
