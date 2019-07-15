<template>
  <v-content>
    <v-container fluid fill-height grid-list-lg>
      <v-layout column>
        <v-flex style="flex-basis: 5%;">
          <h1 class="grey--text text--darken-3 fw-300">Welcome! Tap a tile to view more information.</h1>
        </v-flex>
        <v-flex d-flex style="flex-basis: 95%;">
          <v-layout>
            <v-flex xs8 d-flex>
              <v-layout column>
                <v-flex d-flex class="flex-to-70">
                  <!-- NSTW Branding -->
                  <nstw-branding />
                  <!-- /NSTW Branding -->
                </v-flex>
                <v-flex d-flex class="flex-to-30">
                  <v-layout>
                    <v-flex xs3 d-flex>
                      <!-- Survey -->
                      <survey />
                      <!-- /Survey -->
                    </v-flex>
                    <!-- <v-flex xs3 d-flex>
                      <activation />
                    </v-flex>
                    <v-flex xs3 d-flex>
                      <pre-registered />
                    </v-flex> -->
                    <v-flex xs6 d-flex>
                      <!-- <contest /> -->
                      <i-lounge />
                    </v-flex>
                    <v-flex xs3 d-flex>
                      <!-- Confirmed Participants -->
                      <confirmed-participants />
                      <!-- /Confirmed Participants -->
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs4 d-flex>
              <v-layout column>
                <v-flex d-flex class="flex-to-30">
                  <!-- Program of Activities -->
                  <program-of-activities />
                  <!-- /Program of Activities -->
                </v-flex>
                <v-flex d-flex class="flex-to-70">
                  <!-- Exhibits -->
                  <exhibits />
                  <!-- /Exhibits -->
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <v-dialog persistent scrollable v-model="modal" max-width="75%">
      
    </v-dialog> -->
    <router-view />
  </v-content>
</template>

<script>
import nstwBranding from './tiles/nstw'
import programOfActivities from './tiles/program-of-activities'
import exhibits from './tiles/exhibits'
import preRegistered from './tiles/pre-registered'
import confirmedParticipants from './tiles/confirmed-participants'
import survey from './tiles/survey'
import activation from './tiles/activation'
import contest from './tiles/contest'
import iLounge from './tiles/i-lounge'

export default {
  name: 'dashboard',
  components: {
    nstwBranding, programOfActivities, exhibits, preRegistered, confirmedParticipants, survey, activation, contest, iLounge
  },
  data () {
    return {
      modal: this.$route.name !== 'dashboard'
    }
  },
  watch: {
    $route (to, from) {
      this.modal = to.name !== 'dashboard'
    }
  }
}
</script>
<style scoped>
.v-content {
  background-image: linear-gradient(to right, #74ebd5, #acb6e5);
}

.flex-to-70 { flex-basis: 70% !important; }
.flex-to-30 { flex-basis: 30% !important; }
</style>
