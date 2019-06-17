<template>
  <v-content :class="{'responsive': $vuetify.breakpoint.mdAndDown}">
    <v-container fill-height grid-list-lg>
      <v-layout row wrap align-center>
        <!-- white-side -->
        <v-flex xs12 lg6 order-xs2 order-lg1>
          <v-img src="/assets/registration/landing-01.png" height="440" contain />

          <v-layout row wrap align-center class="my-2">
            <v-flex xs6>
              <p class="slogan-01 body-2 text-xs-center">For #ASTIGCountryside, we support the SDGs.</p>
            </v-flex>
            <v-flex xs6 d-flex>
              <v-img
                v-for="img in 3" :key="img"
                :src="`/assets/registration/slogan-icon-0${img}.jpg`"
                aspect-ratio="1"
                class="mx-2"
                contain
                />
            </v-flex>
          </v-layout>

          <v-layout row wrap align-center>
            <v-flex xs6>
              <v-img src="/assets/registration/sdg.png" contain />
            </v-flex>
            <v-flex xs6>
              <v-img src="/assets/registration/science-for-people.png" contain />
            </v-flex>
          </v-layout>
        </v-flex><!-- /white-side -->

        <!-- teal-side -->
        <v-flex xs12 lg6 order-xs1 order-lg2>

          <v-layout column align-center>
            <v-flex>
              <v-img src="/assets/dost-seal.png" width="64" height="64" />
            </v-flex>
            <v-flex d-flex align-center class="mt-3">
              <v-img src="/assets/registration/nstw.png" class="mr-2" width="64" />
              <span class="nstw hidden-md-and-down">National Science and Technology Week 2019</span>
              <span class="nstw hidden-sm-and-up">NSTW 2019</span>
            </v-flex>
            <v-flex class="text-xs-center italics my-4">
              <h2 class="white--text with-shadow display-1">REGIONAL OFFICES'</h2>
              <h1 :class="['yellow--text', 'with-shadow', $vuetify.breakpoint.mdAndDown ? 'display-3' : 'display-4']">Exhibit <small class="cursive">area</small></h1>
              <h3 class="white--text headline">#ASTIGCountryside</h3>
            </v-flex>
            <v-flex>
              <v-btn large>Register Here</v-btn>
            </v-flex>
          </v-layout>

          <v-divider class="hidden-sm-and-up mt-5 yellow" />

          <v-layout class="footer mt-5" row wrap>
            <v-flex xs12 lg5 :class="{'responsive': $vuetify.breakpoint.mdAndDown}">
              <div :style="{transform: $vuetify.breakpoint.mdAndDown ? 'none' : 'skew(15deg)'}" class="text-xs-center text-lg-left">
                <h3 class="white--text headline">July 17-21, 2019</h3>
                <span class="white--text">World Trade Center, Pasay City</span>
              </div>
            </v-flex>
            <v-divider class="hidden-sm-and-up mt-5 yellow" />
            <v-flex xs12 lg7 :class="{'responsive': $vuetify.breakpoint.mdAndDown}">
              <p :style="{transform: $vuetify.breakpoint.mdAndDown ? 'none' : 'skew(15deg)'}" class="white--text ml-2">
                The DOST Regional Offices’ Exhibit area 
                will be a collection of Science, Technology 
                and Innovation (STI) efforts and stories from 
                the DOST Regional Offices in bringing 
                <span class="yellow--text">A</span>ccelerated <span class="yellow--text">STI</span> for <span class="yellow--text">G</span>rowth in the <span class="yellow--text">Countryside</span>.
              </p>
            </v-flex>
          </v-layout>

          <v-divider class="hidden-sm-and-up mt-5 yellow" />
        </v-flex><!-- /teal-side -->
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'landing'
}
</script>

<style scoped>
.v-content {
  background: fixed linear-gradient(104deg,  #ffffff 53.5%,#4fa891 46.5%);
}

.v-content.responsive {
  background: #4fa891 !important;
}

.slogan-01, .display-4, .display-3, .display-1, .headline {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700;
}

.slogan-01 {
  color: #1c75bc;
  font-style: italic;
}

.nstw {
  color: #fff200;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
}

.italics {
  font-style: italic;
}

.with-shadow {
  text-shadow: -2px 0px 0px rgba(0, 0, 0, 0.5);
}

.cursive {
  display: inline-block;
  transform: rotate(-20deg);
  position: relative;
  top: -10px;
  left: -10px;
  font-family: 'Sacramento', cursive;
  font-weight: 300;
  text-shadow: none;
  letter-spacing: 0;
  font-size: 50px;
}

.v-btn {
  border-radius: 0 !important;
  color: #4fa891 !important;
  box-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5) !important;
  font-weight: bold !important;
}

.footer > .flex:first-child {
  transform: skew(165deg);
  border-right: 5px solid #ffffff;
}

.footer > .flex:nth-child(3) {
  transform: skew(165deg);
  text-align: justify;
  text-indent: 25px;
}

.footer > .flex.responsive {
  transform: none;
  border-right: none;
}
</style>
