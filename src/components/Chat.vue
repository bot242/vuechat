<template>
  <div class="container-fluid bg">
    <h1 class="headline">Vue.js Chat Box</h1>
    <main>
      <div v-for="bot in botcount" :key="bot.id">
           <div class="img-avtor">
          <div v-if="showChat" class="chat-box">
            <div class="close-icon bg-info text-white">
              <span class="float-left">Bot</span>
              <span @click="clearAllMessages" class="mr-1">
                <i class="fa fa-refresh" aria-hidden="true"></i>
              </span>
              <span @click="clearAllMessages" class="mr-2">✖</span>
            </div>
            <div ref="chatArea" class="chat-area">
              <p
                v-for="message in messages"
                :key="message.id"
                class="message"
                :class="{ 'message-in': message.incomming , 'message-out': !message.incomming }"
              >
                <span
                  v-if="message.incomming && message.res.placeholder"
                >{{ message.res.placeholder}}</span>
                
                <span v-if="!message.incomming && message.msg">{{message.msg}}</span>
              </p>

              <div class="row" v-if="currentobj.showmodal == 'showRating: true'">
                <div class="col-md-12">
                  <img
                    src="../assets/images/emoji/Capture5.png"
                    v-b-tooltip.hover
                    title="Terrible"
                    @click="bobMessage='Terrible';sendMessage('out')"
                    style="width:35px"
                    alt="emoji"
                  />
                  <img
                    src="../assets/images/emoji/Capture2.png"
                    v-b-tooltip.hover
                    title="Bad"
                    @click="bobMessage='Bad';sendMessage('out')"
                    style="width:35px"
                    alt="emoji"
                  />
                  <img
                    src="../assets/images/emoji/Capture4.png"
                    v-b-tooltip.hover
                    title="Okay"
                    @click="bobMessage='Okay';sendMessage('out')"
                    style="width:35px"
                    alt="emoji"
                  />
                  <img
                    src="../assets/images/emoji/Capture3.png"
                    v-b-tooltip.hover
                    title="Good"
                    @click="bobMessage='Good';sendMessage('out')"
                    style="width:35px"
                    alt="emoji"
                  />
                  <img
                    src="../assets/images/emoji/Capture1.png"
                    v-b-tooltip.hover
                    title="Awesome"
                    @click="bobMessage='Awesome';sendMessage('out')"
                    style="width:35px"
                    alt="emoji"
                  />
                </div>
              </div>
              <div class="row" v-if="currentobj.showmodal == 'showList: true'">
                <div class="col-md-7">
                  <b-list-group>
                    <b-list-group-item
                      v-for="datas in optionsss"
                      :key="datas.id"
                      @click="bobMessage=datas.ans ;sendMessage('out')"
                    >
                    {{ datas.text }}
                    
                    </b-list-group-item>
                  </b-list-group>
                </div>
                <!-- <div class="col-md-4">
                   <button class="btn btn-sm btn-success mt" style="height:30px" 
                     @click="bobMessage='continue';sendMessage('out')">continue</button>
                </div>-->
              </div>
              <div class="col-md-12" v-if="currentobj.showmodal == 'showOption: true'">
                <h5>Select Multiple Option</h5>
                <label
                  v-for="datas in optionsss"
                  :key="datas.id"
                  v-bind:for="datas.ans"
                  class="btn btn-primary btn-sm mr-1 mt-2"
                >
                  <input
                    @change="added(datas,$event)"
                    type="checkbox"
                    v-bind:id="datas.text"
                    class="badgebox"
                  />
                  <span class="badge">&check;</span>
                  {{ datas.text }}
                </label>
              </div>

              <div class="col-md-12" v-if="currentobj.showmodal == 'showSelect: true'">
                <h5>Select one Option</h5>
                <label
                  v-for="datas in optionsss"
                  :key="datas.id"
                  v-bind:for="datas.ans"
                  class="btn btn-primary btn-sm mr-1 mt-2"
                >
                  <input
                    @change="added(datas,$event)"
                    type="radio"
                    name="season"
                    :value="datas.text"
                    v-bind:id="datas.text"
                    class="badgebox"
                  />
                  <span class="badge">&check;</span>
                  {{datas.text}}
                </label>
              </div>

              <img src="../assets/chatload.gif" class="loadimg" v-if="chatloading" alt="loading" />
            </div>

            <div class="texting">
              <form
                v-if="currentobj.showmodal == 'showModal: true'"
                @submit.prevent="sendMessage('out')"
                id="person2-form"
                class="row px-1"
              >
                <input
                  v-model="bobMessage"
                  id="person2-input"
                  type="text"
                  class="form-control col-md-7 mr-2"
                  placeholder="Type your message"
                />
                <button class="btn btn-sm btn-success col-md-4" type="submit">Send</button>
              </form>
              <form
                v-if="currentobj.showmodal == 'showText: true'"
                @submit.prevent="sendMessage('out')"
                id="person2-form"
                class="row px-1"
              >
                <textarea
                  v-model="bobMessage"
                  id="person2-input"
                  class="form-control col-md-7 mr-2"
                  rows="2"
                  placeholder="Type your message"
                ></textarea>
                <button class="btn btn-sm btn-success mt-1" style="height:30px" type="submit">Send</button>
              </form>
              <form
                v-if="currentobj.showmodal == 'showDate: true'"
                @submit.prevent="sendMessage('out')"
                id="person2-form"
                class="row px-1"
              >
                <input
                  v-model="bobMessage"
                  id="person2-input"
                  type="date"
                  class="form-control col-md-7 mr-2"
                  placeholder="Type your message"
                />
                <button class="btn btn-sm btn-success col-md-4" type="submit">Send</button>
              </form>

              <form
                v-if="currentobj.showmodal == 'showNumber: true'"
                @submit.prevent="sendMessage('out')"
                id="person2-form"
                class="row px-1"
              >
                <input
                  v-model="bobMessage"
                  id="person2-input"
                  type="number"
                  class="form-control col-md-7 mr-2"
                  placeholder="999-9999-999"
                />
                <button class="btn btn-sm btn-success col-md-4" type="submit">Send</button>
              </form>
              <div
                v-if="currentobj.showmodal == 'showLink: true'"
                id="person2-form"
                class="row px-1"
              >
                <!-- <input v-model="bobMessage" id="person2-input"  type="text" class="form-control col-md-7 mr-2" placeholder="url link"> -->
                <div class="col-md-7">
                  <button
                    class="btn btn-primary"
                    @click="bobMessage='link1';sendMessage('out')"
                  >link 1</button>
                  <button
                    class="btn btn-primary mt-2"
                    @click="bobMessage='link2';sendMessage('out')"
                  >link 2</button>
                </div>
                <!-- <button class="btn btn-sm btn-success col-md-4" type="submit">Send</button> -->
              </div>
              <form
                v-if="currentobj.showmodal == 'showEmail: true'"
                @submit.prevent="sendMessage('out')"
                id="person2-form"
                class="row px-1"
              >
                <input
                  v-model="bobMessage"
                  id="person2-input"
                  type="email"
                  class="form-control col-md-7 mr-2"
                  placeholder="sandy@domain.com"
                />
                <button class="btn btn-sm btn-success col-md-4" type="submit">Send</button>
              </form>
              <form
                v-if="currentobj.showmodal == 'showFile: true'"
                @submit.prevent="sendMessage('out')"
                id="person2-form"
                class="row px-1"
              >
                <input id="person2-input" type="file" class="col-md-7 mr-2" />
                <button class="btn btn-sm btn-success col-md-4" type="submit">Send</button>
              </form>
              <form
                v-if="currentobj.showmodal == 'showOption: true'"
                @submit.prevent="sendMessage('out')"
                id="person2-form"
                class="row text-center px-1"
              >
                <!-- <b-form-select
                v-model="bobMessage"
                :options="optionsss"
                multiple
                :select-size="4"
                id="person2-input"
                class="col-md-7 mr-2"
                ></b-form-select>-->

                <button class="btn btn-sm btn-success mt" style="height:30px" type="submit">Send</button>
              </form>
              <form
                v-if="currentobj.showmodal == 'showSelect: true'"
                @submit.prevent="sendMessage('out')"
                id="person2-form"
                class="row text-center px-1"
              >
                <!-- <b-form-select
                v-model="bobMessage"
                :options="optionsss"
                multiple
                :select-size="4"
                id="person2-input"
                class="col-md-7 mr-2"
                ></b-form-select>-->

                <button class="btn btn-sm btn-success mt" style="height:30px" type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      
      </div>
      <!-- <button class="click-me" @click="loadMsg();showChat=true">ClickMe</button>    -->
      <div v-for="bot in botcount" :key="bot.id">
        <div v-for="full in all" :key="full.img">
          <div v-if="bot.position=='Center'">
            <div class="img-avtor" v-if="!showChat" @click="loadMsg()">
              <img :src="full.img" :style="padrig2" alt="bot here" />
            </div>
          </div>

          <div v-if="bot.position=='Left'">
            <div class="img-avtor" v-if="!showChat" @click="loadMsg()">
              <img :src="full.img" :style="padrig1" alt="bot here" />
            </div>
          </div>

          <!-- <div v-if="bot.position=='Right'">
            {{ bot.position }}
            <div class="right-pos" v-if="!showChat" @click="loadMsg()">
              <img :src="full.img" :style="padrig3" alt="bot here" />
            </div>
          </div> -->
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      padrig3: {
        left: "0",
        width: "5%",
        position: "fixed",
        bottom: "0"
      },
      padrig2: {
        position: "fixed",
        top: "300px",
        right: " 0",
        width: "5%",
        background: "#fff",
        "border-radius": "4px 0 0 4px"
      },
      padrig1: {
        right: "0",
        width: "5%",
        position: "fixed",
        bottom: "0"
      },
      checkvalues: "",
      bobMessage: "",
      youMessage: "",
      showChat: false,
      showRchat: false,
      messages: [],
      temp: [],
      chatloading: true,
      chatcurrentpostion: 0,
      currentobj: "",
      optionsss: [],
      all: [],
      botcount: "",
      optdesc:'',


    }; 
  },
  mounted() {
    this.getvalues();
  },
  methods: {
    added(data, event) {
      console.log(data, event.target.checked);
      if (event.target.checked) {
        this.optdesc += data.ans + ', ';
        this.bobMessage += data.value + " ";
        console.log("add---",this.bobMessage,data) 
      }
    },

    getvalues: function() {
      this.all = [];
      var user = JSON.parse(localStorage.getItem("id"));
      this.userid = user;
      let bid = localStorage.getItem("bot_id");
      this.axios
        .get(
          "http://192.168.100.144:8001/api/widgetdetails/" +
            this.userid +
            "/" +
            bid +
            "/"
        )
        .then(response => {
          this.botcount = response.data;

          console.log("get bot  ", this.botcount[0].position);
          this.msg = response.data[0].message;
          let c = response.data[0].avatar_name;
          console.log("img", c);
          this.gt = "http://192.168.100.144:8001/static/asset/avatar/" + c;
          let get = this.gt;
          console.log("kjlkh", this.gt);

          let main = { img: get };
          this.all.push(main);
        });
    },
      getClass(){
        return {
            'img-avtor': this.botcount[0].position == "Left",  
            'img-avtor': this.botcount[0].position == "center",  
            'right-pos': this.botcount[0].position == "Right",  
    }
      },
    loadMsg() {
     
      this.showChat = true;
      this.chatloading = true;
      let bot_id = localStorage.getItem("bot_id");
      let user_id = localStorage.getItem("id");
      axios
        .get(
          "http://192.168.100.144:8001/api/scriptdetails" +
            "/" +
            user_id +
            "/" +
            bot_id +
            "/"
        )
        .then(response => {
          this.chatloading = false;

          let incomming = response.data;
          console.log("==>in", incomming.length - 1 ,this.chatcurrentpostion);
          if(incomming.length - 1 < this.chatcurrentpostion ){
            console.log("ddddd")
            console.log("return");
            let datass=  this.currentobj
           this.currentobj.showmodal = 'false'
            let objss = {
              incomming: true,
              res:{placeholder:'end',showmodal:'false'}
            };
            this.messages.push(objss);
            return;
          }

          let obj = {
            incomming: true,
            res: incomming[this.chatcurrentpostion]
          };
          if (incomming[this.chatcurrentpostion]) {
            this.currentobj = incomming[this.chatcurrentpostion];
          } else {
            // console.log("return");
            // this.currentobj.showmodal = "false";
            // this.currentobj.placeholder = "end";
            // let objss = {
            //   incomming: true,
            //   res: this.currentobj
            // };
            // this.messages.push(objss);
            return;
          }
          console.log("current obj", this.currentobj.id);
          if (
            this.currentobj.showmodal == "showSelect: true" ||
            this.currentobj.showmodal == "showOption: true"
          ) {
            this.axios
              .get(
                "http://192.168.100.144:8001/api/subquestionadd/" +
                  this.currentobj.id +
                  "/"
              )
              .then(res => {
                console.log("options ==>", res.data);
                let data = res.data;
                this.optionsss = [];
                data.forEach(item => {
                  let obj = {
                    value: item.question,
                    text: item.question,
                    id: item.id,
                    ans: item.answer
                  };
                  this.optionsss.push(obj);
                });
                console.log(this.optionsss);
              });
          }

          console.log(
            "array postion",
            incomming.length - 1,
            "<",
            this.chatcurrentpostion
          );
          if (incomming.length - 1 < this.chatcurrentpostion) {
            //end
           
            return;
          } else {
            this.messages.push(obj);
            this.chatcurrentpostion++;
          }

          console.log("bot-name", this.messages);
        })
        .catch(e => {
          console.log(e);
          this.chatloading = false;
        });
    },
    
    sendMessage(direction) {
      console.log
      console.log(direction, "==>bobmsg", this.bobMessage);
      let obj = { incomming: false, msg: this.bobMessage };
      this.currentobj.answer = this.bobMessage;

      this.axios
        .patch(
          "http://192.168.100.144:8001/api/mainanswer/" +
            this.currentobj.id +
            "/",
          this.currentobj
        )
        .then(res => {
          console.log("answer putted success", res.data);
        });
      this.chatloading = true;
      setTimeout(() => {
        
        this.messages.push(obj);
        if(this.optdesc != ''){
let objs = { incomming: true, res: {placeholder:this.optdesc} };
         this.messages.push(objs);
          this.optdesc = ''
          this.bobMessage = ''
        }
         
        console.log("Message", this.messages);

        this.chatloading = false;
        this.loadMsg();
      }, 1000);

      this.bobMessage = "";
      // }
      Vue.nextTick(() => {
        let messageDisplay = this.$refs.chatArea;
        messageDisplay.scrollTop = messageDisplay.scrollHeight;
      });
    },
    clearAllMessages() {
      // console.log("clearmsg")
      this.chatcurrentpostion = 0;
      this.messages = [];
      this.showChat = false;
      this.showRchat = false;
    }
  }
};
Vue.filter("striphtml", function(value) {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
});
</script>
<style scoped>
.loadimg {
  width: 70px;
  position: absolute;
  left: 0px;
  bottom: 50px;
}
.img-avtor {
  position: absolute;
  right: 15px;
  bottom: 15px;
}

.right-pos {
  position: absolute;
  left: 15px;
  bottom: 15px;
}
.bot-img {
  vertical-align: middle;
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.bg {
  font-family: sans-serif;
  font-weight: 100;
  /* //background: #7b4397;
  background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
  background: linear-gradient(to right, #dc2430, #7b4397); */
  height: 100vh;
}
.bot-img {
  margin: 0 auto;
}

.bot-img:hover {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
.headline {
  text-align: center;
  font-weight: 200;
  /* font-size: 20px; */
  color: white;
  padding-top: 30px;
}
.chat-area {
  background: white;
  height: 50vh;
  padding: 1em;
  overflow: auto;
  width: 320px;
  display: block;
}
.chat-box {
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.click-me {
  margin-left: 10px;
  margin-top: 420px;
  float: right;
  margin-right: 240px;
}
.close-icon {
  display: block;
  text-align: right;
  background: white;
  padding: 10px;
  cursor: context-menu;
  font-size: 15px;
  border-radius: 5px 5px 0px 0px;
}
.texting {
  display: block;
  text-align: center;
  background: white;
  padding: 10px;
  max-width: 362px;
  border-radius: 0px 0px 5px 5px;
}
.message {
  width: 45%;
  border-radius: 10px;
  padding: 0.5em;
}
.message-out {
  background: #407fff;
  color: white;
  margin-left: 50%;
}
.message-in {
  z-index: 1;
  background: #f1f0f0;
  color: black;
}
.chat-inputs {
  display: flex;
  justify-content: space-between;
  float: right;
  margin-top: 50px;
}
#person1-input {
  padding: 0.5em;
}
#person2-input {
  padding: 0.5em;
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
</style>