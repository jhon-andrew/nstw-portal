<template>
  <v-card dark :ripple="{ class: 'blue--text text--lighten-4' }" class="light-green darken-1" to="/dashboard/activation/">
    <v-layout column fill-height class="ma-0">
      <v-flex d-flex>
        <v-card-text class="my-auto text-xs-center">
          <v-icon large class="mb-3">check_circle_outline</v-icon>
          <p class="title">Confirm your registration</p>
          <!-- <p class="caption">and win special prizes!</p> -->
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-card>
</template>
