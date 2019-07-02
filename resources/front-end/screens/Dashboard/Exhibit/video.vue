<template>
  <v-flex xs8 :class="{ 'map-animate': mapAnimate, map: true, 'white--text': true }" :style="`background-image: url('/assets/dashboard/rendered/${$route.params.id || 'main'}.jpg'), url('/assets/dashboard/rendered/bg-pattern.jpg');`">
    <!-- <v-card>
      <v-card-text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa delectus possimus non quas quos consectetur repellendus fugit, totam magnam rerum quisquam iusto, odio, molestiae eos. Nemo tempore veritatis repellat cumque?
      </v-card-text>
    </v-card> -->
  </v-flex>
</template>
<script>
export default {
  data () {
    return {
      mapAnimate: true
    }
  },
  watch: {
    $route (to, from) {
      this.mapAnimate = false
      setTimeout(() => {
        this.mapAnimate = true
      }, 1)
    }
  }
}
</script>
<style scoped>
.map {
  position: fixed;
  /* right: 0;
  bottom: 0;
  min-width: 100%; */
  top: 0;
  left: 0;
  min-width: 66.66666666666666%;
  min-height: 100%;
  /* background-image: url('/assets/dashboard/rendered/main.jpg'); */
  background-position: center center;
  background-size: cover;
  background-color: #ecfafa;
}

.map-animate {
  animation: breath 1s linear forwards;
}

@keyframes breath {
  0% { background-size: 100%; }
  100% { background-size: 110%; }
  /* 100% { background-size: 137%; } */
}
</style>
