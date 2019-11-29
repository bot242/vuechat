<template>
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
      <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
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
                  <a class="dropdown-item" href="page-user-profile.html">
                    <i class="fas fa-users-cog"></i> Edit Profile
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" @click="logout">
                    <i class="fas fa-power-off"></i> Logout
                  </a>
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
              <!-- widget atb start -->
              <b-row title="widget-tab1">
                <b-col cols="12" md="4" sm="6">

                  <div class="details-slider mt-1 mb-2 ml-4">
                    Position
                    <i class="far fa-question-circle"></i>
                  </div>

                  <div class="col-md-8 col-lg-8 col-sm-8 ml-2">
                    <div
                      class="img-right pright layout"
                      v-on:click="isLeft"
                      v-bind:class="{red: isActive}"
                    ></div>
                    <div
                      class="img-right pcenter layout"
                      v-on:click="isCenter"
                      v-bind:class="{red: isColor}"
                    ></div>
                    <div
                      class="img-right pleft layout"
                      v-on:click="isRight"
                      v-bind:class="{red: isGreen}"
                    ></div>
                  </div>
                  <div class="r welcome mt-1 mb-2 ml-4">
                    Welcome Message
                    <i class="far fa-question-circle"></i>
                  </div>
                  <b-form-input class="ml-4" id="input-default" style="width: 75%" v-model="msg"></b-form-input>

                  <div class="mb-2 ml-4 mt-2 t">
                    Avatar
                    <i class="far fa-question-circle"></i>
                  </div>
                  <div
                    class="twitter-picker ml-4"
                    style="width: 80%; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;"
                  >
                    <div
                      style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; top: -11px; left: 12px;"
                    ></div>
                    <div
                      style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; top: -10px; left: 12px;"
                    ></div>
                    <div style="padding: 15px 9px 9px 15px;">
                      <slick ref="slick" :options="slickOptions" v-if="image.length">
                        <!-- <div class="data1 uploadbg">
                          <input
                            type="file"
                            class="ava-upload"
                            id="file"
                            ref="file"
                            v-on:change="handleFileUpload()"
                          />

                          <i class="fas fa-plus-circle fa-5x"></i>
                        </div> -->
                        <div v-for="images in image" :key="images.id">
                          <img
                            v-bind:class="{'reds': activeIndex === images}"
                            :src="'http://192.168.100.144:8001/static/asset/avatar/'+images.image"
                            style="width:90%;"
                            @click="setImg(images)"
                          />
                        </div>
                      </slick>
                    </div>
                  </div>

                  <div class="q collect ml-4 mt-2 mb-5">
                    zoogle.chat Branding
                    <i class="far fa-question-circle"></i>
                  </div>
                  <button class="btn btn-blue form-big-input w-200" v-on:click="widget()">Update</button>
                  <modal name="hello-world">hello, world!</modal>
                </b-col>
                <b-col cols="12" md="8" sm="6">
                  <div class="tab1-data2 mt-1">
                    <div class="tab-1">
                      <div class="float-left mr-1 ml-3 indicator1"></div>
                      <div class="float-left mr-1 indicator2"></div>
                      <div class="float-left indicator3"></div>
                    </div>

                    <div class="body1 ml-3 mr-3">
                      <div v-for="bot in botcount" :key="bot.id">
                        <div v-for="full in all" :key="full.img">
                          <span v-if="bot.pos_change==='!isTrue'">
                            <div v-show="bot.pos_change" class="chat11">
                              <span v-show="bot.img_modal">
                                <img class="padrig1" :src="full.img" :id="outputId" />
                              </span>

                              <span v-show="!isQ">
                                <img class="padrig1" v-if="url" :src="url" />
                              </span>
                              <p
                                class="chatname"
                                style="float: right;   box-shadow: 0 0 10px;"
                              >{{bot.message}}</p>
                            </div>
                          </span>

                          <span v-if="bot.pos_change==='!isChat'">
                            <div v-show="bot.pos_change" class="chat22">
                              <span v-show="bot.img_modal">
                                <img class="padrig2" :src="full.img" :id="outputId" />
                              </span>
                              <span v-show="!isQ">
                                <img class="padrig1" v-if="url" :src="url" />
                              </span>
                              <p
                                class="chatname1"
                                style="float: right;   box-shadow: 0 0 10px;"
                              >{{bot.message}}</p>
                            </div>
                          </span>

                          <span v-if="bot.pos_change==='!isIcon'">
                            <div v-show="bot.pos_change" class="chat33">
                              <span v-show="bot.img_modal">
                                <img class="padrig3" :src="full.img" :id="outputId" />
                              </span>

                              <span v-show="!isQ">
                                <img class="padrig3" v-if="url" :src="url" />
                              </span>
                              <p
                                class="chatname"
                                style="float: left;   box-shadow: 0 0 10px;"
                              >{{bot.message}}</p>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <!-- widdget end -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END: Content-->

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
</template>

<script>
import Slick from "vue-slick";
import axios from "axios";
import Vue from "vue";
import qs from "qs";

export default {
  name: "WidgetTab",
  components: {
    Slick
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },

  data() {
    return {
      all: [],
      botcount: "",
      isHidden: false,
      isShow: false,
      isTrue: true,
      isChat: true,
      isIcon: true,
      msg: "Chat now",
      isQ: true,
      isM: true,
      isActive: false,
      isColor: false,
      isGreen: false,
      image: [],
      url: null,
      outputId: "",
      outputImg: "",
      newOutput: [],
      response: "",
      activeIndex: undefined,
      as: "",
      slickOptions: {
        slidesToShow: 4,
        infinite: false,
        accessibility: true,
        adaptiveHeight: false,
        arrows: true,
        dots: false,
        draggable: true,
        edgeFriction: 0.3,
        swipe: true,
        name: "",
        gt: "",
        file: "",
        avimg: "",
        api: []
      }
    };
  },
  computed: {
    formData() {
      return {
        stuff: {
          position: this.as,
          message: this.msg,
          avatar: this.outputImg,
          user: this.user
        }
      };
    }
  },
  created() {
    let a = localStorage.getItem("all");
    this.name = a;
  },
  mounted() {
    this.getTasks(); // Call our getTasks function below
    this.getvalues();
  },
  methods: {
    logout: function() {
      this.$store
        .dispatch("logout")

        .then(() => {
          this.$router.push("/login");
        });
    },
    getTasks() {
      let d = localStorage.getItem("id");
      axios({
        method: "get",
        url: "http://192.168.100.144:8001/api/avatarimageupload/" + d + "/",
        auth: {}
      }).then(response => {
        this.image = response.data;
        let c = response.data[0].image;
        this.avimg = "http://192.168.100.144:8001/static/asset/avatar/" + c;
        let mains = response.data[0].img_modal;
        // this.pos =response.data[0].
        this.api.push("looy", avimg);
        console.log("api", this.api);
      });
    },
    widget() {
      var user = JSON.parse(localStorage.getItem("id"));
      this.userid = user;
      let bid=localStorage.getItem('bot_id')
      let img = localStorage.getItem("img_id");
      console.log('asdas',img)
      let formData = new FormData();
      formData.append("position", this.as);
      formData.append("message", this.msg);
      formData.append("avatar", img);
      formData.append("user", this.userid);
      formData.append('bot',bid)
      console.log("ssss", ...formData);
      this.axios
        .put("http://192.168.100.144:8001/api/widget/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Content-Type": "application/json"
          }
        })
       .then((data) =>{
          console.log("asa", data.data);
           this.getvalues();
        })
        .catch((e)=> {
          console.log("FAILURE!!");
        });
      // setTimeout(function() {
      //   location.reload(true);
      // }, 10);

      // location.reload()

      //   .then(function(data) {
      //     console.log(data.data, "sucess");
      //   });

      // console.log("enter");
      // this.loading = false;
      //   this.getvalues();
      // console.log("leave");

    },


    getvalues:function() {
      this.all=[]
      var user = JSON.parse(localStorage.getItem("id"));
      this.userid = user;
      let bid=localStorage.getItem('bot_id');
      this.axios
        .get(
          "http://192.168.100.144:8001/api/widgetdetails/" + this.userid +"/"+ bid +"/"
        )
        .then(response => {
          this.botcount = response.data;

          console.log("get bot  ", this.botcount);
          this.msg = response.data[0].message;
          let c = response.data[0].avatar_name;
          console.log('img',c)
          this.gt = "http://192.168.100.144:8001/static/asset/avatar/" + c;
          let get = this.gt;
          console.log("kjlkh", this.gt);

          let main = { img: get };
          this.all.push(main);

        });
    },

    isLeft() {
      (this.isTrue = false),
        (this.isChat = true),
        (this.isIcon = true),
        (this.isActive = !this.isActive);
      (this.isColor = false),
      (this.isGreen = false);
      if (this.isTrue === false) {
        var asa = "Left";
        this.as = asa;
        // console.log("sdda", this.as);
        // console.log("msg", this.msg);
      }
    },
    isCenter() {
      (this.isTrue = true),
        (this.isChat = false),
        (this.isIcon = true),
        (this.isColor = !this.isColor),
        (this.isActive = false),
        (this.isGreen = false);
      if (this.isChat === false) {
        var asa = "Center";
        this.as = asa;
      }
    },
    isRight() {
      (this.isTrue = true),
        (this.isChat = true),
        (this.isIcon = false),
        (this.isGreen = !this.isGreen),
        (this.isActive = false),
        (this.isColor = false);
      if (this.isIcon === false) {
        var asa = "Right";
        this.as = asa;
      }
    },
    // handleFileUpload() {
    //   this.file = this.$refs.file.files[0];
    //   console.log(this.file);
    //   let formData = new FormData();
    //   let a = localStorage.getItem('id')
    //   formData.append("image", this.file);
    //   formData.append("user", a);
    //   console.log("test", ...formData);
    //   axios
    //     .post("http://192.168.100.144:8001/api/imageupload/", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data"
    //       }
    //     })
    //     .then(function() {
    //       console.log("SUCCESS!! full");
    //     })
    //     .catch(function() {
    //       console.log("FAILURE!!");
    //     });
    // },
    setImg(event) {
      (this.outputId = event.id),
        (this.outputImg = event.image),
        (this.isQ = true),
        (this.isM = false);
      {
        this.activeIndex = event;
      }
      console.log("test", this.outputImg);
      localStorage.setItem("img_id", this.outputId);
      localStorage.setItem("img", this.outputImg);
      console.log("id", this.outputId);
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>
<style scoped>
.tab1-bg {
  background-color: #f4f4f4;
}
.data1 {
  position: relative;
}
.uploadbg {
  display: inline-block;
  height: 90px;
  width: 50%;
}
.ava-upload {
  width: 100%;
  height: 100%;
  color: transparent;
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
.img-right {
  cursor: pointer;
  width: 45px;
  height: 45px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  margin-right: 3px;
}
.tab1-data2 {
  width: 100%;
  float: left;
  border: 2px solid #dbe2dd;
}
.tab-1 {
  background-color: #f0f4f7;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 200%;
  float: left;
}
.indicator1 {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  left: 26px;
  background-color: red;
}
.indicator2 {
  margin-right: 50px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  left: 26px;
  background-color: yellow;
}
.indicator3 {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  left: 26px;
  background-color: #2bbb5f;
}
.body1 {
  height: calc(100vh - 150px);
  background-image: url("~@/assets/desktop-dummy.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.pright {
  background-image: url("~@/assets/pright.png");
}
.pcenter {
  background-image: url("~@/assets/pcenter.png");
}
.pleft {
  background-image: url("~@/assets/pleft.png");
}
.padrig1 {
  width: 9%;
  position: relative;
  float: right;
  top: 475px;
  box-shadow: 0 0 10px;
  border-radius: 50%;
}

.padrig2 {
  width: 9%;
  position: relative;
  float: right;
  top: 250px;
  box-shadow: 0 0 10px;
  border-radius: 50%;
}
.padrig3 {
  width: 9%;
  position: relative;
  float: left;
  top: 475px;
  box-shadow: 0 0 10px;
  border-radius: 50%;
}
.row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.chatname {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  color: black;
  line-height: 24px !important;
  position: relative;
  z-index: 2147482999;
  cursor: pointer;
  padding: 7px 10px;
  border-radius: 0.625rem !important;
  white-space: normal;
  text-overflow: ellipsis;
  max-width: 300px;
  margin: 0px 15px;
  top: 470px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  animation: launcher-frame-appear 0.25s ease forwards;
}
.chatname1 {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  color: black;
  line-height: 24px !important;
  position: relative;
  z-index: 2147482999;
  cursor: pointer;
  padding: 7px 10px;
  border-radius: 0.625rem !important;
  white-space: normal;
  text-overflow: ellipsis;
  max-width: 300px;
  margin: 0px 15px;
  top: 250px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  animation: launcher-frame-appear 0.25s ease forwards;
}
.red {
  border: 2px solid #2dc464;
}
.layout:hover {
  border: 2px solid #2dc464;
}
.slick-prev:before,
.slick-next:before {
  color: black !important;
}
.reds {
  border: 2px solid #2dc263;
  border-radius: 50%;
  padding: 2px;
}
body.vertical-layout.vertical-menu-modern.menu-expanded
  .main-menu
  .navigation
  li.has-sub
  > a:not(.mm-next):after {
  content: "\f105";
  font-family: "FontAwesome";
  font-size: 1.1rem;
  display: inline-block;
  position: absolute;
  right: 25px;
  top: 10px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  transition: -webkit-transform 0.2s ease-in-out;
}
.btn-blue {
  background-color: #0647a5;
  border-color: #0647a5;
  color: #fff;
}
.btn-blue:hover {
  color: #fff;
}
</style>
