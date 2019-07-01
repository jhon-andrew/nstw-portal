<template>
  <div class="exhibit-contents pa-4">
    <v-btn large block dark v-for="(kiosk, index) in kiosks" :key="index" class="mb-3" color="indigo lighten-1" :to="`kiosk/${kiosk.name.toLowerCase().split(' ').join('-')}`">
      {{kiosk.name}}
    </v-btn>
  </div>
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
