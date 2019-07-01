<template>
  <v-content>
    <video ref="map" class="map">
      <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
    </video>
    <v-container fluid>
      <v-layout>
        <v-flex xs4 offset-xs8>
          <v-card>
            <v-card-title primary-title>
              <div class="title">Concierge</div>
            </v-card-title>
            <v-card-text>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur soluta quod fugit hic deleniti adipisci facere tempore qui reprehenderit, quas unde quo deserunt consequuntur eaque eveniet, illum minus nisi corrupti?</p>
            </v-card-text>
          </v-card>
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
    video.addEventListener('timeupdate', function () {
      console.log(this.currentTime, typeof this.currentTime)
      if (this.currentTime >= 3) this.pause()
    })

    video.addEventListener('loadedmetadata', () => {
      video.play().then(resp => console.log({resp})).catch(err => console.log({err}))
    })
  }
}
</script>
<style scoped>
.map {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
