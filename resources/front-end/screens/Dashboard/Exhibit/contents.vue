<template>
  <v-layout column>
    <v-card class="mb-4" v-for="n in 20" :key="n">
      <v-card-text></v-card-text>
    </v-card>
  </v-layout>
</template>
<script>
import { exhibits } from '@/contents.json'

export default {
  data: () => ({
    kiosk: {}
  }),
  created () {
    this.kiosk = exhibits.kiosks.find(kiosk => kiosk.name.toLowerCase().split(' ').join('-') === this.$route.params.id)
  }
}
</script>
