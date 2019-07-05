<template>
  <v-dialog persistent v-model="modal" max-width="40%">
    <v-card :class="['white--text', $route.params.type === 'pre-registered' ? 'teal' : 'indigo darken-1']" style="height: 300px;">
      <v-layout fill-height>
        <v-flex xs4 d-flex :class="[$route.params.type === 'pre-registered' ? 'teal darken-1' : 'indigo darken-2']">
          <v-card-text class="my-auto">
            <!-- <h1 class="display-4 text-xs-center my-2">{{$route.query.count}}</h1> -->
            <v-img :src="`/api/qrcode/generate.png?data=${registrationLink}`" class="elevation-2" />
          </v-card-text>
        </v-flex>
        <v-flex xs8 d-flex>
          <v-card-text class="my-auto title">
            <!-- Total number of participants that {{$route.params.type}}. -->
            <p>Instructions</p>
            <ol>
              <li>Connect to the Concierge WiFi.</li>
              <li>Scan the QR code.</li>
              <li>Fill up the form and register.</li>
            </ol>
          </v-card-text>
          <div class="close-btn">
            <v-btn icon dark @click="modal = false; $router.go(-1);">
              <v-icon>close</v-icon>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-dialog>
</template>
<script>
import dayjs from 'dayjs'
const { protocol, host } = location
export default {
  data () {
    return {
      modal: false,
      today: dayjs().format('h:mm A [today]'),
      registrationLink: `${protocol}//${host}/registration/`
    }
  },
  mounted () {
    this.modal = true
  }
}
</script>
<style scoped>
.title, .display-4 {
  font-family: 'Poppins', sans-serif !important;
}
.close-btn {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
