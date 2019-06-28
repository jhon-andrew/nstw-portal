<template>
  <v-card class="d-flex" :ripple="{ class: 'blue--text text--lighten-4' }" to="/dashboard/program-of-activities/">
    <v-layout class="ma-0" fill-height>
      <v-flex xs4 d-flex class="red darken-2" style="border-radius: 2px 0 0 2px;">
        <div class="white--text ma-auto text-xs-center">
          <span class="d-block headline">{{clockWidget.time}}</span>
          <span class="d-block caption">{{clockWidget.date}}</span>
        </div>
      </v-flex>
      <v-flex xs8 d-flex class="red lighten-5">
        <v-window v-model="programSlide" class="ma-auto text-xs-center" style="overflow: hidden;">
          <v-window-item v-for="(program, index) in programs" :key="index">
            <p class="caption">
              <v-icon small v-if="program.time">schedule</v-icon>
              {{program.time}}
              <v-icon small class="ml-1" v-if="program.date">calendar_today</v-icon>
              {{program.date}}
            </p>
            <p class="subheading">{{program.activity}}</p>
            <p class="caption" v-if="program.venue">
              <v-icon small>place</v-icon>
              {{program.venue}}
            </p>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import { programs } from '../contents.json'
import dayjs from 'dayjs'

export default {
  name: 'program-of-activities',
  data () {
    return {
      programSlide: 0,
      programs,
      programsSlidesTimer: null,
      clockWidget: {
        time: '...',
        date: '. . .',
        updater: null,
        showSeparator: true
      }
    }
  },
  created () {
    // Auto Slider
    this.programsSlidesTimer = setInterval(() => {
      let maxSlide = this.programs.length - 1
      this.programSlide += (this.programSlide === maxSlide) ? (maxSlide * -1) : 1
    }, 5024)

    this.clockWidget.updater = setInterval(() => {
      const { showSeparator } = this.clockWidget
      this.clockWidget.time = dayjs().format(`h${showSeparator ? ':' : ' '}mm A`)
      this.clockWidget.date = dayjs().format('dddd, D MMMM')
      this.clockWidget.showSeparator = !showSeparator
    }, 507)
  },
  beforeDestroy () {
    clearInterval(this.programsSlidesTimer)
    clearInterval(this.clockWidget.updater)
  }
}
</script>
<style scoped>
.title {
  font-family: 'Poppins', sans-serif !important;
}
</style>
