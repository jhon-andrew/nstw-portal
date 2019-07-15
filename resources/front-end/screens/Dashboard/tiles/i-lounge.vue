<template>
  <v-card :ripple="{ class: 'blue--text text--lighten-4' }" dark to="/dashboard/i-lounge/">
    <v-layout column fill-height class="ma-0">
      <!-- <v-flex shrink>
        iLounge
      </v-flex> -->
      <v-flex d-flex>
        <v-window v-model="slider" class="ma-auto text-xs-center pa-3">
          <v-window-item>
            <h1 class="display-4" style="text-shadow: -2px 0 1px #000;">i<span style="color: #56c5d1;">lounge</span></h1>
            <h6 class="title" style="text-shadow: 0 0 2px #000;">Think. Create. Innovate.</h6>
          </v-window-item>
          <v-window-item>
            <span class="subheading">DAY 1 - July 17, 2019</span>
            <h6 class="title orange--text font-weight-bold">Smart Solutions for Sustainable Cities and Communities (S3C2)</h6>
            <span>Science, Technology and Innovation for livable, sustainable and workable cities and communities.</span>
          </v-window-item>
          <v-window-item v-for="activity in activities.day1" :key="activity.title">
            <p>{{activity.time}}</p>
            <p class="title">{{activity.title}}</p>
            <p class="caption">{{activity.agency}}</p>
          </v-window-item>
          <v-window-item>
            <span class="subheading">DAY 2 - July 18, 2019</span>
            <h6 class="title orange--text font-weight-bold">Technology and Innovation in Public Services (TIPS)</h6>
            <span>Harnessing Science, Technology and Innovation in improving services to the people.</span>
          </v-window-item>
          <v-window-item v-for="activity in activities.day2" :key="activity.title">
            <p>{{activity.time}}</p>
            <p class="title">{{activity.title}}</p>
            <p class="caption">{{activity.agency}}</p>
          </v-window-item>
          <v-window-item>
            <span class="subheading">DAY 3 - July 19, 2019</span>
            <h6 class="title orange--text font-weight-bold">Empowering People, Innovations in the Countryside (EPIC)</h6>
            <span>People empowerment and countryside development through Science, Technology and Innovation.</span>
          </v-window-item>
          <v-window-item v-for="activity in activities.day3" :key="activity.title">
            <p>{{activity.time}}</p>
            <p class="title">{{activity.title}}</p>
            <p class="caption">{{activity.agency}}</p>
          </v-window-item>
          <v-window-item>
            <span class="subheading">DAY 4 - July 10, 2019</span>
            <h6 class="title orange--text font-weight-bold">Business Innovation Stories (BisnIs)</h6>
            <span>Using Science, Technology and Innovation in enhancing MSME competitiveness.</span>
          </v-window-item>
          <v-window-item v-for="activity in activities.day4" :key="activity.title">
            <p>{{activity.time}}</p>
            <p class="title">{{activity.title}}</p>
            <p class="caption">{{activity.agency}}</p>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  name: 'i-lounge',
  data () {
    return {
      slider: 0,
      sliderTimer: null,
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
      }
    }
  },
  created () {
    this.sliderTimer = setInterval(() => {
      let maxSlide = this.activities.day1.length + this.activities.day2.length + this.activities.day3.length + this.activities.day4.length + 5
      this.slider += (this.slider === maxSlide) ? (maxSlide * -1) : 1
    }, 5024)
  },
  beforeDestroy () {
    clearInterval(this.sliderTimer)
  }
}
</script>
<style scoped>
.title, .display-1, .display-4, .headline, .caption {
  font-family: 'Poppins', sans-serif !important;
}

.layout > div {
  padding: 0 !important;
}
</style>
