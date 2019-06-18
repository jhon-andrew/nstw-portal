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

<style scoped>
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
</style>

