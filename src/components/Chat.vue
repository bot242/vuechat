<template>
  <div class="container">
    <h1 class="headline">Vue.js Chat Box</h1>
    <main>
      <div v-if="showChat" class="chat-box">
        <div class="close-icon">
          <span @click="clearAllMessages"><i class="fa fa-refresh" aria-hidden="true"></i></span>
          <span  @click="showChat=false" style="margin-left:15px">✖</span>
        </div>
        <div ref="chatArea" class="chat-area">
          <p v-for="message in messages" :key="message.id"
            class="message" 
            :class="{ 'message-in': message.author !== 'bob', 'message-out': message.author === 'bob' }">
            {{ message.inputtypeid }}
            {{message.body}}
          </p>
        </div>  
        <div class="texting">
          <form @submit.prevent="sendMessage('out')" id="person2-form">            
            <input v-model="bobMessage" id="person2-input" style="width:260px" type="text" placeholder="Type your message">
            <button type="submit">Send</button>
          </form>
        </div>                         
      </div>       
      <button class="click-me" @click="loadMsg();showChat=true">ClickMe</button>             
    </main>
  </div>
</template>
<script>
import axios from "axios";
export default {  
  data(){
    return {
      bobMessage: '',
      youMessage: '',
      showChat: false,      
      messages: []
    }
  },  
  methods: {
    loadMsg() {
      let bot_id = localStorage.getItem('bot_id')      
      let user_id = localStorage.getItem('id')      
      axios
        .get("http://192.168.100.144:8001/api/scriptdetails" + "/" + user_id + "/" + bot_id + "/")
        .then(response =>        
          console.log("bot-name", (this.messages = response.data))
        );        
      this.messages.push({body: this.youMessage, author: 'you'})
      this.youMessage = ''
    },
    sendMessage(direction) {        
      if (!this.bobMessage) {
        return
      }
      if (direction === 'out') {        
        this.messages.push({body: this.bobMessage, author: 'bob'})
        console.log("Message",this.messages)
        this.bobMessage = ''
      }                
      Vue.nextTick(() => {
        let messageDisplay = this.$refs.chatArea
        messageDisplay.scrollTop = messageDisplay.scrollHeight
      })
    },
    clearAllMessages() {
      this.messages = []
    }
  }   
}
</script>
<style scoped>
.container {
  font-family: sans-serif;
  font-weight: 100;
  background: #7b4397;
  background: -webkit-linear-gradient(to right, #dc2430, #7b4397);
  background: linear-gradient(to right, #dc2430, #7b4397);
  height: 685px;
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
  max-width: 350px; 
  display: block;  
  
}
.chat-box {
  float: left;
  margin-left:450px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  border-style: solid;
  border-width: 3px;
  border-radius: 5px;
}
.click-me {
  margin-left:10px;
  margin-top: 420px;
  float: right;
  margin-right:240px;
}
.close-icon {
  display: block;
  text-align: center;
  background: white;
  padding: 10px;
  padding-left: 270px;  
  max-width: 362px;
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
  padding: .5em;
  /* font-size: .9em; */
  /* font-family: sans-serif;
  font-weight: 100; */
}
.message-out {
  background: #407FFF;
  color: white;
  margin-left: 50%;
}
.message-in {
  background: #F1F0F0;
  color: black;
}
.chat-inputs {
  display: flex;
  justify-content: space-between;
  float: right;
  margin-top: 50px;
}
#person1-input {
  padding: .5em;
}
#person2-input {
  padding: .5em;    
}
</style>