<template>
  <div id="login">
    <h2>LOGIN</h2>
    <div class="form-group log">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="name" class="form-control" />      
    </div>
    
    <div class="form-group log">
      <label>Password</label>
      <input type="password" name="password" v-model="pass" class="form-control"  />    
    </div>        

    <div class="form-group fm-one">
      <button class="btn btn-primary" v-on:click="login()">Submit</button>                    
      <router-link to="/signup">
        <button class="btn btn-link"><b>Register</b></button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  computed: {
    formData() {
      return {
        stuff: {
          username: this.name,
          password: this.pass
        }
      };
    }
  },
  methods: {
    login () {
      this.axios.post('http://192.168.100.144:8000/api/api-token-auth/', { username: this.name, password: this.pass })
      .then(request => this.loginSuccessful(request))
      .catch(() => this.loginFailed())
    },  
    loginSuccessful (req) {
      if (!req.data.token) {
        this.loginFailed()
        return
      }
      localStorage.token = req.data.token
      this.error = false
      this.$emit("authenticated", true);  
      this.$router.replace(this.$route.query.redirect || '/secure')
    },
    loginFailed () {
      this.error = 'Login failed!'
      delete localStorage.token
    }
  }
};
</script>

<style scoped>
#login {
  width: 400px;  
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 140px;
  padding: 30px;
}
#login h2 {
  text-align: center;
  margin-bottom:15px;  
  font-family:fantasy;
}
.log {
  margin-left: 30px;
  margin-right: 30px;
}
.fm-one{
  margin-left:90px;
  margin-top:30px;
}
input:hover {
  border: 2px solid rgb(80, 170, 243);
  background-color: rgba(212, 218, 221, 0.938);
}
</style>