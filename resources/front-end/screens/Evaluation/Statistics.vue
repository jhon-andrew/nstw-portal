<template>
  <v-content>
    <v-container wrap fill-height>
      <v-layout column>
        <v-flex shrink>
          <h2 :class="[$vuetify.breakpoint.mdAndDown ? 'display-1' : 'display-3']" class="white--text">Evaluation Statistics</h2>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-tabs v-model="tab" slider-color="red">
              <v-tab>Evaluators</v-tab>
              <v-tab>NSTW</v-tab>
              <v-tab>#ASTIGCountryside</v-tab>
              <v-tab>Insights</v-tab>

              <v-tabs-items>
                <!-- Evaluators -->
                <v-tab-item>
                  <v-card-text>
                    <v-layout wrap align-center class="mx-auto">
                      <!-- Sex -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">Sex</span>
                      </v-flex>
                      <v-flex xs12 lg3 class="text-lg-right pr-2">
                        <span>Male ({{stats.sex.male}})</span>
                      </v-flex>
                      <v-flex xs12 lg9>
                        <v-progress-linear class="elevation-3" :value="stats.sex.male * 100 / (stats.sex.male + stats.sex.female)" color="red"></v-progress-linear>
                      </v-flex>
                      <v-flex xs12 lg3 class="text-lg-right pr-2">
                        <span>Female ({{stats.sex.female}})</span>
                      </v-flex>
                      <v-flex xs12 lg9>
                        <v-progress-linear class="elevation-3" :value="stats.sex.female * 100 / (stats.sex.male + stats.sex.female)" color="red"></v-progress-linear>
                      </v-flex>

                      <!-- Age Group -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">Age Group</span>
                      </v-flex>
                      <template v-for="(age_group, index) in evalConst.age_group">
                        <v-flex xs12 lg3 class="text-lg-right pr-2" :key="'ag-label' + index">
                          <span>{{age_group}} ({{stats.age_group[age_group]}})</span>
                        </v-flex>
                        <v-flex xs12 lg9 :key="'ag-stat' + index">
                          <v-progress-linear class="elevation-3" :value="stats.age_group[age_group] * 100 / $objectSum(stats.age_group)" color="red"></v-progress-linear>
                        </v-flex>
                      </template>

                      <!-- Organization -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">Organization</span>
                      </v-flex>
                      <template v-for="(organization, index) in evalConst.organization">
                        <v-flex xs12 lg3 class="text-lg-right pr-2" :key="'org-label' + index">
                          <span>{{organization}} ({{stats.organization[organization]}})</span>
                        </v-flex>
                        <v-flex xs12 lg9 :key="'org-stat' + index">
                          <v-progress-linear class="elevation-3" :value="stats.organization[organization] * 100 / $objectSum(stats.organization)" color="red"></v-progress-linear>
                        </v-flex>
                      </template>
                    </v-layout>
                  </v-card-text>
                </v-tab-item>

                <!-- NSTW -->
                <v-tab-item>
                  <v-card-text>
                    <v-layout wrap align-center class="mx-auto">
                      <!-- First time -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">First Time</span>
                      </v-flex>
                      <v-flex xs12 lg3 class="text-lg-right pr-2">
                        <span>Yes ({{stats.first_time.yes}})</span>
                      </v-flex>
                      <v-flex xs12 lg9>
                        <v-progress-linear class="elevation-3" :value="stats.first_time.yes * 100 / $objectSum(stats.first_time)" color="red"></v-progress-linear>
                      </v-flex>
                      <v-flex xs12 lg3 class="text-lg-right pr-2">
                        <span>No ({{stats.first_time.no}})</span>
                      </v-flex>
                      <v-flex xs12 lg9>
                        <v-progress-linear class="elevation-3" :value="stats.first_time.no * 100 / $objectSum(stats.first_time)" color="red"></v-progress-linear>
                      </v-flex>

                      <!-- Previous NSTW -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">Last experience of the NSTW</span>
                      </v-flex>
                      <template v-for="(prev_nstw, index) in evalConst.prev_nstw">
                        <v-flex xs12 lg3 class="text-lg-right pr-2" :key="'prevNstw-label' + index">
                          <span>{{prev_nstw}} ({{stats.prev_nstw[prev_nstw]}})</span>
                        </v-flex>
                        <v-flex xs12 lg9 :key="'prevNstw-stat' + index">
                          <v-progress-linear class="elevation-3" :value="stats.prev_nstw[prev_nstw] * 100 / $objectSum(stats.prev_nstw)" color="red"></v-progress-linear>
                        </v-flex>
                      </template>

                      <!-- NSTW Reference -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">How did they know about the NSTW 2019?</span>
                      </v-flex>
                      <template v-for="(nstw_ref, index) in evalConst.nstw_ref">
                        <v-flex xs12 lg3 class="text-lg-right pr-2" :key="'nstwRef-label' + index">
                          <span>{{nstw_ref}} ({{stats.nstw_ref[nstw_ref]}})</span>
                        </v-flex>
                        <v-flex xs12 lg9 :key="'nstwRef-stat' + index">
                          <v-progress-linear class="elevation-3" :value="stats.nstw_ref[nstw_ref] * 100 / $objectSum(stats.nstw_ref)" color="red"></v-progress-linear>
                        </v-flex>
                      </template>
                    </v-layout>
                  </v-card-text>
                </v-tab-item>

                <!-- #ASTIGCountryside -->
                <v-tab-item>
                  <v-card-text>
                    <v-layout wrap align-center class="mx-auto">
                      <!-- #ASTIGCountryside Reference -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">How did they know about the #ASTIGCountryside?</span>
                      </v-flex>
                      <template v-for="(astigc_ref, index) in evalConst.astigc_ref">
                        <v-flex xs12 lg3 class="text-lg-right pr-2" :key="'astigcRef-label' + index">
                          <span>{{astigc_ref}} ({{stats.astigc_ref[astigc_ref]}})</span>
                        </v-flex>
                        <v-flex xs12 lg9 :key="'astigcRef-stat' + index">
                          <v-progress-linear class="elevation-3" :value="stats.astigc_ref[astigc_ref] * 100 / $objectSum(stats.astigc_ref)" color="red"></v-progress-linear>
                        </v-flex>
                      </template>

                      <!-- Previous ASTIGCountryside -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">Overall experience in the #ASTIGCountryside</span>
                      </v-flex>
                      <template v-for="(prev_astigc, index) in evalConst.prev_astigc">
                        <v-flex xs12 lg3 class="text-lg-right pr-2" :key="'prevNstw-label' + index">
                          <span>{{prev_astigc}} ({{stats.prev_astigc[prev_astigc]}})</span>
                        </v-flex>
                        <v-flex xs12 lg9 :key="'prevNstw-stat' + index">
                          <v-progress-linear class="elevation-3" :value="stats.prev_astigc[prev_astigc] * 100 / $objectSum(stats.prev_astigc)" color="red"></v-progress-linear>
                        </v-flex>
                      </template>

                      <!-- Recommend #ASTIGCountryside -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">Would they recommend #ASTIGCountryside?</span>
                      </v-flex>
                      <v-flex xs12 lg3 class="text-lg-right pr-2">
                        <span>Yes ({{stats.recommend_astigc.yes}})</span>
                      </v-flex>
                      <v-flex xs12 lg9>
                        <v-progress-linear class="elevation-3" :value="stats.recommend_astigc.yes * 100 / $objectSum(stats.recommend_astigc)" color="red"></v-progress-linear>
                      </v-flex>
                      <v-flex xs12 lg3 class="text-lg-right pr-2">
                        <span>No ({{stats.recommend_astigc.no}})</span>
                      </v-flex>
                      <v-flex xs12 lg9>
                        <v-progress-linear class="elevation-3" :value="stats.recommend_astigc.no * 100 / $objectSum(stats.recommend_astigc)" color="red"></v-progress-linear>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-tab-item>

                <!-- #Insights -->
                <v-tab-item>
                  <v-card-text>
                    <v-layout wrap align-center class="mx-auto">
                      <!-- #Insights -->
                      <v-flex xs12 class="mb-2">
                        <span class="display-1">What are their insights about #ASTIGCountryside?</span>
                      </v-flex>
                      <template v-for="(astigc_insights, index) in evalConst.astigc_insights">
                        <v-flex xs12 :key="'astigcInsights-label' + index">
                          <span>{{astigc_insights}} ({{stats.astigc_insights[astigc_insights]}})</span>
                        </v-flex>
                        <v-flex xs12 :key="'astigcInsights-stat' + index">
                          <v-progress-linear class="elevation-3" :value="stats.astigc_insights[astigc_insights] * 100 / $objectSum(stats.astigc_insights)" color="red"></v-progress-linear>
                        </v-flex>
                      </template>
                    </v-layout>
                  </v-card-text>
                </v-tab-item>
                <!-- End -->
              </v-tabs-items>
            </v-tabs>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
import colors from 'vuetify/es5/util/colors'
import evalConst from './constants.json'
export default {
  data () {
    return {
      tab: 0,
      statsChannel: this.$socket.subscribe('stats:evaluation'),
      evaluation: [],
      evalConst,
      stats: {
        sex: {
          male: 0,
          female: 0
        },
        age_group: this.$arrToObj(evalConst.age_group),
        organization: this.$arrToObj(evalConst.organization),
        first_time: {
          yes: 0,
          no: 0
        },
        prev_nstw: this.$arrToObj(evalConst.prev_nstw),
        nstw_ref: this.$arrToObj(evalConst.nstw_ref),
        prev_astigc: this.$arrToObj(evalConst.prev_astigc),
        astigc_ref: this.$arrToObj(evalConst.astigc_ref),
        recommend_astigc: {
          yes: 0,
          no: 0
        },
        astigc_insights: this.$arrToObj(evalConst.astigc_insights)
      }
    }
  },
  beforeDestroy: () => this.statsChannel.close(),
  created () {
    this.statsChannel.on('ready', () => this.statsChannel.emit('getStats'))
    this.statsChannel.on('updateStats', ({ type, stats }) => {
      if (type === 'initial') {
        stats.forEach(stat => this.addStat(stat))
      } else this.addStat(stats)
    })
  },
  mounted () {
    let backgroundColors = ['#B71C1C','#F06292','#9C27B0','#9575CD','#303F9F','#2196F3','#B3E5FC','#00BCD4','#00796B','#4CAF50','#DCEDC8','#9E9D24','#FFEB3B','#FFECB3','#FF9800','#F4511E','#795548','#546E7A','#9E9E9E','#424242','#FAFAFA']
    let borderColors = ['#D32F2F','#E91E63','#7B1FA2','#673AB7','#1A237E','#1976D2','#4FC3F7','#0097A7','#004D40','#388E3C','#AED581','#827717','#FBC02D','#FFD54F','#F57C00','#D84315','#5D4037','#37474F','#616161','#000000','#E0E0E0']
  },
  methods: {
    addStat (stat) {
      const { sex, age_group, organization, first_time, prev_nstw, nstw_ref, prev_astigc, astigc_ref, recommend_astigc, astigc_insights } = stat
      this.evaluation.push(stat)

      // Sex
      if (sex) this.stats.sex[sex] += 1

      // Age Group
      if (age_group) this.stats.age_group[age_group] += 1

      // Organization
      if (organization) this.stats.organization[organization] += 1

      // First Time
      if (first_time !== null) this.stats.first_time[first_time ? 'yes' : 'no'] += 1

      // Previous NSTW
      if (prev_nstw) this.stats.prev_nstw[evalConst.prev_nstw[prev_nstw]] += 1

      // NSTW Reference
      if (nstw_ref) nstw_ref.split(',').forEach(ref => (this.stats.nstw_ref[evalConst.nstw_ref[ref]] += 1))

      // Previous #ASTIGCountryside
      if (prev_astigc) this.stats.prev_astigc[evalConst.prev_astigc[prev_astigc]] += 1

      // #ASTIGCountrside Reference
      if (astigc_ref) astigc_ref.split(',').forEach(ref => (this.stats.astigc_ref[evalConst.astigc_ref[ref]] += 1))

      // Recommend #ASTIGCountryside
      if (recommend_astigc !== null) this.stats.recommend_astigc[recommend_astigc ? 'yes' : 'no'] += 1

      // #ASTIGCountryside Insights
      if (astigc_insights) astigc_insights.split(',').forEach(ref => {
        if (evalConst.astigc_insights[ref]) {
          this.stats.astigc_insights[evalConst.astigc_insights[ref]] += 1
        }
      })
    }
  }
}
</script>
<style scoped>
.v-content {
  background-image: linear-gradient(145deg, #eb5757, #000000);
}

.display-1, .display-2, .display-3 {
  font-family: 'Poppins', sans-serif !important;
}

.v-window-item .layout {
  max-width: 1024px;
}
</style>
