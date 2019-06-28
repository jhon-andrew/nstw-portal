<template>
  <v-card :ripple="{ class: 'blue--text text--lighten-4' }" class="indigo darken-1 white--text" :to="`/dashboard/stats/confirmed/?count=${count}`">
    <v-layout column fill-height class="ma-0 text-xs-center">
      <v-flex d-flex>
        <h1 class="display-4 ma-auto">{{count}}</h1>
      </v-flex>
      <v-flex class="indigo darken-2" shrink>
        <span>Confirmed Participants</span>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: 'confirmed-participants',
  data () {
    return {
      count: null,
      stats: this.$socket.subscribe('stats:confirmed')
    }
  },
  created () {
    this.stats.on('ready', () => {
      this.stats.emit('getStats')
      console.log('Confirmed participants stat should be ready.')
    })

    this.stats.on('updateStats', resp => {
      this.count = resp.stats
      console.log(resp)
    })
  },
  beforeDestroy () {
    this.stats.close()
  }
}
</script>
<style scoped>
.display-4 {
  font-family: 'Poppins', sans-serif !important;
}
</style>
