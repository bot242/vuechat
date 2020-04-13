<template>
  <div class="main">
    <div class="form-builder">
      <b-row>
        <b-col cols="12" md="4" sm="9">
          <div class="form-builder-toolbar pull-left not-selectable form-builder-toolbar-sticky">
            <h4></h4>
            <b-row>
              <b-col cols="6" md="6" sm="6">
                <ul>
                  <li class="card-shadow question-list" @click="addRow"  id="1">
                    <i class="fas fa-quote-left"></i>
                    Message
                  </li>
                  <li class="card-shadow question-list" @click="addText"  id="2">
                    <i class="fas fa-comment-alt"></i>
                    Text Question
                  </li>

                  <li class="card-shadow question-list" @click="addDate" id="3">
                    <i class="far fa-calendar-alt"></i>
                    Date
                  </li>

                  <li class="card-shadow question-list" @click="addSelect" id="4">
                    <i class="fas fa-check-circle"></i>
                    Multi Select
                  </li>

                  <li class="card-shadow question-list" @click="addNumber" id="5">
                    <i class="fas fa-hashtag"></i>
                    Number
                  </li>

                  <li class="card-shadow question-list" @click="addRating" id="6">
                    <i class="fas fa-star-half-alt"></i>
                    Rating
                  </li>

                  <li class="card-shadow question-list" @click="addLink" id="7">
                    <i class="fas fa-link"></i>
                    Links
                  </li>
                </ul>
              </b-col>

              <b-col cols="6" md="6" sm="6">
                <ul>
                  <li class="card-shadow question-list" @click="addOption" id="8">
                    <i class="far fa-stop-circle"></i>
                    Multi Choice
                  </li>

                  <li class="card-shadow question-list" @click="addEmail" id="9">
                    <i class="fas fa-envelope-square"></i>
                    Email
                  </li>

                  <li class="card-shadow question-list" @click="addBooking" id="10">
                    <i class="far fa-clock"></i>
                    Appointment
                  </li>

                  <li class="card-shadow question-list" @click="addList" id="11">
                    <i class="far fa-list-alt"></i>
                    List
                  </li>

                  <li class="card-shadow question-list" @click="addRange" id="12">
                    <i class="fas fa-sliders-h"></i>
                    Range
                  </li>

                  <li class="card-shadow question-list" @click="addScale" id="13">
                    <i class="fas fa-tachometer-alt"></i>
                    Opinion Scale
                  </li>

                  <li class="card-shadow question-list" @click="addFile" id="14">
                    <i class="fas fa-upload"></i>
                    File Upload
                  </li>
                </ul>
              </b-col>
            </b-row>

            <div>
              <p style="font-size: 15px; margin-top: 10px;">
                <a href="https://help.collect.chat/container/show/script-types" target="_blank">
                  Learn
                  about
                  script types
                </a>
              </p>
              <a href="/5d6605aac153a1688892bbd2/builder/preview">
                <button class="btn btn-blue form-big-input w-200">Preview Bot</button>
              </a>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="8" sm="9">
          <div class="form-builder-preview pull-right card-shadow">
            <div class="edit-form"></div>
            <div class="ui-sortable vertical-container">
              <draggable>
                <div v-for="(get,i) in all" :key="i">
                <div class="item" >
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                           <i v-if="get.showmodal == 'showModal: true'||get.showmodal=='showText: true'||
                              get.showmodal=='showDate: true'|| get.showmodal=='showList: true'||
                              get.showmodal=='showLink: true' || get.showmodal == 'showSelect: true' || get.showmodal == 'showNumber: true'
                              || get.showmodal == 'showRating: true' || get.showmodal == 'showOption: true' || get.showmodal == 'showEmail: true'
                              || get.showmodal == 'showBooking: true'|| get.showmodal == 'showRange: true' || get.showmodal == 'showScale: true'
                              || get.showmodal == 'showFile: true'"
                               class="fas fa-pen" ref="{{key}}"
                              @click="open(get,i)"></i>
                          </div>
                          <div class="btn is-isolated btn-school hint--bottom" aria-label="Delete">
                            <i class="fas fa-trash-alt" @click="deleteFile(index14)"></i>
                          </div>
                        </div>
                      </div>
                       <i :class="[faClass(get.fieldicon)]" style="width:auto"></i>
                      <label class="static">{{get.placeholder}}</label>
                    </div>
                  </div>
                </div>
                </div>
              </draggable>
               <b-modal id="modal-1" >
    <div class="d-block">Edit box</div>
  {{msg}}
    <Message @changedata="msg =$event" v-if="currentdata.showmodal == 'showModal: true'" />

    <TextEditor @changedata="msg =$event" v-if="currentdata.showmodal == 'showText: true'" />

    <Date @changedata="msg =$event" v-if="currentdata.showmodal == 'showDate: true'" />

    <Link @changedata="msg =$event" v-if="currentdata.showmodal == 'showLink: true'" />

    <Lining @changedata="msg =$event" v-if="currentdata.showmodal == 'showList: true'" />

    <Select @changedata="msg =$event" v-if="currentdata.showmodal == 'showSelect: true'"/>

    <Number @changedata="msg =$event" v-if="currentdata.showmodal == 'showNumber: true'"/>

    <Ratinng @changedata="msg =$event" v-if="currentdata.showmodal == 'showRating: true'"/>

    <Moption @changedata="msg =$event" v-if="currentdata.showmodal == 'showOption: true'"/>

    <Email @changedata="msg =$event" v-if="currentdata.showmodal == 'showEmail: true'"/>

    <Booking @changedata="msg =$event" v-if="currentdata.showmodal == 'showBooking: true'"/>

    <Ranging @changedata="msg =$event" v-if="currentdata.showmodal == 'showRange: true'"/>

    <Scale @changedata="msg =$event" v-if="currentdata.showmodal == 'showScale: true'"/>

    <Uploade @changedata="msg =$event" v-if="currentdata.showmodal == 'showFile: true'"/>

    </b-modal>
            </div>
            <div id="END"></div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Message from "./Message";
import TextEditor from "./TextEditor";
import Date from "./Date";
import Select from "./Select";
import Number from "./Number";
import Ratinng from "./Ratinng";
import Link from "./Link";
import Moption from "./Moption";
import Email from "./Email";
import Booking from "./Booking";
import Lining from "./Lining";
import Ranging from "./Ranging";
import Scale from "./Scale";
import Uploade from "./Uploade";

export default {
  name: "Scrip",
  components: {
    draggable,Message,TextEditor,Date,
    Select,Number,Ratinng,Link,Moption,
    Email,Booking,Lining,Ranging,Scale,
    Uploade
  },
  data() {
    return {
      showModal: false,
      value:'',
      botcount:[],
      all:'',
      loading: false,
      currentdata:{},
      msg:''
    };
  },

 mounted(){
  let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      console.log("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
  this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data
      console.log( response.data)
      }

      );
},
  methods: {
       log: function(evt) {
      window.console.log(evt);
    },
    faClass(icon) {
            return `fas fa-${icon}`;
          },

          open(data,i){
            this.msg = ''
            this.showModal = true

            console.log(data,i)
            this.currentdata = data

              this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')

          },
    addRow() {
       let a = this.count ++
    console.log('id',a)
    let field="1"

     let name ="Message"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/1/'
     this.axios.get(ico).then(res=>{
       console.log('ico',res.data)
     })
      a=[]
      let holder = "Message"
      pos = "1"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {

        console.log("post-result3", data.data);
 this.axios.get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
       .then(response =>{
         this.all = response.data
         console.log(this.all)
         }

      );
        })
      .catch(function(e) {

        console.log("FAILURE!!");
      });
    },
    addText() {
       let a = this.count ++
    console.log('id',a)
    let field="2"

     let name ="TextQuestion"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/2/'
        this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Text"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data) => {
        console.log("post-result3", data.data);
 this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.loading = false;this.all = response.data});
        })
      .catch((e)=> {
        console.log("FAILURE!!");
      });
    },
    addDate() {
      let a = this.count ++
    console.log('id',a)
    let field="5"

     let name ="Date"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/5/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Date"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data) =>{
        console.log("post-result3", data.data);
         this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.loading = false;this.all = response.data}
      );
        })
      .catch(() => {
        console.log("FAILURE!!");
      });
    },
    addSelect() {
      let a = this.count ++
    console.log('id',a)
    let field="7"

     let name ="MultiSelect"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/7/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Select"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },
    addNumber() {
      let a = this.count ++
    console.log('id',a)
    let field="9"

     let name ="Number"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/9/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Number"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },
    addRating() {
      let a = this.count ++
    console.log('id',a)
    let field="11"

     let name ="Rating"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/11/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Rating"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },
    addLink() {
      let a = this.count ++
    console.log('id',a)
    let field="13"

     let name ="Links"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/13/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Link"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
 this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data
     let s=this.all
      console.log('send',s)
      // if (name==s)
      let a=response.data[0].fieldicon;
      console.log('value',a)
      }
      );
        })
      .catch(function() {
        console.log("FAILURE!!");
      });
    },
    addOption() {
      let a = this.count ++
    console.log('id',a)
    let field="3"

     let name ="MultiChoice"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/3/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Option"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },
    addEmail() {
      let a = this.count ++
    console.log('id',a)
    let field="4"

     let name ="Email"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/4/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Email"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },
    addBooking() {
      let a = this.count ++
    console.log('id',a)
    let field="6"

     let name ="Appointment"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/6/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Booking"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },
    addList() {
      let a = this.count ++
    console.log('id',a)
    let field="8"

     let name ="List"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/8/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "List"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },
    addRange() {
       let a = this.count ++
    console.log('id',a)
    let field="10"

     let name ="Range"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/10/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Range"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },

    addScale() {
      let a = this.count ++
    console.log('id',a)
    let field="12"

     let name ="OpinionScale"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/12/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Scale"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },

    addFile() {
      let a = this.count ++
    console.log('id',a)
    let field="14"

     let name ="FileUpload"
     let ico='http://chatbotportal.herokuapp.com/api/messageicon/14/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "File"
      pos = "2"
      let ecos = 0
      let boot = "http://chatbotportal.herokuapp.com/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://chatbotportal.herokuapp.com/api/user/"+localStorage.getItem('id')+"/"
      let quest = "1"
      let pos = "1"

      let obj = {
          inputtypeid:name ,
          placeholder: holder,
          position:pos,
          eoc: ecos,
          is_subquestion: quest,
          subquestion: a,
          position:pos,
          icon:ico,
          subquestion: a,
        	bot:boot,
          user:usr,
      };
      console.log("obj",obj)
      let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
      this.axios
      .post("http://chatbotportal.herokuapp.com/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://chatbotportal.herokuapp.com/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });
    },


    addSel() {
      this.sel.push({});
    },
    addMcho() {
      this.mcho.push({});
    },
    deleteMcho(mcho) {
      this.mcho.splice(mcho, 1);
    },
    deleteSel(link) {
      this.sel.splice(link, 1);
    },
    deleteRow: function(input, index) {
      if (this.inputs[index] === input) {
        console.log(this.inputs.splice(index, 1));
      } else {
        let found = this.inputs.indexOf(input);
        this.inputs.splice(found, 1);
      }
    },
    deleteText(index2) {
      this.texts.splice(index2, 1);
    },
    deleteDate(index3) {
      this.dates.splice(index3, 1);
    },
    deleteSelect(index4) {
      this.selects.splice(index4, 1);
    },
    deleteNumber(index5) {
      this.number.splice(index5, 1);
    },
    deleteRating(index6) {
      this.rating.splice(index6, 1);
    },
    deleteLink(index7) {
      this.links.splice(index7, 1);
    },
    deleteOption(index8) {
      this.options.splice(index8, 1);
    },
    deleteEmail(index9) {
      this.emails.splice(index9, 1);
    },
    deleteBooking(index10) {
      this.booking.splice(index10, 1);
    },
    deleteList(index11) {
      this.list.splice(index11, 1);
    },
    deleteRange(index12) {
      this.range.splice(index12, 1);
    },
    deleteScale(index13) {
      this.scale.splice(index13, 1);
    },
    deleteFile(index14) {
      this.file.splice(index14, 1);
    }
  }
};
</script>
<style scoped>
.form-builder {
  background-color: #f4f4f4;
}
.form-builder .form-builder-toolbar {
  width: 100%;
  text-align: center;
  transition: top 0.5s ease;
  float: left;
}
.form-builder .form-builder-toolbar h4 {
  margin-top: 0;
  text-align: center;
}
.form-builder .form-builder-toolbar ul {
  padding: 0;
  text-align: left;
}
.form-builder .form-builder-toolbar ul li {
  cursor: pointer;
  float: left;
  width: 100%;
  margin: 1%;
  list-style: none;
  padding: 10px 5px;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 5%;
}

.form-builder .card-shadow:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  background-color: rgb(212, 211, 212);
}
.form-builder .form-builder-preview {
  position: relative;
  width: 120%;
  border-radius: 3px;
  background: #fff;
  padding: 10px;
  min-height: 650px;
  float: right;
  margin-top: 11px;
  overflow: auto;
  margin-bottom: 10px;
}

.form-builder .card-shadow {
  transition: box-shadow 0.3s;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: rgb(212, 211, 212);
  float: left;
}
.item-question {
  clear: both;
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  border-radius: 1.3em;
  font-size: 15px;
  margin-top: 5px;
}
.showme {
  display: none;
  float: right;
}
.showhim:hover .showme {
  display: block;
}
.showhim:hover {
  background: white;
}
.row-cols {
  margin-top: 30px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  float: left;
  left: 50%;

  width: 50%;
  height: 100%;
  background-color: #f4f4f4;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.done {
  float: right;
}
.modal-dialog {
  width: 100%;
  height: 100%;
  max-width: none;
}
.modal-content {
  height: 100%;
}
.modal-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: none;
  border-top-left-radius: none;
  border-top-right-radius: none;
}
.btn-blue {
  background-color: #0647a5;
  border-color: #0647a5;
  color: #fff;
}
.btn-blue:hover {
  color: #fff;
}
.main {
  width: 85%;
  padding-left: 2%;
}
.change {
  padding-left: 0px !important;
}
.delete {
  padding-right: unset;
}
</style>
