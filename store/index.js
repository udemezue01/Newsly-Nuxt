import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from "vuex-persistedstate"; 

import news from './modules/news.js'
import post from './modules/post.js'
import auth from './modules/auth.js'

Vue.use(Vuex)

export default () => new Vuex.Store({

  modules: {
    
      post,
  
  }
})
