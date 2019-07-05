<template>
  <v-card :ripple="{ class: 'blue--text text--lighten-4' }" class="teal white--text" :to="`/dashboard/stats/pre-registered/?count=${count}`">
    <v-layout column fill-height class="ma-0 text-xs-center">
      <v-flex d-flex>
        <h1 class="display-4 ma-auto">{{count}}</h1>
      </v-flex>
      <v-flex class="teal darken-1" shrink>
        <span>Pre-registered</span>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: 'pre-registered',
  data () {
    return {
      count: null,
      stats: this.$socket.subscribe('stats:preregistered')
    }
  },
  created () {
    this.stats.on('ready', () => {
      this.stats.emit('getStats')
    })

    this.stats.on('updateStats', ({ stats }) => {
      this.count = stats
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
