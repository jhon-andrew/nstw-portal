<template>
  <!-- <div class="exhibit-contents pa-4">
    <v-btn large block dark v-for="(kiosk, index) in kiosks" :key="index" class="mb-3" color="indigo lighten-1" :to="`kiosk/${kiosk.name.toLowerCase().split(' ').join('-')}`">
      {{kiosk.name}}
    </v-btn>
  </div> -->
  <v-card>
    <v-card-title primary-title>
      <div class="display-1">Exhibits</div>
    </v-card-title>
    <v-card-text>
      <p>
        Know where to go. Know the activities.<br />
        Know what to see at the NSTW Regional Exhibits Area.
      </p>
      <v-btn large block dark v-for="(kiosk, index) in kiosks" :key="index" class="mt-3" color="indigo lighten-1" :to="`kiosk/${kiosk.name.toLowerCase().split(' ').join('-')}`">
        {{kiosk.name}}
      </v-btn>
    </v-card-text>
  </v-card>
</template>
<script>
import { exhibits } from '../../../contents.json'
export default {
  data () {
    return {
      kiosks: exhibits.kiosks
    }
  }
}
</script>
<style scoped>
.display-1 {
  font-family: 'Poppins', sans-serif !important;
}
</style>

