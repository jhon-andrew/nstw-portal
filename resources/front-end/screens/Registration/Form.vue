<template>
  <v-content>
    <v-toolbar dark fixed color="primary" class="hidden-lg-and-up">
      <v-toolbar-title>Registration</v-toolbar-title>
    </v-toolbar>
    <section class="primary pa-4 hidden-lg-and-up" style="margin-top: 56px;">
      <v-img src="/assets/dost-seal.png" contain height="48" />
      <!-- <v-img src="https://drive.google.com/uc?id=11EvmezlErcmdMUhrLmSk6HKzrLtkhC0E" contain height="48" /> -->
      <v-img src="/assets/ro-exhibit-branding.png" class="my-3" contain />
      <!-- <v-img src="https://drive.google.com/uc?id=1ju5nmAXAf6Fk-ahx-t_4H49lBaieyphS" class="my-3" contain /> -->
      <v-img src="/assets/nstw.png" contain height="48" />
      <!-- <v-img src="https://drive.google.com/uc?id=1MHlfZJiNYYXK0gTZRMrJO6XxCqhN0S9C" contain height="48" /> -->
      <h3 class="headline yellow--text text-xs-center mt-3">NSTW 2019</h3>
    </section>
    <section class="primary hidden-md-and-down">
      <v-container>
        <v-layout row wrap align-center class="white--text my-4">
          <v-flex xs1>
            <v-img src="/assets/dost-seal.png" contain width="80" />
            <!-- <v-img src="https://drive.google.com/uc?id=11EvmezlErcmdMUhrLmSk6HKzrLtkhC0E" contain width="80" /> -->
          </v-flex>
          <v-flex xs11 class="main-header">
            <div class="mb-1 pb-1 mr-5" style="border-bottom: 1px solid #ffffff;">Department of Science and Technology IX</div>
            <div class="subheading yellow--text">2019 Regional Science and Technology Week</div>
            <div class="slogan body-2">"Enabling Technologies for Sustainable Development in Zamboanga Peninsula"</div>
          </v-flex>
          <v-flex xs4 v-if="false">
            <v-layout row wrap align-center>
              <v-flex xs3>
                <v-img src="/assets/nstw.png" contain width="94" />
                <!-- <v-img src="https://drive.google.com/uc?id=1MHlfZJiNYYXK0gTZRMrJO6XxCqhN0S9C" contain width="94" /> -->
              </v-flex>
              <v-flex xs9 class="promotion">
                <!-- <h2 class="white--text">Regional Offices'</h2>
                <h1 class="yellow--text display-3">Exhibit <small>area</small></h1>
                <h3 class="white--text caption">#ASTIGCountryside</h3> -->
                <v-img src="/assets/ro-exhibit-branding.png" contain />
                <!-- <v-img src="https://drive.google.com/uc?id=1ju5nmAXAf6Fk-ahx-t_4H49lBaieyphS" contain /> -->
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <v-container grid-list-lg>
      <v-alert dismissible v-model="error.show" type="error">{{ error.message }}</v-alert>
      <v-layout row wrap>
        <v-flex lg2>
          <v-card color="primary lighten-1">
            <v-card-text class="caption">
              <p>Instructions:</p>
              <ul>
                <li>Fill out the needed information.</li>
                <li>Get and save the code afterwards.</li>
                <li>Registration confirmation will be sent to the email you provided.</li>
                <li>Present the code to the Regional Exhibit Concierge during NSTW for easier registration (you can get freebies).</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex lg10>
          <h1 class="headline text-xs-left mb-5 hidden-md-and-down">Registration Form</h1>
          <v-form ref="registrationForm">
            <v-layout row wrap>
              <v-flex xs12 lg5>
                <v-text-field box v-model="participant.first_name" label="FIRST NAME" :rules="[$rules.required]" :disabled="loading" required />
              </v-flex>
              <v-flex xs12 lg2>
                <v-text-field box v-model="participant.middle_initial" label="MIDDLE INITIAL" :disabled="loading" />
              </v-flex>
              <v-flex xs12 lg5>
                <v-text-field box v-model="participant.surname" label="SURNAME" :rules="[$rules.required]" :disabled="loading" required />
              </v-flex>
              <!-- <v-flex xs12 lg1>
                <v-text-field box type="number" v-model="participant.age" label="AGE" :rules="[$rules.required]" :disabled="loading" required />
              </v-flex>
              <v-flex xs12 lg2>
                <v-menu
                  v-model="menu.birthdate"
                  ref="birthdateMenu"
                  :close-on-content-click="false"
                  :return-value.sync="participant.birthdate"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field box v-model="participant.birthdate" label="BIRTHDATE" v-on="on" :rules="[$rules.required]" :disabled="loading" required readonly />
                  </template>
                  <v-date-picker
                    v-model="participant.birthdate"
                    ref="birthdate"
                  >
                    <v-spacer></v-spacer>
                    <v-btn flat @click="menu.birthdate = false">Cancel</v-btn>
                    <v-btn flat @click="$refs.birthdateMenu.save(participant.birthdate)" color="primary">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex> -->
              <v-flex xs12 lg3>
                <v-select box v-model="participant.age_group" label="AGE GROUP" :items="['Below 10', '10 - 15', '16 - 20', '21 - 30', '31 - 40', '41 - 50', '51 - 60', 'Above 60']"></v-select>
              </v-flex>
              <v-flex xs12 lg3>
                <span class="grey--text">SEX</span>
                <v-radio-group row v-model="participant.sex" class="mt-0" :rules="[$rules.required]" :disabled="loading" required>
                  <v-radio label="Male" value="male" color="primary" />
                  <v-radio label="Female" value="female" color="primary" />
                </v-radio-group>
              </v-flex>
              <v-flex xs12 lg6>
                <v-text-field box v-model="participant.address" label="ADDRESS" :rules="[$rules.required]" :disabled="loading" required />
              </v-flex>
              <v-flex xs12 lg5>
                <v-text-field box v-model="participant.affiliation" label="ORGANIZATION/SCHOOL" :rules="[$rules.required]" :disabled="loading" required />
              </v-flex>
              <v-flex xs12 lg7>
                <span class="grey--text">TYPE OF ORGANIZATION</span>
                <v-radio-group row v-model="participant.affiliation_type" class="mt-0 caption" :rules="[$rules.required]" :disabled="loading" required>
                  <v-radio color="primary" label="Government" value="government" />
                  <v-radio color="primary" label="Private" value="private" />
                  <v-radio color="primary" label="Non-government" value="non-government" />
                  <v-menu
                    ref="otherAffiliationType"
                    v-model="menu.otherAffiliationType"
                    :close-on-content-click="false"
                    :return-value.sync="participant.otherAffiliationType"
                  >
                    <template v-slot:activator="{ on }">
                      <v-radio color="primary" :label="participant.otherAffiliationType || 'Others'" :value="participant.otherAffiliationType || 'others'" v-on="on" />
                    </template>
                    <v-card>
                      <v-card-text class="pb-0">
                        <v-text-field box v-model="participant.otherAffiliationType" label="Please specify" />
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer />
                        <v-btn flat @click="menu.otherAffiliationType = false">Cancel</v-btn>
                        <v-btn
                          flat
                          @click="() => {
                            participant.affiliation_type = participant.otherAffiliationType
                            $refs.otherAffiliationType.save(participant.otherAffiliationType)
                          }"
                        >
                          OK
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-menu>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 lg5>
                <v-text-field box v-model="participant.email" label="EMAIL" :rules="[$rules.required, $rules.email]" :disabled="loading" hint="We will be sending a confirmation email to this address." required />
              </v-flex>
              <v-flex xs12 lg5>
                <v-text-field box v-model="participant.contact_number" label="CONTACT NUMBER" :rules="[$rules.required]" :disabled="loading" required />
              </v-flex>
              <v-flex xs12 lg2>
                <v-btn block large color="primary" @click="register" :disabled="loading" :loading="loading">Get Code</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog v-if="success.response" v-model="success.show" width="500" persistent>
      <v-card>
        <v-card-title primary-title class="title">
          <!-- Done -->
          Thank you!
        </v-card-title>
        <v-divider />
        <v-card-text>
          <!-- <p>You may scan this QR code</p>
          <v-img :src="`/api/qrcode/${success.response.activationCode}.png`" height="300" contain />
          <p>or keep the activation code below</p>
          <p><code style="font-size: 24px;">{{ success.response.activationCode }}</code></p>
          <p>and verify it on the Concierge during the event.</p> -->
          <!-- <p>We've sent an activation code to your email. Please follow the instructions from there on how to verify your registration.</p> -->
          <p>See you at the event.</p>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn flat color="primary" @click="() => {
            success.show = false
            participant = {}
            $refs.registrationForm.reset()
          }">Done</v-btn>
          <!-- <v-btn color="primary" to="/evaluation/">Go to Evaluation</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
export default {
  name: 'registration-form',
  watch: {
    'menu.birthdate'(val) {
      val && setTimeout(() => (this.$refs.birthdate.activePicker = 'YEAR'))
    }
  },
  data () {
    return {
      loading: false,
      menu: {},
      participant: {
        birthdate: null
      },
      error: {},
      success: {}
    }
  },
  methods: {
    async register () {
      this.error = { show: false }

      if (this.$refs.registrationForm.validate()) {
        this.loading = true
        const { data: response } = await this.$request.post('/api/registration', this.participant)

        if (response.errors) {
          this.loading = false
          return this.error = {
            show: true,
            message: response.errors.find(error => error.field === 'email').message
          }
        }

        this.success = {
          show: true,
          response
        }

        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
h1, h2, h3, .title, .headline {
  font-family: 'Poppins', sans-serif !important;
}

.headline {
  font-style: normal;
}

.main-header {
  text-transform: uppercase;
  font-weight: bold;
}

.main-header > .slogan {
  font-style: italic;
}

.v-dialog .v-card__text {
  text-align: center;
  max-height: 400px;
  overflow-y: scroll;
}
</style>
