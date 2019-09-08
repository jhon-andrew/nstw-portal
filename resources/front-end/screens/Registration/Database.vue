<template>
  <v-content>
    <v-container fill-height>
      <v-layout column>
        <v-flex shrink>
          <h2 :class="[$vuetify.breakpoint.mdAndDown ? 'display-1' : 'display-3']">Registration</h2>
        </v-flex>
        <v-flex d-flex>
          <v-card>
            <v-card-title style="max-width: 350px;">
              <v-text-field label="Search" append-icon="search" v-model="search" hint="Type a name or an affiliation" />
            </v-card-title>
            <v-data-table :headers="headers" :items="search ? participants.filter(participant => participant.full_name.toLowerCase().startsWith(search.toLowerCase()) || participant.affiliation.toLowerCase().startsWith(search.toLowerCase())) : participants" hide-actions>
              <template v-slot:items="{ item }">
                <td>{{item.full_name}}</td>
                <td>{{item.affiliation}}</td>
                <td>{{item.affiliation_type}}</td>
                <td>
                  <v-btn fab small flat @click="attendance(item)">
                    <v-icon>{{item.attendance ? 'check_circle' : 'check_circle_outline'}}</v-icon>
                  </v-btn>
                </td>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data () {
    return {
      search: null,
      headers: [
        { text: 'Name', value: 'full_name' },
        { text: 'Affiliation', value: 'affilation' },
        { text: 'Affiliation Type', value: 'affiliation_type' },
        { text: 'Attendance', value: 'attendance' }
      ],
      participants: []
    }
  },
  methods: {
    async attendance (participant) {
      const { data } = await this.$request.post('/api/registration/attendance', participant)
      const index = this.participants.findIndex(p => p === participant)
      this.participants[index].attendance = true
      console.log(index)
    }
  },
  async created () {
    const { data: participants } = await this.$request.get('/api/registration/participants')
    this.participants = participants.map(participant => {
      participant.full_name = `${participant.first_name} ${participant.surname}`
      participant.attendance = false
      return participant
    })

    const { data: attendance } = await this.$request.get('/api/registration/attendance-list')
    attendance.forEach(p => {
      const index = this.participants.findIndex(participant => participant.full_name === p.full_name)
      this.participants[index].attendance = true
    })
  }
}
</script>
<style scoped>
.v-content {
  background-image: linear-gradient(145deg, #e1eec3, #f05053);
  /* background-image: linear-gradient(145deg, #b2fefa, #0ed2f7); */
}
</style>
