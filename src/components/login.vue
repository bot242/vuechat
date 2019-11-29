<template>
  <div>
  <body class="vertical-layout vertical-menu-modern semi-dark-layout 1-column  navbar-floating footer-static bg-full-screen-image  blank-page blank-page" data-open="click" data-menu="vertical-menu-modern" data-col="1-column" data-layout="semi-dark-layout">
    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <section class="row flexbox-container">
                    <div class="col-xl-8 col-11 d-flex justify-content-center">
                        <div class="card bg-authentication rounded-0 mb-0">
                            <div class="row m-0">
                                <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                                    <img src="../assets/images/pages/login.png" alt="branding logo">
                                </div>
                                <div class="col-lg-6 col-12 p-0">
                                    <div class="card rounded-0 mb-0 px-2">
                                        <div class="card-header pb-1">
                                            <div class="card-title">
                                                <h4 class="mb-0">Login</h4>
                                            </div>
                                        </div>
                                        <p class="px-2">Welcome back, please login to your account.</p>
                                        <div class="card-content">
                                            <div class="card-body pt-1">
                                                <form class="login" @submit.prevent="login">
                                                    <fieldset class="form-label-group form-group position-relative has-icon-left">
                                                        <input type="text" required v-model="email" class="form-control" id="user-name" placeholder="Username">
                                                        <div class="form-control-position">
                                                        <i class="fas fa-user"></i>           
                                                         </div>
                                                        <label for="user-name">Username</label>
                                                    </fieldset>
                                                    <span v-if="this.v==='fail'">
                                                        <p style="color:red;">* user name or password doesn't match</p>
                                                    </span>
                                                    <fieldset class="form-label-group position-relative has-icon-left">
                                                        <input type="password" required v-model="password" class="form-control" id="user-password" placeholder="Password" >
                                                        <div class="form-control-position">
                                                            <i class="fas fa-lock"></i>
                                                        </div>
                                                        <label for="user-password">Password</label>
                                                    </fieldset>
                                                 
                                                        
                                                 
                                                

                                                    <a href="/register" class="btn btn-outline-primary float-left btn-inline">Register</a>
                                                    <button type="submit" class="btn btn-primary float-right btn-inline">Login</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="login-footer">
                                            <div class="divider">
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
  data() {
    return {
      email: "",
      password: "",
      v:""
    };
  },
  methods: {
    login: function() {
      let username = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.push("/Bot"))
        .catch(err => {this.v='fail'
                       console.log('f',this.v)     
        });
            

    }
  }
};
</script>
