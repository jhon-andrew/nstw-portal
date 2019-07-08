<template>
  <v-content>
    <v-container fill-height>
      <v-layout column>
        <v-flex shrink>
          <h2 :class="[$vuetify.breakpoint.mdAndDown ? 'display-1' : 'display-3']" class="white--text">Evaluation Form</h2>
        </v-flex>
        <v-flex d-flex>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step :complete="step > 1" step="1">Personal Information</v-stepper-step>
              <v-stepper-step :complete="step > 2" step="2">NSTW</v-stepper-step>
              <v-stepper-step :complete="step > 3" step="3">#ASTIGCountryside</v-stepper-step>
              <v-stepper-step :complete="step > 4" step="4">Insights</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <!-- Personal Information -->
              <v-stepper-content step="1">
                <v-layout wrap justify-center class="mx-auto">
                  <!-- Activation Code -->
                  <v-flex xs12 lg4>
                    <span class="display-1">Registration Code</span>
                  </v-flex>
                  <v-flex xs12 lg8>
                    <v-text-field label="Fill up if you pre-registered." v-model="evaluation.activation_code" />
                  </v-flex>
                  <!-- Sex -->
                  <v-flex xs12 lg4>
                    <span class="display-2">Sex</span>
                  </v-flex>
                  <v-flex xs12 lg8>
                    <v-container grid-list-lg>
                      <v-layout wrap justify-center>
                        <v-flex xs6>
                          <v-card :color="evaluation.sex === 'male' ? 'teal lighten-4' : ''" @click="evaluation.sex = 'male'">
                            <v-card-text class="text-xs-center">
                              <v-img contain src="/assets/evaluation/q1-male.png" style="max-height: 128px;" />
                              <span>Male</span>
                            </v-card-text>
                          </v-card>
                        </v-flex>
                        <v-flex xs6>
                          <v-card :color="evaluation.sex === 'female' ? 'teal lighten-4' : ''" @click="evaluation.sex = 'female'">
                            <v-card-text class="text-xs-center">
                              <v-img contain src="/assets/evaluation/q1-female.png" style="max-height: 128px;" />
                              <span>Female</span>
                            </v-card-text>
                          </v-card>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-flex>
                  <!-- Age Group -->
                  <v-flex xs12 lg4>
                    <span class="display-2">Age Group</span>
                  </v-flex>
                  <v-flex xs12 lg8>
                    <v-select box v-model="evaluation.age_group" label="Which age group do you belong?" :items="constants.age_group"></v-select>
                  </v-flex>
                  <!-- Organization -->
                  <v-flex xs12 lg4>
                    <span class="display-2">Organization</span>
                  </v-flex>
                  <v-flex xs12 lg8>
                    <v-select box v-model="evaluation.organization" label="Where are you connected?" :items="constants.organization"></v-select>
                  </v-flex>
                </v-layout>
              </v-stepper-content>
              <!-- NSTW -->
              <v-stepper-content step="2">
                <v-layout wrap justify-center class="mx-auto">
                  <v-flex xs12>
                    <span class="display-2">Is this your first time to attend the NSTW?</span>
                  </v-flex>
                  <!-- first_time -->
                  <v-flex xs12>
                    <v-radio-group row v-model="evaluation.first_time">
                      <v-radio color="teal" label="Yes, it is." :value="true" />
                      <v-radio color="teal" label="No, I have joined previously." :value="false" />
                    </v-radio-group>
                  </v-flex>
                  <v-slide-x-transition>
                    <v-flex xs12 v-if="evaluation.first_time === false">
                      <span class="display-2">How was your experience of the last NSTW?</span>
                    </v-flex>
                  </v-slide-x-transition>
                  <v-slide-x-transition>
                    <!-- prev_nstw -->
                    <v-flex xs12 v-if="evaluation.first_time === false">
                      <v-radio-group row v-model="evaluation.prev_nstw">
                        <v-radio
                          color="teal"
                          v-for="(prev_nstw, index) in constants.prev_nstw"
                          :key="prev_nstw"
                          :label="index + ': ' + prev_nstw"
                          :value="index" />
                      </v-radio-group>
                    </v-flex>
                  </v-slide-x-transition>
                  <v-flex xs12>
                    <span class="display-2 d-block">How did you know about the NSTW 2019?</span>
                    <span class="caption">Select multiple options if applicable.</span>
                  </v-flex>
                  <!-- nstw_ref -->
                  <v-flex xs12>
                    <v-layout wrap>
                      <v-flex shrink class="mr-3" v-for="(nstw_ref, index) in constants.nstw_ref" :key="nstw_ref">
                        <v-checkbox color="teal" v-model="evaluation.nstw_ref" :label="index + ': ' + nstw_ref" :value="index"></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-stepper-content>
              <!-- #ASTIGCountryside -->
              <v-stepper-content step="3">
                <v-layout wrap justify-center class="mx-auto">
                  <v-flex xs12>
                    <span class="display-2 d-block">How did you know about the #ASTIGCountryside?</span>
                    <span class="caption">Select multiple options if applicable.</span>
                  </v-flex>
                  <!-- astigc_ref -->
                  <v-flex xs12>
                    <v-layout wrap>
                      <v-flex shrink class="mr-3" v-for="(astigc_ref, index) in constants.astigc_ref" :key="astigc_ref">
                        <v-checkbox color="teal" v-model="evaluation.astigc_ref" :label="index + ': ' + astigc_ref" :value="index"></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12>
                    <span class="display-2">How will you rate your overall experience in the #ASTIGCountryside?</span>
                  </v-flex>
                  <!-- prev_astigc -->
                  <v-flex xs12>
                    <v-radio-group row v-model="evaluation.prev_astigc">
                      <v-radio
                        color="teal"
                        v-for="(prev_astigc, index) in constants.prev_astigc"
                        :key="prev_astigc"
                        :label="index + ': ' + prev_astigc"
                        :value="index" />
                    </v-radio-group>
                  </v-flex>
                  <v-flex xs12>
                    <span class="display-2">How likely will you recommend the #ASTIGCountryside to your family and friends?</span>
                  </v-flex>
                  <v-flex xs12>
                    <v-btn large icon round outline @click="evaluation.recommend_astigc = true" :color="evaluation.recommend_astigc ? 'teal' : ''">
                      <v-icon>thumb_up</v-icon>
                    </v-btn>
                    <v-btn large icon round outline @click="evaluation.recommend_astigc = false" :color="evaluation.recommend_astigc === false ? 'teal' : ''">
                      <v-icon>thumb_down</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-stepper-content>
              <!-- Insights -->
              <v-stepper-content step="4">
                <v-layout wrap justify-center class="mx-auto">
                  <v-flex xs12>
                    <span class="display-2">What are your insights about the #ASTIGCountryside?</span>
                  </v-flex>
                  <v-flex xs12>
                    <v-layout wrap>
                      <v-flex shrink class="mr-3" v-for="(astigc_insights, index) in constants.astigc_insights" :key="astigc_insights">
                        <v-checkbox color="teal" v-model="evaluation.astigc_insights" :label="index + ': ' + astigc_insights" :value="index"></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-flex>
        <v-flex shrink class="white pa-2">
          <v-btn large :disabled="step === 1" @click="step -= 1">Previous</v-btn>
          <v-btn v-if="step < 4" large dark color="teal lighten-1" @click="step += 1">Next</v-btn>
          <v-btn v-else large :dark="!loading" color="teal lighten-1" @click="submit" :loading="loading" :disabled="loading">Submit</v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog v-model="prompt" max-width="320">
      <v-card>
        <v-card-text>
          <p class="subheading">{{response.message}}</p>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn flat @click="prompt = false">
            Close
          </v-btn>
          <v-btn flat color="primary" to="/game">
            Proceed
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</template>
<script>
import constants from './constants.json'
export default {
  data () {
    return {
      step: 1,
      evaluation: {
        sex: null,
        nstw_ref: [],
        astigc_ref: [],
        astigc_insights: [],
        recommend_astigc: null,
      },
      constants,
      loading: false,
      prompt: false,
      response: {}
    }
  },
  watch: {
    'evaluation.first_time' (from, to) {
      if (to === true) {
        this.evaluation.prev_nstw = undefined
      }
    }
  },
  methods: {
    async submit () {
      let evaluation = {}

      this.loading = true

      Object.keys(this.evaluation).forEach(key => {
        if (typeof this.evaluation[key] === 'object') {
          evaluation[key] = this.evaluation[key].length > 1 ? this.evaluation[key].join(',') : String(this.evaluation[key][0])
        } else evaluation[key] = this.evaluation[key]
      })

      let { data: response } = await this.$request.post('/api/evaluation/', evaluation)
      this.loading = false
      this.response = response
      this.prompt = true
    }
  }
}
</script>

<style scoped>
.v-content {
  background-image: linear-gradient(145deg, #11998e, #38ef7d);
}
.display-3, .display-2, .display-1 {
  font-family: 'Poppins', sans-serif !important;
}
.v-stepper__content .layout {
  max-width: 1024px;
}
</style>