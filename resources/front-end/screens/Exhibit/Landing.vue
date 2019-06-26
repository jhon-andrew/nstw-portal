<template>
  <v-content class="primary">
    <v-toolbar fixed color="primary" class="hidden-lg-and-up">
      <v-toolbar-title class="yellow--text">exhibits</v-toolbar-title>
    </v-toolbar>
    <v-container fill-height style="padding-top: 56px;">
      <v-layout row wrap align-center>
        <v-flex xs12 lg6>
          <!-- <v-img contain src="/assets/venue-thumbnail.png" class="my-3" /> -->
          <v-img contain src="https://drive.google.com/uc?id=1AD8jt0Rob-CCt3TfxMdgrMGWARkmI7r8" class="my-3" />
        </v-flex>
        <v-flex xs12 lg6 class="text-xs-center">
          <h1 class="yellow--text display-4 hidden-md-and-down">exhibits</h1>
          <p class="white--text subheading">
            Know where to go. Know the activities.<br />
            Know what to see at the NSTW Regional Exhibits Area.
          </p>

          <v-btn large class="my-5 custom-btn" to="/exhibit/map/">Go to Exhibits</v-btn>

          <div class="my-5">
            <!-- <v-img contain src="/assets/nstw.png" width="94" class="d-inline-block" /> -->
            <v-img contain src="https://drive.google.com/uc?id=1MHlfZJiNYYXK0gTZRMrJO6XxCqhN0S9C" width="94" class="d-inline-block" />
            <h2 class="display-3 white--text d-inline-block ml-2">#NSTW2019</h2>
          </div>

          <!-- <v-img contain src="/assets/ro-exhibit-branding.png" max-width="256" class="mx-auto" /> -->
          <v-img contain src="https://drive.google.com/uc?id=1ju5nmAXAf6Fk-ahx-t_4H49lBaieyphS" max-width="256" class="mx-auto" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'exhibit-landing'
}
</script>

<style scoped>
h1, h2 {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700;
}

h1.display-4, .v-toolbar__title {
  text-shadow: -2px 0px 0px #ffffff;
}

.v-toolbar__title {
  font-weight: 700;
}
</style>
