<template>
  <v-dialog persistent v-model="dialog" max-width="30%">
    <v-card>
      <v-card-title primary-title class="blue lighten-1">
        <div class="white--text">
          <p class="title mb-0">Answer the Survey</p>
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
        <p class="text-xs-center"><img src="/api/qrcode/generate.php?data=http://astigcountryside-nstw2019.dost9.ph/" style="width: 300px; height: 300px;"></p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  mounted () {
    this.dialog = true
  }
}
</script>
