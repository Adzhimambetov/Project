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
      apiKey: "AIzaSyB9iA52vpEgBVYjyPaFDNZHvl9NXVctgxc",
      authDomain: "first-project-fe897.firebaseapp.com",
      projectId: "first-project-fe897",
      storageBucket: "first-project-fe897.appspot.com",
      messagingSenderId: "980477993476",
      appId: "1:980477993476:web:3d64786ae00ca4e2a9cb51",
      measurementId: "G-TVR0QNC8XG"
    };
    
    // Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.analytics();
  },
}).$mount('#app')
