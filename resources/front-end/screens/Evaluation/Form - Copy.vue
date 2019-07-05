
   <template>
    <v-content :class="[$vuetify.breakpoint.mdAndDown ? 'mobile' : null]">
       <v-container fluid>
        <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">Name of step 3</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                  class="mb-5"
                  height="400px"
                >
                   <v-form ref="evaluationForm">
                        <v-container fluid>
                            <v-layout row wrap>
                              <v-flex xs12 lg5>
                                <v-text-field box v-model="evaluation.q1" label="ENTER REGISTRATION CODE" :disabled="loading" height="100" style="text-align:center" />
                              </v-flex>
                              <!--v-flex xs12 lg2>
                                <v-text-field box v-model="evaluation.q2" label="MIDDLE INITIAL" :disabled="loading" />
                              </v-flex>
                              <v-flex xs12 lg5>
                                <v-text-field box v-model="evaluation.q3" label="SURNAME" :rules="[$rules.required]" :disabled="loading" required />
                              </v-flex-->
                           </v-layout>
                        </v-container>
                    </v-form>
                    
                </v-card>

                <v-btn
                  color="primary"
                  @click="e1 = 2"
                >
                  SKIP
                </v-btn>

                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                  class="mb-5"
                  height="400px"
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                    
                </v-card>

                <v-btn
                  color="primary"
                  @click="e1 = 3"
                >
                  Continue
                </v-btn>

                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  class="mb-5"
                  color="grey lighten-1"
                  height="400px"
                ></v-card>

                <v-btn
                  color="primary"
                  @click="e1 = 1"
                >
                  Continue
                </v-btn>

                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
          </v-container>
    </v-content>
</template>
<script>
  export default {
    data () {
      return {
        e1: 0,
        loading: false,
        evaluation: {
              
        },
      }
    }
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