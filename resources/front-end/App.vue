<template>
  <v-app>
    <router-view />
    <!-- <v-toolbar flat class="py-4">
      <v-avatar size="64" tile>
        <img src="assets/dost-seal.png" />
      </v-avatar>
      <v-toolbar-title>
        <v-subheader class="toolbar-subheader">Department of Science and Technology</v-subheader>
        National Science and Technology Week
        <v-subheader class="toolbar-subheader">Science for the People | Enabling Technologies for Sustainable Development</v-subheader>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content> -->
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons|Poppins:300,400,700|Sacramento&display=swap');

#app, body {
  font-family: 'Poppins', sans-serif;
  user-select: none;
}

.display-4, .display-3, .display-2, .display-1, .headline, .title, .subheading, .body-2, .body-1, .caption {
  font-family: 'Poppins', sans-serif !important;
}

.fw-300 { font-weight: 300 !important; }
.fw-400 { font-weight: 400 !important; }
.fw-700 { font-weight: 700 !important; }

.toolbar-subheader {
  height: initial !important;
  padding: 0 !important;
}
</style>

