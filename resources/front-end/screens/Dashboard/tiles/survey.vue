<template>
  <v-card :ripple="{ class: 'blue--text text--lighten-4' }" class="blue lighten-1 white--text" to="/dashboard/survey/">
    <v-layout column fill-height class="ma-0">
      <!-- <v-flex shrink >
        <v-card-text class="py-2">
          <span>Raffle Contest</span>
        </v-card-text>
      </v-flex> -->
      <v-flex d-flex class="blue">
        <v-card-text class="my-auto text-xs-center">
          <v-icon large color="white" class="mb-3">list_alt</v-icon>
          <p class="title">Answer the evaluation</p>
          <p class="caption">and win special prizes!</p>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: 'contest',
  data () {
    return {
      slides: 0
    }
  }
}
</script>
<style scoped>
.title, .display-1 {
  font-family: 'Poppins', sans-serif !important;
}

.layout > div {
  padding: 0 !important;
}
</style>
