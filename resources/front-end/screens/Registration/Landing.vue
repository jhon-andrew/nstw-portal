<template>
  <v-content :class="[$vuetify.breakpoint.mdAndDown ? 'mobile' : null]">
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex xs12 lg5 offset-lg7>

          <v-layout column wrap align align-center>
            <v-flex>
              <v-img src="/assets/dost-seal.png" contain width="80" />
            </v-flex>
            <v-flex class="my-5 nstw2019 yellow--text">
              <v-img src="/assets/registration/nstw.png" contain width="64" class="d-inline-block mr-2" />
              <span class="hidden-md-and-down">National Science and Technology Week 2019</span>
              <span class="hidden-sm-and-up">NSTW 2019</span>
            </v-flex>
            <v-flex class="promotion">
              <h2 class="white--text">Regional Offices'</h2>
              <h1 class="yellow--text" :class="[$vuetify.breakpoint.mdAndDown ? 'display-3' : 'display-4']">Exhibit <small>area</small></h1>
              <h3 class="headline white--text">#ASTIGCountryside</h3>
            </v-flex>
            <v-flex class="my-5">
              <v-btn large to="form">
                Register Here
              </v-btn>
            </v-flex>
            <v-flex>
              <v-layout row wrap class="footer" :class="[$vuetify.breakpoint.mdAndDown ? 'mobile' : null]" align-center>
                <v-flex xs12 lg6 class="mb-4">
                  <h3 class="white--text headline text-lg-left schedule">
                    July 17-21, 2019
                    <small class="d-block body-1">World Trade Center, Pasay City</small>
                  </h3>
                </v-flex>
                <v-flex xs12 lg6 :class="[$vuetify.breakpoint.mdAndDown ? 'mobile pt-3' : 'pl-3']">
                  <p class="text-xs-justify white--text caption">
                    The DOST Regional Offices' Exhibit area will be a collection of Science, 
                    Technology and Innovation (STI) efforts and stories from the DOST Regional
                    Offices in bringing <span class="yellow--text">A</span>ccelerated <span class="yellow--text">STI</span> for <span class="yellow--text">G</span>rowth in the <span class="yellow--text">Countryside</span>.
                  </p>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex class="xs12 hidden-sm-and-up">
          <v-card>
            <v-img src="/assets/registration/landing-mobile.jpg" contain />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style scoped>
.v-content {
  background-image: url('/assets/registration/landing-bg.jpg'), linear-gradient(99deg,  #ffffff 53.2%,#4fa891 46.8%);
  background-position: center center, center center;
  background-size: contain;
  background-attachment: fixed;
}

.v-content.mobile {
  background-image: linear-gradient(0deg, #42c3a2 50%, #4fa891 85%);
  background-attachment: scroll;
}

.nstw2019 {
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
}

.nstw2019 > .v-image {
  vertical-align: middle;
}

.promotion > h1, .promotion > h2, .promotion > h3, .headline {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700;
  font-style: italic;
  text-align: center;
}

.promotion > h2 {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 40px !important;
}

.promotion > h1, .promotion > h2 {
  text-shadow: -2px 0px 0px rgba(0, 0, 0, 0.5);
}

.promotion > h1 > small {
  font-family: 'Sacramento', cursive;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 0;
  display: inline-block;
  transform: rotate(-20deg);
  position: relative;
  top: -10px;
  left: -10px;
}

.v-btn:not(.primary) {
  font-weight: bold !important;
  color: #4fa891;
  box-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5) !important;
  border-radius: 0 !important;
}

.footer {
  transform: skew(170deg);
}

.footer.mobile {
  transform: none;
}

.footer.mobile > .flex:first-child {
  border-top: 1px dashed #ffffff;
  padding-top: 24px;
}

.footer > .flex:nth-child(2) {
  border-left: 5px solid #ffffff;
}

.footer > .flex:nth-child(2).mobile {
  border-left: none;
  border-top: 1px dashed #ffffff;
}

.footer .schedule {
  transform: skew(15deg);
}

.footer .schedule > small {
  font-size: 18px;
}

.footer p {
  text-indent: 25px;
}
</style>
