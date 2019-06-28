<template>
  <v-card :ripple="{ class: 'blue--text text--lighten-4' }" class="indigo darken-1 white--text">
    <v-layout column fill-height class="ma-0 text-xs-center">
      <v-flex d-flex>
        <h1 class="display-4 ma-auto">78</h1>
      </v-flex>
      <v-flex class="indigo darken-2" shrink>
        <span>Confirmed Participants</span>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: 'confirmed-participants'
}
</script>
<style scoped>
.display-4 {
  font-family: 'Poppins', sans-serif !important;
}
</style>
