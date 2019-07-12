<template>
  <v-content>
    <v-container fill-height>
      <v-layout column>
        <v-flex shrink>
          <h2 :class="[$vuetify.breakpoint.mdAndDown ? 'display-1' : 'display-3']">Winners</h2>
        </v-flex>
        <v-flex d-flex>
          <v-card>
            <v-card-title style="max-width: 350px;">
              <v-text-field label="Search" append-icon="search" v-model="search" />
            </v-card-title>
            <v-data-table :headers="headers" :items="search ? winners.filter(winner => winner.full_name.startsWith(search)) : winners" hide-actions>
              <template v-slot:items="{ item }">
                <td>{{item.full_name}}</td>
                <td>{{item.prize}}</td>
                <td>{{item.quantity}}</td>
                <td>
                  <v-btn flat outline :loading="item.loading" :disabled="item.claimed" @click="claim(item.id)">
                    {{item.claimed ? 'Claimed' : 'Claim'}}
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
        { text: 'Prize', value: 'prize' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Status', value: 'claimed' }
      ],
      winners: [],
      winnerSocket: this.$socket.subscribe('stats:winner')
    }
  },
  beforeDestroy: () => this.winnerSocket.close(),
  async created () {
    const { data: winners } = await this.$request.get('/api/evaluation/winners')
    this.winners = winners.map(winner => {
      winner.claimed = !!winner.claimed
      winner.updating = false
      return winner
    })
    this.winnerSocket.on('ready', () => console.log('Ready to accept new winners.'))
    this.winnerSocket.on('updateStats', ({ type, winner }) => {
      winner.claimed = !!winner.claimed
      winner.updating = false
      this.winners.push(winner)
    })
  },
  methods: {
    async claim (id) {
      let index = this.winners.findIndex(winner => winner.id === id)
      this.winners[index].loading = true
      const { data: response } = await this.$request.post('/api/evaluation/claim', { id })
      if (!response.error) {
        this.winners[index].claimed = true
        this.winners[index].loading = false
      }
    }
  }
}
</script>
<style scoped>
.v-content {
  background-image: linear-gradient(145deg, #e1eec3, #f05053);
  /* background-image: linear-gradient(145deg, #b2fefa, #0ed2f7); */
}
</style>
