<template>
  <v-dialog persistent scrollable v-model="modal" max-width="70%">
    <v-card>
      <v-card-title primary-title class="black">
        <span class="title white--text">Program of Activities</span>
        <v-spacer />
        <v-btn icon class="ma-0 white--text" @click="$router.go(-1)">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text style="height: 80vh;">
        <v-layout>
          <v-flex xs4 offset-xs8>
            <v-select v-model="sort" :items="venues" label="Filter by day" box></v-select>
          </v-flex>
        </v-layout>
        <v-divider class="mt-2"></v-divider>
        <v-data-table
          :headers="headers"
          :items="!sort ? programs : programs.filter(program => program.day === sort)"
          hide-actions
        >
          <template v-slot:items="{ item: program }">
            <td>{{program.time}}</td>
            <td>{{program.title}}</td>
            <td>{{program.agency}}</td>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      modal: false,
      activities: {
        day1: [
          {
            time: '11:20 AM - 11:50 AM',
            title: 'DOST Hybrid Electric Road Train (HERT) and Hybrid Electric Trainset (HET)',
            agency: 'Metals Industry REsearch and Development Center - Department of Science and Technology'
          },
          {
            time: '11:20 AM - 11:50 AM',
            title: 'Remote Sensing and Data Science (DATOS) Help Desk',
            agency: 'Advanced Science and Technology Institute - Department of Science and Technology'
          },
          {
            time: '1:00 PM - 1:30 PM',
            title: 'Hybrid Trimaran Passenger Fast Craft Using Multi-Engine and Alternative Energy Sources from Ocean Waves',
            agency: 'Metallica Marine Consultancy Fabrication and Services Aklan State University'
          },
          {
            time: '2:00 PM - 2:30 PM',
            title: 'Site Characteristics Assessment in Relatipon to Strong Earthquake Ground SHaking in Urban Areas',
            agency: 'Philippine Institute of Volcanology and Seismology - Department of Science and Technology'
          },
          {
            time: '3:00 PM - 3:30 PM',
            title: 'Contactless Apprehension for Traffic Violations (CATCHALL)',
            agency: 'De Las Salle University'
          }
        ],
        day2: [
          {
            time: '10:30 AM - 11:00 AM',
            title: 'DOST OneLab: One-Stop Shop for Laboratory Services',
            agency: 'Department of Science and Technology - Regional Office IX'
          },
          {
            time: '11:20 AM - 11:50 AM',
            title: 'OneExpert: Online Portal for Consultancy and Other S&T Services',
            agency: 'Deparment of Science and Technology - Regional Office VI'
          },
          {
            time: '1:00 PM - 1:30 PM',
            title: 'OneSTore: E-commerce Site for DOST-assisted MSMEs',
            agency: 'Department of Science and Technology - Regional Office II'
          },
          {
            time: '2:00 PM - 2:30 PM',
            title: 'Safe Food Mentor App',
            agency: 'Department of Science and Technology National Capital Region'
          },
          {
            time: '3:00 PM - 3:30 PM',
            title: 'Data Analytics - Ready Info Unified System (DARIUS) for Agile Delivery of S&T Services',
            agency: 'Department of Science and Technology - Regional Office IV A (Calabarzon)'
          }
        ],
        day3: [
          {
            time: '10:30 AM - 11:00 AM',
            title: 'Farming Its Way to Success',
            agency: 'Villaconzoilo Community Association (VCA) - Villaconzoilo, Jaro, Leyte'
          },
          {
            time: '11:20 AM - 11:50 AM',
            title: 'Crafting Community Development through Science and Technology',
            agency: 'Jabonga Water Hyacinth Handicraft Association - Butuan City, Agusan del Norte'
          },
          {
            time: '1:00 PM - 1:30 PM',
            title: 'Innovations for Supporting Urban Livelihood',
            agency: 'Southville Home-Based Produce Association, Inc. - Muntinlupa City, Metro Manila'
          },
          {
            time: '2:00 PM - 2:30 PM',
            title: '10 Million Mingo Meals to Fight Malnutrition',
            agency: 'Negrense Volunteers for Change (NVC) Foundation - Bacolod City, Negros Occidental'
          },
          {
            time: '3:00 PM - 3:30 PM',
            title: 'Packaging Innovation for Market Competitiveness',
            agency: 'Rejano\'s Bakery - Banahaw, Sta. Cruz, Marinduque'
          }
        ],
        day4: [
          {
            time: '11:20 AM - 11:50 AM',
            title: 'Good for Health, Good for Business',
            agency: 'Long Live Pharma - Sta. Barbara, Pangasinan'
          },
          {
            time: '11:20 AM - 11:50 AM',
            title: 'Fermenting Innovations, Winning Spirits',
            agency: 'Dielle\'s Apiary and Meadery Inc. - Muntinlupa City, Metro Manila'
          },
          {
            time: '1:00 PM - 1:30 PM',
            title: 'Built for Success from the Ground Up',
            agency: 'MAS Steel Fabricator - Magarao, Camarines Sur'
          },
          {
            time: '2:00 PM - 2:30 PM',
            title: 'Sustainable Practices for Profitable Business',
            agency: 'Khan Beverage - Sta. Cruz, Manila'
          },
          {
            time: '3:00 PM - 3:30 PM',
            title: 'Boosting Productivity through Innovation',
            agency: 'MELJO\'s EATERY (KUMPARES) - Paranaque City'
          }
        ]
      },
      programs: [],
      headers: [
        { text: 'Time', value: 'time' },
        { text: 'Activity', value: 'title' },
        { text: 'Agency', value: 'agency' }
      ],
      venues: [
        { text: 'Day 1 - July 17', value: 'day1' },
        { text: 'Day 2 - July 18', value: 'day2' },
        { text: 'Day 3 - July 19', value: 'day3' },
        { text: 'Day 4 - July 20', value: 'day4' }
      ],
      sort: null
    }
  },
  created () {
    Object.keys(this.activities).forEach(day => {
      this.activities[day].forEach(activity => {
        activity.day = day
        this.programs.push(activity)
      })
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
