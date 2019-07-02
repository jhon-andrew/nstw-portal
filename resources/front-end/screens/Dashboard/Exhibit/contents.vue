<template>
  <v-layout column>
    <v-card class="mb-4">
      <v-card-title primary-title>
        <h6 class="title">{{kiosk.name}}</h6>
      </v-card-title>
      <v-card-text v-html="kiosk.description"></v-card-text>
    </v-card>

    <v-card>
      <v-card-title primary-title>
        <h6 class="title">Downloads</h6>
      </v-card-title>
      <v-list>
        <v-list-tile v-for="n in 15" :key="n" @click="download(n)" v-ripple>
          <v-list-tile-content>
            <v-list-tile-title>File #{{n}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>

    <v-dialog v-model="modal" max-width="35%">
      <v-card>
        <v-card-title primary-title class="indigo lighten-1">
          <h6 class="title white--text">Downloading file #{{downloadFile.fileId}}</h6>
          <v-spacer />
          <v-btn icon @click="modal = false" class="white--text">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <p>Scan the QR code to download the file.</p>
          <p class="text-xs-center">
            <img v-if="downloadFile.fileId" :src="`/api/qrcode/generate.php?data=http://astigcountryside-nstw2019.dost9.ph/download/?fileId=${downloadFile.fileId}`" style="width: 300px; height: 300px;" />
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { exhibits } from '@/contents.json'

export default {
  data: () => ({
    kiosk: {},
    downloadFile: {},
    modal: false
  }),
  created () {
    this.kiosk = exhibits.kiosks.find(kiosk => kiosk.name.toLowerCase().split(' ').join('-') === this.$route.params.id)
  },
  methods: {
    download (fileId) {
      this.downloadFile = { fileId }
      this.modal = true
    }
  }
}
</script>
<style scoped>
.title {
  font-family: 'Poppins', sans-serif !important;
}
</style>
