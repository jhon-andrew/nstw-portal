<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Material+Icons|Poppins:300,400,700&display=swap');

#app, body {
  font-family: 'Poppins', sans-serif !important;
  user-select: none;
}

.display-4, .display-3, .display-2, .display-1, .headline, .title, .subheading, .body-2, .body-1, .caption {
  font-family: 'Poppins', sans-serif !important;
}

.fw-300 { font-weight: 300 !important; }
.fw-400 { font-weight: 400 !important; }
.fw-700, .fw-bold { font-weight: 700 !important; }
.fs-italic { font-style: italic; }

.v-btn.custom-btn {
  font-weight: bold !important;
  color: #4fa891 !important;
  box-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5) !important;
  border-radius: 0 !important;
}
</style>

