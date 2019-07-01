<template>
  <v-card :ripple="{ class: 'blue--text text--lighten-4' }" to="/dashboard/exhibit/">
    <!-- <v-card-text>
      <p class="title white--text">Exhibits</p>
    </v-card-text> -->
    <v-layout fill-height align-center justify-center class="ma-0">
      <v-flex xs7>
        <v-img contain src="/assets/ro-exhibit-branding.png" />
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: 'venue'
}
</script>
<style scoped>
.v-card {
  background-image: linear-gradient(to right, rgba(172, 182, 229, 0.94), rgba(116, 235, 213, 0.94)), url('/assets/dashboard/map-thumbnail.jpg');
  background-position: center center, center center;
  background-repeat: no-repeat, no-repeat;
  background-size: cover;
}

.title {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8)
}
</style>
