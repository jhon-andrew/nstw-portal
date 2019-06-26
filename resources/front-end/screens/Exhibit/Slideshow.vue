<template>
  <v-content>
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <v-carousel style="width: 500px; height: 500px;" class="mx-auto">
            <v-carousel-item hide-controls v-for="slideshow in exhibits.slideshow" :key="slideshow" :src="slideshow.image">
              <v-layout fill-height column class="filter">
                <v-flex>
                  <v-layout row wrap class="ma-2">
                    <!-- <v-flex><v-img contain src="/assets/dost-seal.png" width="64" height="64" /></v-flex> -->
                    <v-flex><v-img contain src="https://drive.google.com/uc?id=11EvmezlErcmdMUhrLmSk6HKzrLtkhC0E" width="64" height="64" /></v-flex>
                    <v-spacer />
                    <v-flex ><v-img contain :src="slideshow.icon" width="64" height="64" class="right" /></v-flex>
                  </v-layout>
                </v-flex>
                <v-flex justify-end>
                  <div class="text-xs-center white--text display-1 pin-bottom">
                    <p v-html="slideshow.caption"></p>
                    <v-btn large color="blue darken-2" :to="slideshow.learnMore">Learn More</v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex xs4>
          <!-- <v-img contain src="/assets/un-sdg.png" width="172" /> -->
          <v-img contain src="https://drive.google.com/uc?id=1O7BCcPKZjLccwZtTZpwwtKadoH19QI_1" width="172" />
        </v-flex>
        <v-flex xs4>
          <p class="yellow--text text-xs-center nstw">
            National Science and Technology Week 2019<br />
            Regional Exhibit Area
          </p>
        </v-flex>
        <v-flex xs4>
          <!-- <v-img contain src="/assets/sftp.png" width="164" class="right" /> -->
          <v-img contain src="https://drive.google.com/uc?export=download&id=1Cxxc6xK-XDO3ejSYirOxtatuaVDYNL7l" width="164" class="right" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import { exhibits } from '@/contents'

export default {
  name: 'exhibit-slideshow',
  data () {
    return {
      exhibits
    }
  }
}
</script>
<style scoped>
.v-content {
  background-color: #231f20;
}
.pin-bottom {
  font-family: 'Poppins', sans-serif;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
}

.filter {
  box-shadow: inset 0 -250px 250px rgba(0,0,0,0.8);
}

.nstw {
  text-transform: uppercase;
}
</style>
