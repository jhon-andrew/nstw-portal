<template>
  <v-container fluid fill-height>
    <div class="map">
      <div class="garden-and-wellness-area" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="$router.push({ path: '/dashboard/exhibit/kiosk/garden-and-wellness-area/' })">
        <span>Garden and<br />Wellness Area</span>
      </div>
      <div class="concierge" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="$router.push({ path: '/dashboard/exhibit/kiosk/concierge/' })">
        <span>Concierge</span>
      </div>
      <div class="innovation-lounge" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="$router.push({ path: '/dashboard/exhibit/kiosk/innovation-lounge/' })">
        <span>Innovation Lounge</span>
      </div>
      <div class="game-zone" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="$router.push({ path: '/dashboard/exhibit/kiosk/game-zone/' })">
        <span>Game Zone</span>
      </div>
      <div class="game-zone-2" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="$router.push({ path: '/dashboard/exhibit/kiosk/game-zone/' })">
        <span>Game Zone</span>
      </div>
      <div class="souvenir-shoppe" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="$router.push({ path: '/dashboard/exhibit/kiosk/souvenir-shoppe' })">
        <span>Souvenir Shoppe</span>
      </div>
      <div class="sustainable-development-goal-16" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="$router.push({ path: '/dashboard/exhibit/kiosk/sustainable-development-goal-16' })">
        <span>Sustainable Development Goal 16</span>
      </div>
      <div class="sustainable-development-goal-1" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="$router.push({ path: '/dashboard/exhibit/kiosk/sustainable-development-goal-1' })">
        <span>Sustainable Development Goal 1</span>
      </div>
      <div class="sustainable-development-goal-8" v-ripple="{ class: 'indigo--text text--lighten-3' }" @click="$router.push({ path: '/dashboard/map/kiosk/sustainable-development-goal-8' })">
        <span>Sustainable Development Goal 8</span>
      </div>
    </div>
  </v-container>
</template>
<style scoped>
.map {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background-image: url('/assets/dashboard/rendered/main.jpg'), url('/assets/dashboard/rendered/bg-pattern.jpg');
  background-position: center center, center center;
  background-repeat: no-repeat, repeat;
  background-size: contain;
}

.map > div {
  /* background-color: rgba(0,0,0,0.2); */
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  text-shadow: 1px 2px 4px #000000;
  font-size: 25px;
}

.garden-and-wellness-area {
  width: 310px;
  height: 310px;
  bottom: 53px;
  right: 567px;
  z-index: 0;
}

.concierge {
  width: 245px;
  height: 245px;
  bottom: 159px;
  right: 401px;
  z-index: 1;
}

.innovation-lounge {
  width: 410px;
  height: 410px;
  bottom: 65px;
  left: 417px;
  z-index: 2;
}

.game-zone {
  width: 400px;
  height: 400px;
  top: 137px;
  right: 431px;
  z-index: 3;
}

.game-zone-2 {
  width: 385px;
  height: 385px;
  top: 71px;
  right: 764px;
  z-index: 4;
}

.souvenir-shoppe {
  width: 430px;
  height: 430px;
  top: 52px;
  left: 395px;
  z-index: 5;
}

.sustainable-development-goal-16 {
  width: 455px;
  height: 455px;
  top: 252px;
  left: 287px;
  z-index: 6;
}

.sustainable-development-goal-1 {
  width: 475px;
  height: 475px;
  top: 329px;
  right: 315px;
  z-index: 7;
}

.sustainable-development-goal-8 {
  width: 590px;
  height: 590px;
  bottom: 44px;
  left: 638px;
  z-index: 8;
}

</style>
