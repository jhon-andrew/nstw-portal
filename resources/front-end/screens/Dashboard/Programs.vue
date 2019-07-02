<template>
  <v-dialog persistent scrollable v-model="modal" max-width="70%">
    <v-card>
      <v-card-title primary-title class="red darken-2">
        <span class="title white--text">Program of Activities</span>
        <v-spacer />
        <v-btn icon class="ma-0 white--text" @click="$router.go(-1)">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text style="height: 80vh;">
        <v-layout>
          <v-flex xs4 offset-xs8>
            <v-select v-model="sort" :items="venues" label="Filter by venue" box></v-select>
          </v-flex>
        </v-layout>
        <v-divider class="mt-2"></v-divider>
        <v-data-table
          :headers="headers"
          :items="!sort ? programs : programs.filter(program => program.venue === sort)"
          hide-actions
        >
          <template v-slot:items="{ item: program }">
            <td>{{program.date}}</td>
            <td>{{program.time}}</td>
            <td>{{program.activity}}</td>
            <td>{{program.venue}}</td>
            <td>{{program.lead_agency}}</td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import { programs } from './contents.json'

export default {
  data () {
    return {
      modal: false,
      programs,
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Time', value: 'time' },
        { text: 'Activity', value: 'activity' },
        { text: 'Venue', value: 'venue' },
        { text: 'Lead Agency', value: 'lead_agency' }
      ],
      venues: [{ text: 'All venues', value: null }],
      sort: null
    }
  },
  created () {
    this.programs.forEach(program => {
      program.venue = program.venue || 'To-be-decided'
      if (this.venues.indexOf(program.venue) < 0) {
        this.venues.push(program.venue)
      }
    })
  },
  mounted () {
    this.modal = true
  }
}
</script>
<style scoped>
.title {
  font-family: 'Poppins', sans-serif !important;
}
</style>
