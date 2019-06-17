<template>
  <v-container fluid grid-list-lg fill-height>
    <v-layout row wrap>
      <v-flex xs3 d-flex>
        <ClockWidget />
      </v-flex>
      <v-flex xs3 d-flex>
        <v-card></v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ClockWidget from './ClockWidget'
export default {
  name: 'Dashboard',
  components: { ClockWidget }
}
</script>
