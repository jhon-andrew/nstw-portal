<template>
  <v-layout column>
    <v-flex style="flex-grow: 0;">
      <v-card>
        <v-card-title primary-title>
          <div class="text-xs-center">
            <div class="display-2 mb-0">{{ time.hour }}{{ time.showSeparator ? ':' : '&nbsp;' }}{{ time.min }} {{ time.meridiem }}</div>
            <span class="grey--text">{{ time.date }}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex d-flex>
      <v-card>
        <v-card-title primary-title>
          <div><strong>Program of Activities</strong></div>
          <v-spacer></v-spacer>
          <div class="grey--text">Today</div>
        </v-card-title>
        <v-card-text class="text-xs-center">
          <v-icon>schedule</v-icon>
          <p>10:00 AM</p>

          <v-icon>event</v-icon>
          <p class="title">Forum topic: The Eel Fishery Tributaries along Lagonoy Gulf: Implications to Management and Conservation (By Invitation)</p>

          <v-icon>place</v-icon>
          <p>World Trade Center, Function Room 3</p>
        </v-card-text>

        <div style="position: absolute; bottom: 0;right: 0;left: 0;">
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn icon>
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import dayjs from 'dayjs'
import { clearInterval } from 'timers';
export default {
  name: 'ClockWidget',
  data () {
    return {
      intervals: [],
      time: {
        hour: null,
        min: null,
        meridiem: null,
        showSeparator: false,
        date: null
      }
    }
  },
  created () {
    this.intervals = [
      // Time
      setInterval(() => {
        this.time = {
          hour: dayjs().format('hh'),
          min: dayjs().format('mm'),
          meridiem: dayjs().format('A'),
          showSeparator: !this.time.showSeparator,
          date: dayjs().format('dddd, MMMM DD')
        }
      }, 1000)
    ]
  },
  beforeDestroy () {
    this.intervals.forEach(interval => clearInterval(interval))
    console.log('interval should be cleared.')
  }
}
</script>

<style scoped>
.v-card__title .text-xs-center {
  width: 100%;
}
</style>
