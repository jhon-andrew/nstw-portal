<template>
  <v-dialog persistent v-model="dialog" max-width="500">
    <!-- <v-btn small fab icon color="primary elevation-1" style="float: right; margin-left: -64px;z-index: 1" @click="$router.go(-1)">
      <v-icon>close</v-icon>
    </v-btn>
    <evaluation-form /> -->
    <v-card>
      <v-card-title primary-title class="blue lighten-1">
        <div class="white--text">
          <p class="title mb-0">Answer the Evaluation</p>
          <p class="caption mb-0">and win special prizes!</p>
        </div>
        <v-spacer />
        <v-btn icon class="ma-0 white--text" @click="$router.go(-1)">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <p><strong>Instructions:</strong></p>
        <ol class="mb-3">
          <li>Using your phone, scan the QR code below.</li>
          <li>You will then be redirected to our survey form.</li>
          <li>Fill up the form and have an entry to win some of our special prizes.</li>
        </ol>
        <p class="text-xs-center"><img v-ripple @click="$router.push({ path: '/evaluation/form/' })" :src="`/api/qrcode/generate.png?data=${surveyLink}`" style="width: 300px; height: 300px;"></p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import EvaluationForm from '../Evaluation/Form'
export default {
  components: { EvaluationForm },
  data () {
    return {
      dialog: false,
      surveyLink: `${location.protocol}//${location.host}/evaluation/`
    }
  },
  mounted () {
    this.dialog = true
  }
}
</script>
