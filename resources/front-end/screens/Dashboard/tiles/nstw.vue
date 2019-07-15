<template>
  <v-card class="nstw-branding d-flex" :ripple="{ class: 'blue--text text--lighten-4' }">
    <v-card-title>
      <div class="d-flex" style="flex: 1;">
        <v-img contain src="/assets/dost-seal.png" width="32" height="32" />
        <div class="title ml-2">Department of Science and Technology</div>
      </div>
    </v-card-title>
    <v-window v-model="nstwBrandingCarousel" style="overflow: hidden;" vertical reverse>
      <v-window-item class="mx-auto" style="padding-bottom: 70px !important;">
        <div class="d-flex" style="align-items: center;">
          <v-img contain src="/assets/nstw.png" width="84" />
          <div class="ml-2">
            <div class="caption">in celebration of the</div>
            <div class="headline">2019 National Science and Technology Week</div>
          </div>
        </div>
      </v-window-item>
      <v-window-item class="mx-auto">
        <v-img contain src="/assets/dashboard/sftp.png" width="450" />
      </v-window-item>
      <v-window-item class="mx-auto text-xs-center" style="width: 512px;">
        <span class="display-2">Enabling Technologies for Sustainable Development</span>
      </v-window-item>
    </v-window>
    <v-card-text>
      <div class="d-flex">
        <v-img contain src="/assets/dashboard/un-sdg.png" width="279" height="32" />
        <v-spacer />
        <span class="text-xs-right white--text subheading" style="text-shadow: 0px 1px 5px #1f6879;">World Trade Center, Pasay City, July 17 - 21, 2019</span>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'nstw',
  data () {
    return {
      nstwBrandingCarousel: 0,
      nstwBrandingCarouselTimer: null
    }
  },
  created () {
    this.nstwBrandingCarouselTimer = setInterval(() => {
      this.nstwBrandingCarousel += (this.nstwBrandingCarousel === 2) ? -2 : 1
    }, 3608)
  },
  beforeDestroy () {
    clearInterval(this.nstwBrandingCarouselTimer)
  }
}
</script>
<style scoped>
.title, .display-2, .headline {
  font-family: 'Poppins', sans-serif !important;
}

.nstw-branding {
  background: url('/assets/dashboard/backdrop-nstw-2019.jpg') no-repeat center center / cover;
  flex-direction: column;
  text-shadow: 0 1px 0 #74ebd5;
}

.nstw-branding .v-card__title, .nstw-branding .v-card__text {
  flex-grow: unset !important;
}

.nstw-branding .v-card__title > .d-flex, .nstw-branding .v-card__text > .d-flex {
  align-items: center;
}

.nstw-branding .v-card__title .v-image, .nstw-branding .v-card__text .v-image {
  flex-grow: unset !important;
}

.nstw-branding .v-window {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
