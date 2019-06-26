<template>
  <v-card class="d-flex" :ripple="{ class: 'blue--text text--lighten-4' }">
    <v-layout class="ma-0" fill-height>
      <v-flex xs4 d-flex class="red darken-2" style="border-radius: 2px 0 0 2px;">
        <div class="white--text ma-auto text-xs-center">
          <!-- <v-icon class="white--text">schedule</v-icon> -->
          <span class="d-block headline">4:40 PM</span>
          <span class="d-block caption">Tuesday, 25 June</span>
          <!-- <v-icon class="white--text mt-2">place</v-icon>
          <span class="d-block">World Trade Center, Function Rooms 1 (Luna)</span> -->
        </div>
      </v-flex>
      <v-flex xs8 d-flex>
        <v-window v-model="programOfActivities" class="ma-auto text-xs-center">
          <v-window-item v-for="(program, index) in programs" :key="index">
            <p class="caption">
              <v-icon small>schedule</v-icon>
              {{program.time}} {{program.date}}
            </p>
            <p class="subheading">{{program.activity}}</p>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import { programs } from '../contents.json'

export default {
  name: 'program-of-activities',
  data () {
    return {
      programOfActivities: 0,
      programs
    }
  }
}
</script>
<style scoped>
.title {
  font-family: 'Poppins', sans-serif !important;
}
</style>
