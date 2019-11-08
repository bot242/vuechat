<template>
  <div id="app">
    <div id="nav">
    </div>
    
<router-view></router-view> 

  </div>
</template>
<script>
import $ from 'jquery'
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
      
    },
    methods: {
      logout: function () {
        // this.$store.dispatch('logout')
        localStorage.clear()
        .then(() => {
          this.$router.push('/login')
          // window.localStorage.removeItem('token');

        })
      }
    },
    

    created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
        }
        throw err;
      });
    });
  },
  
  }
</script>