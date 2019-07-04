<template>
  <video ref="video" class="video" @click="exitVideo()">
    <source :src="`/assets/dashboard/rendered/videos/${$route.params.id}.mp4`" type="video/mp4" />
  </video>
</template>
<script>
export default {
  data () {
    return {
      resume: false,
      video: null
    }
  },
  mounted () {
    const video = this.$refs.video
    this.video = video

    // video.currentTime = 2
    video.playbackRate = 1.5

    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 2 && !this.resume) video.pause()
      if (video.currentTime === video.duration) this.$router.go(-1)
    })
    
    video.addEventListener('loadedmetadata', function () {
      this.play().then(() => console.log('Playing...')).catch(err => console.log(err))
      console.log(this.duration)
    })
  },
  methods: {
    exitVideo () {
      this.resume = true
      this.video.play()
    }
  }
}
</script>
<style scoped>
.video {
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 100%;
  max-height: 100%;
}
</style>
