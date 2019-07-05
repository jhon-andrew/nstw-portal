<template>
  <v-card :ripple="{ class: 'blue--text text--lighten-4' }" class="teal white--text" to="/dashboard/contest/">
    <v-layout column fill-height class="ma-0">
      <v-flex d-flex>
        <v-card-text class="my-auto text-xs-center">
          <v-icon large color="white" class="mb-3">tag_faces</v-icon>
          <p class="title">Raffle</p>
          <!-- <p class="caption">and win special prizes!</p> -->
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: 'contest'
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
