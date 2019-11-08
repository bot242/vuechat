<template>
  <div>
    <div class="row">
      <div class="col-xs-6 col-md-3" v-if="!isHidden">
        <div class="panel form-panel" style="padding: 20px; height: 200px;">
          <div class="panel-body">
            <div>
              <a
                role="button"
                class="btn btn-default btn-form-card m-t-20 p-big-input s"
                v-on:click="isHidden = !isHidden"
              >Create a Blank Bot</a>
              <a
                role="button"
                class="btn btn-default btn-form-card m-t-20 p-big-input"
              >Copy from Template</a>
            </div>
          </div>
        </div>
      </div>

      <!-- sdsd -->
      <div class="col-xs-6 col-md-3" v-if="isHidden">
        <div class="panel form-panel" style="padding: 20px; height: 200px;">
          <div class="panel-body-1">
            <div>
              <input
                type="text"
                class="form-big-input m-4"
                v-model="url"
                v-bind:class="{red: isActive, }"
                placeholder="http:// Website.com"
                @change="sub"
                style="width: 200px;"
              />

              <div class="row ss">
                <div
                  role="button"
                  class="btn btn-default btn-form-card p-big-input t-blue m-t-10"
                  v-on:click="asd "
                  v-bind:class="{no: isNo, }"
                >Create</div>
                <div
                  role="button"
                  class="btn btn-default btn-form-card p-big-input t-black m-t-10"
                  v-on:click="isHidden=false"
                >Back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-3" v-for="botcounts in botcount" :key="botcounts.user">
        <div class="panel bot" @click="admin(botcounts)">
          <div class="panel-body">
            <img class="img-avatar" src="https://avatars.collectcdn.com/a5.png" />
            <!-- <span v-for="uses in use" :key="uses"> -->

            <span tabindex="0" class="botname-inline m-a text-center f-s-25 h-40 outline-none">
              {{ botcounts.templatename }}
              <i class="fas fa-pen" @click="showModal = true"></i>
            </span>
            <span v-if="botcounts.id===use">
              <div v-if="showModal">
                <div class="modal-mask">
                  <div class="edit-form">
                    <div class="container" style="margin-top: 20px;">
                      <form>
                        <div class="form-group">
                          <div>
                            <label>
                              <h3>BotName</h3>
                            </label>
                            <input
                              type="text"
                              class="botname-inline m-a text-center f-s-25 h-40 outline-none"
                              v-model="name"
                              @change="someHandler(botcounts)"
                            />
                          </div>
                        </div>
                      </form>
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showModal=false"
                      >Done</button>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <div
              aria-label="Not installed, Go to &quot;Builder > Publish&quot; to install"
              class="bot-indicator quicky-title hint--bottom-right indicator-inactive"
            ></div>
            <!-- <router-link to="/Scrip"></router-link> -->
            <div
              role="button"
              class="btn btn-default btn-form-card p-big-input t-black m-t-10"
              @click="edit(botcounts)"
            > <span> <a href="/Script">  Edit </a></span></div>

            <div role="button" class="btn btn-default btn-form-card">Responses</div>
            <div role="button" class="btn btn-default btn-form-card">Open</div>
            <a
              role="button"
              class="btn btn-default btn-form-card btn-float-top-2 quicky-title hint--bottom f-s-18"
              aria-label="Delete"
            >
              <i class="ion-ios-trash-outline"></i>
            </a>
            <a
              role="button"
              class="btn btn-default btn-form-card btn-float-top-1 quicky-title hint--bottom f-s-18"
              aria-label="Copy"
            >
              <i class="ion-ios-copy-outline"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VeeValidate from "vee-validate";
import axios from "axios";
export default {
  name: "Bot",
  data() {
    return {
      bot: [],
      count: 0,
      use: "",
      isHidden: false,
      isActive: false,
      isShow: false,
      isNo: false,
      url: "",
      botcount: null,
      userdetail: "",
      activeIndex: undefined,
      name: "",
      showModal: false
    };
  },

  mounted() {
    {
      var user = JSON.parse(localStorage.getItem("id"));
      this.userid = user;
      console.log("user_id", this.userid);
      axios
        .get("http://192.168.100.144:8001/api/userbot/" + this.userid + "/")
        .then(response =>
          console.log("aassssssssss", (this.botcount = response.data))
        );
    }
  },
  methods: {
    admin(event) {
      this.use = event.id;
      console.log("sucess", this.use);
    },
    someHandler(event) {
      this.use = event.id;
      console.log("sucess", this.use);
      let formData = new FormData();

      formData.append("templatename", this.name);
      console.log("ssss", formData);
      axios
        .patch(
          "http://192.168.100.144:8001/api/bot/" + this.use + "/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          }
        )
        .then(function(data) {
          console.log("asa", data.data);
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
      setTimeout(function() {
        location.reload(true);
      }, 100);
    },
    onChange(event) {
      this.userdetail = event.user;
      console.log("userdetails", event.user);
    },
    addBot() {
      this.bot.push({ id: this.count++ });
      console.log(" sadsa", this.bot.push({ id: this.count++ }));
    },
    sub() {
      console.log(
        "success ,login user id",
        JSON.parse(localStorage.getItem("id"))
      );

      var val = this.url;
      console.log(val, "test");
      var regex = /^(https?:\/\/)?[a-z0-9-]*\.?[a-z0-9-]+\.[a-z0-9-]+(\/[^<>]*)?$/;
      var isValid = regex.test(val);
      if (isValid === false) {
        this.isActive = true;
        this.isNo = true;
      } else {
        this.isActive = false;
        this.isNo = false;
      }
      console.log(isValid, "complete");
    },

    edit(event) {
      (this.use = event.id), localStorage.setItem("bot_id", this.use);
      this.activeIndex = event;
      console.log("test", this.use);
      // this.$router.push("/Public");
    },
    asd() {
      // alert("asd");
      let formData = new FormData();
      let s = JSON.parse(localStorage.getItem("id"));
      console.log("id", s);
      formData.append("website", this.url);
      formData.append("user", s);
      console.log("ssss", formData);
      this.axios
        .post("http://192.168.100.144:8001/api/bot/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Content-Type": "application/json"
          }
        })
        .then(function(data) {
          console.log("asa", data.data);
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
      setTimeout(function() {
        location.reload(true);
      }, 100);
    }
  }
};
</script>

<style>
body {
  background-color: #f0f4f7;
}
.panel {
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  text-align: center;
}
.panel-body {
  position: relative;
  padding: 30px;
}
.panel-body-1 {
  position: relative;
  text-align: center;
}
.ss {
  text-align: center;
  margin-left: 25%;
}
.btn-form-card:active,
.btn-form-card:active:focus,
.btn-form-card:focus,
.btn-form-card:hover {
  color: #2bbb5f !important;
  border-color: #fff !important;
  background: #fff !important;
}
.p-big-input {
  padding: 10px 15px;
}
.p-big-input-1 {
  padding: 10px 15px;
}
.s {
  cursor: pointer;
}
.t-blue {
  color: #4051b4 !important;
}
.t-blue:hover {
  color: #4051b4 !important;
}
.t-black {
  color: #333 !important;
  background: none !important;
  border-color: none !important;
}
a:focus,
a:hover {
  color: #23527c;
  text-decoration: underline;
}
a:active,
a:hover {
  outline: 0;
}
.p-big-input {
  padding: 10px 15px;
}

.t-black {
  color: #333 !important;
}
.form-big-input {
  width: 276px;
  max-width: 100%;
  padding: 8px 15px;
  outline: none;
  border: 1px solid #e0e4e6;
  -webkit-box-shadow: 0 0 1px rgba(95, 108, 114, 0.08),
    0 0 6px rgba(95, 108, 114, 0.05);
  box-shadow: 0 0 1px rgba(95, 108, 114, 0.08), 0 0 6px rgba(95, 108, 114, 0.05);
  border-radius: 4px;
}
.img-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.bot-indicator.indicator-inactive {
  background-color: #fd6b80;
}
.red {
  border: 2px solid #fd6b80;
}
.no {
  display: none;
}
.bot-indicator {
  position: absolute;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  top: 20px;
  left: 20px;
  background-color: #2bbb5f;
}
.btn-form-card {
  border: 1px solid #fff;
}
.botname-inline {
  display: block;
  border: none;
  width: 290px;
}
.text-center {
  text-align: center;
}
.bot {
  margin-bottom: 20px;
  height: 200px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 20;
  width: 20%;
  height: 20%;
  background-color: gray;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: 40px auto 0;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.text-right {
  text-align: right;
}

.form-label {
  display: block;
  margin-bottom: 1em;
}

.form-label > .form-control {
  margin-top: 0.5em;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.5em 1em;
  line-height: 1.5;
  border: 1px solid #ddd;
}

.modal-enter,
.modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.css {
  color: black;
}
</style>