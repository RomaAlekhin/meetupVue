// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import { store } from './store'
import DateFilter from './components/filters/date'
/*import colors from 'vuetify/es5/util/colors'*/
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'

import App from './App'
import router from './router'

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)
Vue.use(Vuetify, { theme: {
  primary: '#D32F2F',
  secondary: '#bdbdbd',
  accent: '#FF5252',
  error: '#D50000',
  info: '#42A5F5',
  success: '#81C784',
  warning: '#ffa000'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
    apiKey: 'AIzaSyBXSorLry3owFo2xagQrOh7Di6I_8db9uo',
    authDomain: 'devmeetup-5c2f5.firebaseapp.com',
    databaseURL:'"https://devmeetup-5c2f5.firebaseio.com',
    projectId: 'devmeetup-5c2f5',
    storageBucket: 'devmeetup-5c2f5.appspot.com',
    messagingSenderId: "1059461830845"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
