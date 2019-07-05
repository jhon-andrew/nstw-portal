
   <template>
    <v-content :class="[$vuetify.breakpoint.mdAndDown ? 'mobile' : null]">
       <v-container fluid>
        <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Gender | Age Group</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step step="3">Name of step 3</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                  class="mb-5"
                  height="100%"
                >
                   <v-form ref="evaluationForm">
                        <v-container fluid>
                            <v-layout row wrap style="auto: 0;">
                              <v-flex xs12 lg4 style="auto: 0; text-align: center;">
                              </v-flex>
                           </v-layout>
                        </v-container>
                        <v-layout row justify-center>
                            
                            <v-flex xs2>
                                <v-hover>
                                  <v-img
                                    hover
                                    width="155"
                                    src="/assets/evaluation/q1-male.png"
                                    @click="evaluation.q1 = 'male'"
                                  ></v-img>
                                  
                              </v-hover>
                              <div width="155" style="text-align: center">Male</div>
                            </v-flex>
                             <v-flex xs2>
                              <v-hover>
                                  <v-img
                                    hover
                                    width="155"
                                    src="/assets/evaluation/q1-female.png"
                                    @click="evaluation.q1 = 'female'"
                                  ></v-img>
                              </v-hover>
                              <div width="155" style="text-align: center">Female</div>
                            </v-flex>
                            
                          </v-layout>
                          <br>
                            <h3 style="text-align: center;">I am a:</h3>
                          <br> <br>
                       <br>
                       <v-layout row justify-center>
                           <!--h4 style="text-align: center;">How will you rate your overall experience in the #ASTIGCountryside?</h4><br-->
                            <v-flex xs4 v-for="value of ['Below 10', '10-15', '16-20', '21-30', '31-40', '41-50', '51-60', 'Above 60']" :key="values" @click="appendToQ2(value)">
                                <v-card color="blue-grey darken-2" class="white--text" hover> 
                                  <v-card-title primary-title>
                                    <div>
                                      <div class="headline">{{value}}</div>
                                    </div>
                                  </v-card-title>
                                  </v-card>
                            </v-flex>
                        </v-layout>
                       <h3 style="text-align: center;">Which age group do you belong?</h3>
                       
                       
                       <v-layout row justify-center>
                                    <v-flex xs4 @click="evaluation.q3 = 'Academe'">
                                        <v-card color="blue-grey darken-2" class="white--text" hover> 
                                          <v-card-title primary-title>
                                            <div>
                                              <div class="headline">Academe</div>
                                            </div>
                                          </v-card-title>
                                          </v-card>
                                    </v-flex>
                                    <v-flex xs4 @click="evaluation.q3 = 'Government Agency'">
                                        <v-card color="blue-grey darken-2" class="white--text" hover> 
                                          <v-card-title primary-title>
                                            <div>
                                              <div class="headline">Government Agency</div>
                                            </div>
                                          </v-card-title>
                                          </v-card>
                                    </v-flex>

                                    <v-flex xs4 @click="evaluation.q3 = 'Industry/ MSME/Business Entity'">
                                        <v-card color="blue-grey darken-2" class="white--text" hover> 
                                          <v-card-title primary-title>
                                            <div>
                                              <div class="headline">Industry/ MSME/Business Entity</div>
                                            </div>
                                          </v-card-title>
                                          </v-card>
                                    </v-flex>

                                    <v-flex xs4 @click="evaluation.q3 = 'Peoples Organization'">
                                        <v-card color="blue-grey darken-2" class="white--text" hover> 
                                          <v-card-title primary-title>
                                            <div>
                                              <div class="headline">People's Organization</div>
                                            </div>
                                          </v-card-title>
                                          </v-card>
                                    </v-flex>
                                    <v-flex xs4 @click="evaluation.q3 = 'Private Individual'">
                                        <v-card color="blue-grey darken-2" class="white--text" hover> 
                                          <v-card-title primary-title>
                                            <div>
                                              <div class="headline">Private Individual</div>
                                            </div>
                                          </v-card-title>
                                          </v-card>
                                    </v-flex>
                           </v-layout>
                       <br>
                       <h3 style="text-align: center;">Type of Organization:</h3>
                    </v-form>
                    {{evaluation}}
                </v-card>
                
                <v-btn
                  color="primary"
                  @click="e1 = 2"
                >
                  NEXT
                </v-btn>

              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                  class="mb-5"
                  height="400px"
                >
                <v-layout row justify-center>
                           <h4 style="text-align: center;">Is this your first time to attend the event (NSTW)?</h4><br>
                            <v-flex xs4 @click="evaluation.q4 = 'Yes'">
                                <v-card color="blue-grey darken-2" class="white--text" hover> 
                                  <v-card-title primary-title>
                                    <div>
                                      <div class="headline">Yes</div>
                                    </div>
                                  </v-card-title>
                                  </v-card>
                            </v-flex>
                            <v-flex xs4 @click="evaluation.q4 = 'No'">
                                <v-card color="blue-grey darken-2" class="white--text" hover> 
                                  <v-card-title primary-title>
                                    <div>
                                      <div class="headline">No</div>
                                    </div>
                                  </v-card-title>
                                  </v-card>
                            </v-flex>
                </v-layout>
                <br>
                <v-layout row justify-center v-if="evaluation.q4 == 'No'">
                           <h4 style="text-align: center;">How was your experience of the last event (NSTW2018)?  (Multiple selections allowed)</h4><br>
                            <v-flex xs4 v-for="value of ['Not Satisfied', 'Somewhat Satisfied', 'Satisfied', 'Very Satisfied']" :key="values" @click="appendToQ5(value)">
                                <v-card color="blue-grey darken-2" class="white--text" hover> 
                                  <v-card-title primary-title>
                                    <div>
                                      <div class="headline">{{value}}</div>
                                    </div>
                                  </v-card-title>
                                  </v-card>
                            </v-flex>

                </v-layout>
                
                <br>
                <v-layout row justify-center v-if="evaluation.q4">
                           <h4 style="text-align: center;">How did you know about the NSTW2019? (Multiple selections allowed)?</h4><br>
                            <v-flex xs4 v-for="value of ['TV', 'Radio', 'Newspaper', 'Social Media (FB, twitter, IG)', 'Print Ads (flyers, streamers, poster)', 'Word of Mouth', 'Invitations']" :key="values" @click="appendToQ6(value)">
                                <v-card color="blue-grey darken-2" class="white--text" hover> 
                                  <v-card-title primary-title>
                                    <div>
                                      <div class="headline">{{value}}</div>
                                    </div>
                                  </v-card-title>
                                  </v-card>
                            </v-flex>

                </v-layout>
                <br>
                  {{evaluation}}
                </v-card>
                
                <v-btn
                  color="primary"
                  @click="e1 = 1"
                >
                  PREVIOUS
                </v-btn>
                
                <v-btn
                  color="primary"
                  @click="e1 = 3"
                >
                  NEXT
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  class="mb-5"
                  
                  height="400px"
                >
                <v-layout row justify-center>
                           <h4 style="text-align: center;">How did you know about the  #ASTIGCountryside?  (Multiple selections allowed)</h4><br>
                            <v-flex xs4 v-for="value of ['TV', 'Radio', 'Newspaper', 'Social Media (FB, twitter, IG)', 'Print Ads (flyers, streamers, poster)', 'Word of Mouth', 'Invitations']" :key="values" @click="appendToQ7(value)">
                                <v-card color="blue-grey darken-2" class="white--text" hover> 
                                  <v-card-title primary-title>
                                    <div>
                                      <div class="headline">{{value}}</div>
                                    </div>
                                  </v-card-title>
                                  </v-card>
                            </v-flex>

                </v-layout>
                <br>
                <v-layout row justify-center>
                           <h4 style="text-align: center;">How will you rate your overall experience in the #ASTIGCountryside?</h4><br>
                            <v-flex xs4 v-for="value of ['Not Satisfied', 'Somewhat Satisfied', 'Satisfied', 'Very Satisfied']" :key="values" @click="appendToQ8(value)">
                                <v-card color="blue-grey darken-2" class="white--text" hover> 
                                  <v-card-title primary-title>
                                    <div>
                                      <div class="headline">{{value}}</div>
                                    </div>
                                  </v-card-title>
                                  </v-card>
                            </v-flex>
                </v-layout>
                
                <br>
                <v-layout row justify-center>
                           <h4 style="text-align: center;">How likely will you recommend the #ASTIGCountryside to your family and friends?</h4><br>
                            <v-flex xs4 v-for="value of ['Thumbs Up', 'Thumbs Down']" :key="values" @click="appendToQ9(value)">
                                <v-card color="blue-grey darken-2" class="white--text" hover> 
                                  <v-card-title primary-title>
                                    <div>
                                      <div class="headline">{{value}}</div>
                                    </div>
                                  </v-card-title>
                                  </v-card>
                            </v-flex>

                </v-layout>
                
                {{evaluation}}    
                </v-card>
                <v-btn
                  color="primary"
                  @click="e1 = 2"
                >
                  PREVIOUS
                </v-btn>
                
                <v-btn
                  color="primary"
                  @click="e1 = 4"
                >
                  NEXT
                </v-btn>

              </v-stepper-content>
              
              <v-stepper-content step="4">
                <v-card
                  class="mb-5"

                  height="400px"
                >
                    <v-layout row justify-center>
                           <h4 style="text-align: center;">Your insights about the #ASTIGCountryside..?  (Multiple selections allowed)</h4><br>
                            <v-flex xs4 v-for="value of ['I am inspired to avail more DOST programs and services',
                                'I will highly recommend DOST programs and services to my family and friends', 
                                'My knowledge of DOST programs and services has widened', 
                                'I already have learned about DOST programs and services elsewhere', 
                                'I have only been aware of most of DOST programs and services today']" :key="values" @click="appendToQ10(value)">
                                <v-card color="blue-grey darken-2" class="white--text" hover> 
                                  <v-card-title primary-title>
                                    <div>
                                      <div class="headline">{{value}}</div>
                                    </div>
                                  </v-card-title>
                                  </v-card>
                            </v-flex>

                    </v-layout>
                    
                    <v-layout row justify-center>
                           <h4 style="text-align: center;">What would you like to suggest to improve our services?</h4><br>
                            <v-flex xs6>
                            <v-textarea v-model="evaluation.q11"
                              name="input-7-1"
                              label="Default style"
                              hint="What would you like to suggest to improve our services?"
                            ></v-textarea>
                          </v-flex>

                    </v-layout>
                    {{evaluation}}
                </v-card>

                <v-btn
                  color="primary"
                  @click="e1 = 3"
                >
                  PREVIOUS
                </v-btn>
                
                <v-btn
                  color="primary"
                  @click="submitForm(evaluation)"
                >
                  SUBMIT
                </v-btn>

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
              q1: '',
              q2: '',
              q3: '',
              q4: '',
              q5: '',
              q6: [],
              q7: [],
              q8: '',
              q9: '',
              q10: [],
              q11: ''
        },
      }
    },
      methods: {
          submitForm (evaluation) {
              //this.$http.post('/evaluation/create', this.evaluation).then(() => alert('test msg'))
              //alert(evaluation)
          },
          appendToQ2 (value) {
              this.evaluation.q2 = value
          },
          appendToQ5 (value) {
              this.evaluation.q5 = value
          },
          appendToQ6 (value) {
              
              var index = this.evaluation.q6.indexOf(value)
              if(index < 0){
                 this.evaluation.q6.push(value); 
              }else{
                  this.evaluation.q6.splice(index, 1);
              }  
          },
          appendToQ7 (value) {
              
              var index = this.evaluation.q7.indexOf(value)
              if(index < 0){
                 this.evaluation.q7.push(value); 
              }else{
                  this.evaluation.q7.splice(index, 1);
              }  
          },
          appendToQ8 (value) {
              this.evaluation.q8 = value
          },
          appendToQ9 (value) {
              this.evaluation.q9 = value
          },
          appendToQ10 (value) {
              
              var index = this.evaluation.q10.indexOf(value)
              if(index < 0){
                 this.evaluation.q10.push(value); 
              }else{
                  this.evaluation.q10.splice(index, 1);
              }  
          },
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
    
.gender-selecttion {
  width: 200px;
  height: 200px;
  display: block;
  border-right: 100px;
  float: left;
  text-align: center;
}

    .headline {
        text-align: center;
    }
</style>