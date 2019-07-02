<template>
  <v-content class="indigo lighten-5">
    <!-- <video loop ref="map" class="map">
      <source src="/assets/dashboard/rain.mp4" type="video/mp4" />
    </video> -->
    <!-- <div class="map"></div> -->
    <v-container fluid class="pa-0">
      <v-layout wrap>
        <router-view name="video" />
        <v-flex xs4 offset-xs8>
          <v-toolbar flat dark color="indigo lighten-1">
            <v-toolbar-side-icon @click="$router.go(-1)">
              <v-icon>arrow_back</v-icon>
            </v-toolbar-side-icon>
            <v-spacer />
            <v-toolbar-items>
              <v-btn icon to="/dashboard/" active-class="">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <div class="pa-4">
            <router-view />
          </div>
          <!-- <v-card class="mt-3" v-for="n in 25" :key="n">
            <v-card-text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ex dolorem odit placeat, provident dicta veritatis perspiciatis ipsam accusantium explicabo architecto neque hic fuga dolorum eum, sit et praesentium aliquid!
            </v-card-text>
          </v-card> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data () {
    return {
      modal: true
    }
  },
  mounted () {
    const video = this.$refs.map
    // video.addEventListener('timeupdate', function () {
    //   if (this.currentTime >= 3) this.pause()
    // })

    // video.addEventListener('loadedmetadata', () => {
    //   video.play().then(resp => console.log({resp})).catch(err => console.log({err}))
    // })
  }
}
</script>
<style scoped>
.display-1 {
  font-family: 'Poppins', sans-serif !important;
}
</style>
