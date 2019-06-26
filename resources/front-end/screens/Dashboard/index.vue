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
                    <v-flex xs6 d-flex>
                      <!-- Contest/Raffles -->
                      <v-card :ripple="{ class: 'blue--text text--lighten-4' }">
                        <v-card-text>Contest/Raffles</v-card-text>
                      </v-card>
                      <!-- /Contest/Raffles -->
                    </v-flex>
                    <v-flex xs3 d-flex>
                      <v-card :ripple="{ class: 'blue--text text--lighten-4' }">
                        <v-card-text>Pre-registered Counter</v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs3 d-flex>
                      <v-card :ripple="{ class: 'blue--text text--lighten-4' }">
                        <v-card-text>Confirmed Participants Counter</v-card-text>
                      </v-card>
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
                  <v-card :ripple="{ class: 'blue--text text--lighten-4' }">
                    <!-- <v-card-text>Venue Map</v-card-text> -->
                    <v-layout align-center justify-center fill-height class="grey ma-0">
                      <v-flex xs5>
                        <v-btn block>Button</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import nstwBranding from './tiles/nstw'
import programOfActivities from './tiles/program-of-activities'

export default {
  name: 'Dashboard',
  components: {
    nstwBranding, programOfActivities
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
