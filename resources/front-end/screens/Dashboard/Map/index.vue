<template>
  <v-content>
    <!-- <router-view /> -->
    <div class="maps">
      <video muted class="hidden-xs" ref="sustainable-development-goal-1">
        <source src="/assets/dashboard/rendered/videos/sustainable-development-goal-1.mp4" type="video/mp4" />
      </video>
    </div>
  </v-content>
</template>
<script>
import { exhibits } from '@/contents.json'
export default {
  data () {
    return {
      kiosks: exhibits.kiosks.map(kiosk => {
        kiosk.slug = kiosk.name.toLowerCase().split(' ').join('-')
        return kiosk
      })
    }
  },
  mounted () {
    this.$refs['sustainable-development-goal-1'].play()
  }
}
</script>
<style scoped>
.maps > video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
