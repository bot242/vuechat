<template>
  <div>
 <body class="vertical-layout vertical-menu-modern semi-dark-layout 1-column  navbar-floating footer-static bg-full-screen-image  blank-page blank-page" data-open="click" data-menu="vertical-menu-modern" data-col="1-column" data-layout="semi-dark-layout">
    <div class="app-content content"  style="background-color:rgb(3,66,180);">
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <section class="row flexbox-container">
                    <div class="col-xl-8 col-10 d-flex justify-content-center">
                        <div class="card bg-authentication rounded-0 mb-0">
                            <div class="row m-0" style="background-color:rgb(225, 233, 244);">
                                <div class="col-lg-6 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0">
                                   <div class="mt-1 mb-3">
                                        <img src="../assets/images/pages/logo.png" alt="branding logo">
                                    </div>
                                    <div class="mb-5 mt-2">
                                        <img src="../assets/images/pages/login-img.png" alt="branding logo">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-12 p-0 mt-5">
                                    <div class="card rounded-0 mb-0 p-2" style="background-color:rgb(225, 233, 244);">
                                        <div class="card-header pt-50 pb-1">
                                            <div class="card-title">
                                                <h4 class="mb-0">Create Account</h4>
                                            </div>
                                        </div>
                                        <p class="px-2">Fill the below form to create a new account.</p>
                                        <div class="card-content">
                                            <div class="card-body pt-0">
                                                <form @submit.prevent="register">
                                                    <div class="form-label-group">
                                                        <input type="text" id="inputName" class="form-control" v-model="name" placeholder="Name" required>
                                                        <label for="inputName">Name</label>
                                                    </div>
                                                    <span v-if="this.v==='already'">
                                                    <p style="color:red;">* user name already exist</p>

                                                    </span>
                                                    <div class="form-label-group">
                                                        <input type="email" id="inputEmail" class="form-control" v-model="mail" placeholder="Email" required>
                                                        <label for="inputEmail">Email</label>
                                                    </div>
                                                    <div class="form-label-group">
                                                        <input type="password" id="inputPassword" class="form-control" v-model="pass" placeholder="Password" required>
                                                        <label for="inputPassword">Password</label>
                                                    </div>                    
                                                    <div class="form-group row">
                                                        <div class="col-12">                                                    
                                                        </div>
                                                    </div>
                                                    <a href="/login" class="btn btn-outline-primary float-left btn-inline mb-50">Login</a>
                                                    <button type="submit" class="btn btn-primary float-right btn-inline mb-50"> Register </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
</body>
   
  </div>
</template>
<script>
  export default {
    data(){
      return {
        // name : "",
        // email : "",
        // password : "",
        // password_confirmation : "",
        name: "",
        mail:"",
        pass:"",
        is_admin : null,
        v:''
      }
    },
      methods: {
      register: function () {
        let data = {
            username: this.name,
            email:this.mail,
            password:this.pass,
        }
        this.$store.dispatch('register', data)
       .then(() => this.$router.push('/login'))
       .catch(err => {this.v="already"

       })
      }
    }
  }
</script>