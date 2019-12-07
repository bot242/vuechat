<template>
  <div class="container-fluid bg">
    <h1 class="headline">Vue.js Chat Box</h1>
    <main>
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
              <span v-if="message.incomming && message.res.placeholder">
                {{ message.res.placeholder}}</span>
              <span v-if="!message.incomming && message.msg">{{message.msg}}</span>
            </p>
            <div class="col-md-12"  v-if="currentobj.showmodal == 'showOption: true'">
          <label for="primary" class="btn btn-primary btn-sm mr-1 mt-2"> 
          <input type="checkbox"  id="primary" class="badgebox">
             <span class="badge">&check;</span>Primary</label>
             <label for="primary"  class="btn btn-primary btn-sm mr-1 mt-2"> 
          <input type="checkbox"   id="primary" class="badgebox">
             <span class="badge">&check;</span>Primary</label>
             <label for="primary" class="btn btn-primary btn-sm mr-1 mt-2"> 
          <input type="checkbox"   id="primary" class="badgebox">
             <span class="badge">&check;</span>Primary</label>
             <label for="primary" class="btn btn-primary btn-sm mr-1 mt-2"> 
          <input type="checkbox"   id="primary" class="badgebox">
             <span class="badge">&check;</span>Primary</label>
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
            <div v-if="currentobj.showmodal == 'showLink: true'" id="person2-form" class="row px-1">
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
              @submit.prevent="bobMessage='work';sendMessage('out')"
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
              ></b-form-select> -->
               
	    
      
              <button class="btn btn-sm btn-success mt" style="height:30px"  type="submit">Send</button>
            </form>
            <form
              v-if="currentobj.showmodal == 'showSelect: true'"
              @submit.prevent="sendMessage('out')"
              id="person2-form"
              class="row px-1"
            >
              <b-form-select
                v-model="bobMessage"
                :options="optionsss"
                id="person2-input"
                class="col-md-7 mr-2"
              ></b-form-select>
              <button class="btn btn-sm btn-success mt" style="height:30px" type="submit">Send</button>
            </form>
            <div class="row" v-if="currentobj.showmodal == 'showList: true'">
              <div class="col-md-7">
               <b-list-group>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
                <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
              </b-list-group>
              </div>
                <div class="col-md-4">
                   <button class="btn btn-sm btn-success mt" style="height:30px" 
                     @click="bobMessage='continue';sendMessage('out')">continue</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <button class="click-me" @click="loadMsg();showChat=true">ClickMe</button>    -->

      <div class="img-avtor" v-if="!showChat" @click="loadMsg()">
        <img src="../assets/bot.png" class="bot-img" alt="bot here" />
      </div>
    </main>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      bobMessage: "",
      youMessage: "",
      showChat: false,
      messages: [],
      chatloading: true,
      chatcurrentpostion: 0,
      currentobj: "",
      optionsss: [
        { value: "a", text: "This is First option" },
        { value: "b", text: "Default Selected Option" },
        { value: "c", text: "This is another option" },
        { value: "d", text: "This one is disabled"},
        { value: "e", text: "This is option e" },
        { value: "f", text: "This is option f" },
        { value: "g", text: "This is option g" }
      ]
    };
  },
  methods: {
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
          console.log("==>", incomming);
         
          let obj = {
            incomming: true,
            res: incomming[this.chatcurrentpostion]
          };
          if(incomming[this.chatcurrentpostion]){
       this.currentobj = incomming[this.chatcurrentpostion];
          }else{
            return ;
          }
          if(this.currentobj.showmodal == 'showSelect: true' ){
            this.axios.get('http://192.168.100.144:8001/api/subquestionadd/'+this.currentobj.id+'/')
          .then(res =>{
            console.log(res.data)
            let data = res.data
            this.optionsss = []
            data.forEach(item => {
                     let obj = {value:item.answer,text:item.question}
                     this.optionsss.push(obj)
            });
              console.log(this.optionsss)

          })
          }
          console.log("current obj",this.currentobj)
           console.log("array postion",incomming.length-1,'<',this.chatcurrentpostion   )
         if (incomming.length-1 <  this.chatcurrentpostion) {
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
      console.log(direction,'==>', this.bobMessage);
      let obj = { incomming: false, msg: this.bobMessage };
      this.currentobj.answer = this.bobMessage
      this.axios.patch('http://192.168.100.144:8001/api/mainanswer/'+this.currentobj.id+'/',this.currentobj)
      .then(res =>{
       console.log('answer putted success 1',res.data )
      })
      this.messages.push(obj);
      console.log("Message", this.messages);
        this.loadMsg();
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
  /* font-size: .9em; */
  /* font-family: sans-serif;
  font-weight: 100; */
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
</style>