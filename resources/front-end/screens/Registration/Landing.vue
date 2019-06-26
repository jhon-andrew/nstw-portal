<template>
  <v-content :class="[$vuetify.breakpoint.mdAndDown ? 'mobile' : null]">
    <v-container fill-height>
      <v-layout row wrap align-center>
        <v-flex xs12 lg5 offset-lg7>

          <v-layout column wrap align-center>
            <v-flex>
              <!-- <v-img src="/assets/dost-seal.png" contain width="80" /> -->
              <v-img src="https://drive.google.com/uc?id=11EvmezlErcmdMUhrLmSk6HKzrLtkhC0E" contain width="80" />
            </v-flex>
            <v-flex class="my-5 nstw2019 yellow--text">
              <!-- <v-img src="/assets/nstw.png" contain width="64" class="d-inline-block mr-2" /> -->
              <v-img src="https://drive.google.com/uc?id=1MHlfZJiNYYXK0gTZRMrJO6XxCqhN0S9C" contain width="64" class="d-inline-block mr-2" />
              <span class="hidden-md-and-down">National Science and Technology Week 2019</span>
              <span class="hidden-sm-and-up">NSTW 2019</span>
            </v-flex>
            <v-flex class="promotion" style="width: 100%;">
              <!-- <h2 class="white--text">Regional Offices'</h2>
              <h1 class="yellow--text" :class="[$vuetify.breakpoint.mdAndDown ? 'display-3' : 'display-4']">Exhibit <small>area</small></h1>
              <h3 class="headline white--text">#ASTIGCountryside</h3> -->
              <!-- <v-img src="/assets/ro-exhibit-branding.png" contain /> -->
              <v-img src="https://drive.google.com/uc?id=1ju5nmAXAf6Fk-ahx-t_4H49lBaieyphS" contain />
            </v-flex>
            <v-flex class="my-5">
              <v-btn large class="custom-btn" to="/registration/form">
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
            <!-- <v-img src="/assets/landing-mobile.jpg" contain /> -->
            <v-img src="https://drive.google.com/uc?id=158uCPM9PaYAs-ocp6JQIo9BFCX2fOAvx" contain />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'registration-landing'
}
</script>

<style scoped>
.v-content {
  /* background-image: url('/assets/landing-bg.jpg'), linear-gradient(99deg,  #ffffff 53.2%,#4fa891 46.8%); */
  background-image: url('https://drive.google.com/uc?export=download&id=1-UEW228dNkLuOHAIHZ8-QyLUxBgTfWAo'), linear-gradient(99deg,  #ffffff 53.2%,#4fa891 46.8%);
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

.footer {
  transform: skew(170deg);
}

.footer.mobile {
  transform: none;
}

.footer.mobile .headline {
  transform: skew(14deg);
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
  font-family: 'Poppins', sans-serif !important;
  font-weight: 700;
  font-style: italic;
  text-align: center !important;
}

.footer .schedule > small {
  font-size: 18px;
}

.footer p {
  text-indent: 25px;
}
</style>
