import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '../router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created () {
    const firebaseConfig = {
      apiKey: "AIzaSyB6-qMUvEv-uWgeAccPTQHsdZZEbjL_3c0",
      authDomain: "first-project-c374d.firebaseapp.com",
      projectId: "first-project-c374d",
      storageBucket: "first-project-c374d.appspot.com",
      messagingSenderId: "458367420501",
      appId: "1:458367420501:web:b452424620c84129b4ecdc",
      measurementId: "G-N0G92B3HNK"
    };
    // Initialize Firebase
  	fb.initializeApp(firebaseConfig);
  	fb.analytics();
  },
}).$mount('#app')
