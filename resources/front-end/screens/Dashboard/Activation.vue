<template>
  <v-dialog persistent v-model="dialog" :max-width="width || '640px'">
    <v-card>
      <v-card-title primary-title class="light-green darken-1 white--text">
        <div>
          <h6 class="title mb-0">Confirm Registration</h6>
          <p class="caption mb-0">Please show the QR code in the confirmation email you received.</p>
        </div>
        <v-spacer />
        <v-btn icon to="/dashboard/" active-class="white--text">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <canvas ref="camera"></canvas>
      <!-- <v-card-text class="text-xs-center">
        <p class="subheading mb-0">{{activation_code || 'Detecting...'}}</p>
        <p class="caption mb-0" v-if="activation_code">Activating... Please wait.</p>
      </v-card-text> -->
      <v-divider></v-divider>
      <v-card-actions>
        <v-text-field box hide-details color="light-green" v-model="activation_code" label="Activation Code" class="mr-2" :disabled="activating"></v-text-field>
        <v-btn color="light-green white--text" @click="activate" :disabled="activating" :loading="activating">Activate Manually</v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="toast" top left color="light-green darken-1">{{response}}</v-snackbar>
  </v-dialog>
</template>
<script>
import jsqr from 'jsqr'

export default {
  data () {
    return {
      width: null,
      stream: null,
      dialog: false,
      activation_code: null,
      activating: false,
      toast: false,
      response: null
    }
  },
  mounted () {
    const video = document.createElement('video')
    const canvasElem = this.$refs.camera
    const canvas = canvasElem.getContext('2d')
    
    let previouslyScanned = null

    this.dialog = true

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(stream => {
      this.stream = stream
      video.srcObject = stream
      video.playsinline = true
      video.play()
      requestAnimationFrame(refresh)
    }).catch(err => alert(err))

    const refresh = () => {
      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        canvasElem.width = video.videoWidth
        canvasElem.height = video.videoHeight
        canvas.drawImage(video, 0, 0, canvasElem.width, canvasElem.height)

        if (!this.width) this.width = video.videoWidth + 'px'

        const image = canvas.getImageData(0, 0, canvasElem.width, canvasElem.height)
        const code = jsqr(image.data, image.width, image.height, {
          inversionAttempts: 'dontInvert'
        })

        if (code) {
          const { topLeftCorner, topRightCorner, bottomRightCorner, bottomLeftCorner } = code.location

          drawLine(topLeftCorner, topRightCorner)
          drawLine(topRightCorner, bottomRightCorner)
          drawLine(bottomRightCorner, bottomLeftCorner)
          drawLine(bottomLeftCorner, topLeftCorner)

          if (code.data !== previouslyScanned) {
            this.activation_code = code.data
            previouslyScanned = code.data
            this.activate()
          }
        }
      }

      requestAnimationFrame(refresh)
    }

    const drawLine = (begin, end, color) => {
      canvas.beginPath()
      canvas.moveTo(begin.x, begin.y)
      canvas.lineTo(end.x, end.y)
      canvas.lineWidth = 4
      canvas.strokeStyle = '#FF3B58'
      canvas.stroke()
    }
  },
  beforeDestroy () {
    // Stop camera access
    this.stream.getTracks().forEach(track => track.stop())
  },
  methods: {
    stopCamera () {
      this.$refs.camera.pause()
    },
    async activate () {
      this.activating = true
      let { data } = await this.$request.post('/api/confirm-registration', { activation_code: this.activation_code })
      this.toast = true
      this.response = data.response
      this.activation_code = null
      this.activating = false
    }
  }
}
</script>
<style scoped>
.title {
  font-family: 'Poppins', sans-serif !important;
}

canvas {
  margin-bottom: -6px;
}
</style>
