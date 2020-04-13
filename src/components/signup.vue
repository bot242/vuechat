<template>
    <div id="signin">
        <h2>SIGNUP</h2>
        <div class="form-group log">
            <label for="username">Username</label>
            <input type="text" name="username" v-model="name" class="form-control" />            
        </div>        
        <div class="form-group log">
            <label for="username">Mail Id</label>
            <input type="text" name="id" v-model="mail" class="form-control" />
        </div>                
        <div class="form-group log">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" v-model="pass" class="form-control"  />                    
        </div>
        <div class="form-group form-tp">
            <router-link to="/login">
                <button v-on:click="register" class="btn btn-primary">Create new account</button>
            </router-link>
        </div>        
        <div class="form-group form-tp">
            I am an <router-link to="/login"><b>Existing User</b></router-link>
        </div>        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'signup',
    data() {
        return {
            name: "",
            mail:"",
            pass:""
        }
    },
    computed: {
    formData() {
        return {
            stuff: {
                username: this.name,
                email:this.mail,
                password:this.pass,
                
            }
        }
    }
  },
    methods: {        
       register(){
    let formData = new FormData();
            formData.append('username', this.name);
            formData.append('email',this.mail);
            formData.append('password',this.pass);            
            // console.log("user",this.a,"em",this.s,'pas',this.f)
            console.log("from",this.formData)
            this.axios.post('http://chatbotportal.herokuapp.com/api/user/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Content-Type': 'application/json',

                }
              }
            ).then(function(data){
              console.log(data.data);
            })
            .catch(function(){
              console.log('FAILURE!!');
            });
            alert("Account created");
    },
        
    }
}
 
</script>
<style scoped>
#signin h2 {
    text-align: center;
    margin-bottom:20px;
    font-family:fantasy;
}
#signin {
    width: 400px;        
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 75px;
    padding: 30px;        
}
.log {
    margin-left:30px;
    margin-right:30px;
}
.form-tp{
    margin-left:85px;
    margin-top:25px;
}
input:hover {
    border: 2px solid rgb(80, 170, 243);
    background-color: rgba(212, 218, 221, 0.938);
}    
</style>