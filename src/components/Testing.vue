<template>
<div>
  <body
    class="vertical-layout vertical-menu-modern semi-dark-layout content-left-sidebar email-application navbar-floating footer-static"
    data-open="click"
    data-menu="vertical-menu-modern"
    data-col="content-left-sidebar"
    data-layout="semi-dark-layout"
  >
    <!-- BEGIN: Main Menu-->
    <div
      class="main-menu menu-fixed menu-dark menu-accordion menu-shadow"
      data-scroll-to-active="true"
    >
      <div class="navbar-header">
        <ul class="nav navbar-nav flex-row">
          <li class="nav-item mr-auto">
            <a class="navbar-brand">
              <div class="brand-logo"></div>
              <h2 class="brand-text mb-0">zBOT</h2>
            </a>
          </li>
          <li class="nav-item nav-toggle">
            <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
              <i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i>
              <i
                class="toggle-icon fas fa-compact-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary"
                data-ticon="icon-disc"
              ></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="shadow-bottom"></div>
      <div class="main-menu-content">
        <ul
          class="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li class="nav-item">
            <a href="/Bot">
              <i class="fas fa-home"></i>
              <span class="menu-title" data-i18n="Dashboard">Dashboard</span>
            </a>
            <ul class="menu-content">
              <li>
                <a href="/Bot">
                  <i class="far fa-circle"></i>
                  <span class="menu-item" data-i18n="BotDetails">Bot Details</span>
                </a>
              </li>
              <!-- <li>
                <a href="#">
                  <i class="far fa-circle"></i>
                  <span class="menu-item" data-i18n="Create New Bot">Create New Bot</span>
                </a>
              </li>-->
            </ul>
          </li>
          <li class="navigation-header">
            <span>
              <b>Builders</b>
            </span>
          </li>
          <li class="active nav-item">
            <a href="app-email.html">
              <i class="far fa-eye"></i>
              <span class="menu-title" data-i18n="Email">Preview</span>
            </a>
            <ul class="menu-content">
              <li>
                <a href="/Widget">
                  <i class="far fa-circle"></i>
                  <span class="menu-item" data-i18n="Shop">Widget</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="far fa-circle"></i>
                  <span class="menu-item" data-i18n="Wish List">Landbot</span>
                </a>
              </li>
              <li>
                <a href="/Embed">
                  <i class="far fa-circle"></i>
                  <span class="menu-item" data-i18n="Checkout">Embed</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="/Script">
              <i class="fas fa-industry"></i>
              <span class="menu-title" data-i18n="Chat">Script</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/Publish">
              <i class="fas fa-archive"></i>
              <span class="menu-title" data-i18n="Todo">Publish</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- END: Main Menu-->

    <!-- BEGIN: Content-->
    <div class="app-content content">
      <!-- BEGIN: Header-->
      <div class="content-overlay"></div>
      <div class="header-navbar-shadow"></div>
      <nav
        class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow"
      >
        <div class="navbar-wrapper">
          <div class="navbar-container content">
            <div class="navbar-collapse" id="navbar-mobile">
              <ul class="nav navbar-nav float-right" style="margin-left: 85%;">
                <ul class="dropdown-menu dropdown-menu-media dropdown-menu-right">
                  <li class="dropdown-menu-header">
                    <div class="dropdown-header m-0 p-2">
                      <h3 class="white">5 New</h3>
                      <span class="notification-title">App Notifications</span>
                    </div>
                  </li>
                  <li class="scrollable-container media-list">
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-plus-square font-medium-5 primary"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="primary media-heading">You have new order!</h6>
                          <small class="notification-text">Are your going to meet me tonight?</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">9 hours ago</time>
                        </small>
                      </div>
                    </a>
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-download-cloud font-medium-5 success"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="success media-heading red darken-1">99% Server load</h6>
                          <small class="notification-text">You got new order of goods.</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">5 hour ago</time>
                        </small>
                      </div>
                    </a>
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-alert-triangle font-medium-5 danger"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="danger media-heading yellow darken-3">Warning notifixation</h6>
                          <small class="notification-text">Server have 99% CPU usage.</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">Today</time>
                        </small>
                      </div>
                    </a>
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-check-circle font-medium-5 info"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="info media-heading">Complete the task</h6>
                          <small class="notification-text">Cake sesame snaps cupcake</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">Last week</time>
                        </small>
                      </div>
                    </a>
                    <a class="d-flex justify-content-between" href="javascript:void(0)">
                      <div class="media d-flex align-items-start">
                        <div class="media-left">
                          <i class="feather icon-file font-medium-5 warning"></i>
                        </div>
                        <div class="media-body">
                          <h6 class="warning media-heading">Generate monthly report</h6>
                          <small class="notification-text">Chocolate cake oat cake tiramisu marzipan</small>
                        </div>
                        <small>
                          <time class="media-meta" datetime="2015-06-11T18:29:20+08:00">Last month</time>
                        </small>
                      </div>
                    </a>
                  </li>
                  <li class="dropdown-menu-footer">
                    <a
                      class="dropdown-item p-1 text-center"
                      href="javascript:void(0)"
                    >Read all notifications</a>
                  </li>
                </ul>

                <li class="dropdown dropdown-user nav-item">
                  <a
                    class="dropdown-toggle nav-link dropdown-user-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    <div class="user-nav d-sm-flex d-none">
                      <span class="user-name text-bold-600">{{ name }}</span>
                    </div>
                    <span>
                      <img
                        class="round"
                        src="@/assets/images/portrait/small/avatar-s-11.png"
                        alt="avatar"
                        height="40"
                        width="40"
                      />
                    </span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">
                      <i class="fas fa-users-cog"></i> Edit Profile
                    </a>
                    <div class="dropdown-divider"></div>
                    <span v-if="isLoggedIn">
                    <a class="dropdown-item" @click="logout">
                      <i class="fas fa-power-off"></i> Logout
                    </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <!-- END: Header-->

      <div class="content-area-wrapper">
        <div class="content-right">
          <div class="content-wrapper">
            <div class="content-header row"></div>
            <div class="content-body">
              <div class="app-content-overlay"></div>
              <div class="email-app-area">
                <Scrip/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Content-->

    <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

    <!-- BEGIN: Footer-->
    <footer class="footer footer-static footer-light">
      <p class="clearfix blue-grey lighten-2 mb-0">
        <span class="float-md-left d-block d-md-inline-block mt-25">
          COPYRIGHT &copy; 2019
          <a
            class="text-bold-800 grey darken-2"
            href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"
            target="_blank"
          >zBOT,</a>All rights Reserved
        </span>
        <span class="float-md-right d-none d-md-block">
          Zoogle Technologies.
          <i class="far fa-heart pink"></i>
        </span>
        <button class="btn btn-primary btn-icon scroll-top" type="button">
          <i class="far fa-arrow-alt-circle-up"></i>
        </button>
      </p>
    </footer>
    <!-- END: Footer-->
  </body>
</div>
</template>
<script>
import Scrip from "./Scrip";
export default {
  name: "Testing",
  components: {
   Scrip,
  },
   computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
  data() {
    return {
name:''
};
  },
    created(){
    let a= localStorage.getItem('all')
    this.name=a
    console.log('na',this.name)
  },
  methods: {
    logout: function () {
        this.$store.dispatch('logout')

        .then(() => {
          this.$router.push('/login')
        })
      }
  }
};
</script>
