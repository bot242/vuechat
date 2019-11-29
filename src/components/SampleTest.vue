<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <!-- <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
      > -->
    <button @click="simple1" id="1"> Message</button>
    <button @click="simple2" id="2"> Text</button>
    <button @click="simple3" id="3"> Date</button>
    <button @click="simple4" id="4"> List</button>
    <button @click="simple5" id="5"> Link</button>


        <!-- <div
          class="card-shadow question-list s"
          v-for="element in list1"
          :key="element.name"
        >
          {{ element.name }}
        </div> -->
      <!-- </draggable> -->
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
     <div v-for="(get,i) in all" :key="i">
        <div class="list-group-item" >
          <div class="item">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">

                          <div
                            class="btn is-isolated btn-school hint--bottom change"
                            aria-label="Edit"
                          >


                             <h4>
                               <i :class="[faClass(get.fieldicon)]" style="width:auto"></i>
                             {{ get.field }}
                              </h4>
                             <p> {{get.placeholder}}
                              <i v-if="get.showmodal == 'showModal: true'||get.showmodal=='showText: true'||
                              get.showmodal=='showDate: true'|| get.showmodal=='showList: true'||
                              get.showmodal=='showLink: true'"
                               class="fas fa-pen" ref="{{key}}"
                              @click="open(get,i)"></i>
                             </p>




                          </div>
                          <div
                            class="btn is-isolated btn-school arrow-btn hint--bottom change"
                            aria-label="Drag to Move"
                          >

                          </div>
                          <div
                            class="btn is-isolated btn-school hint--bottom change delete"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
        </div>
     </div>

     <b-modal id="modal-1" >
    <div class="d-block">Edit box</div>
  {{msg}}
    <Message @changedata="msg =$event" v-if="currentdata.showmodal == 'showModal: true'" />

    <TextEditor @changedata="msg =$event" v-if="currentdata.showmodal == 'showText: true'" />

    <Date @changedata="msg =$event" v-if="currentdata.showmodal == 'showDate: true'" />

    <Link @changedata="msg =$event" v-if="currentdata.showmodal == 'showLink: true'" />

    <Lining @changedata="msg =$event" v-if="currentdata.showmodal == 'showList: true'" />

    </b-modal>


    </div>

  </div>

</template>

<script>
import Message from "./Message";
import draggable from "vuedraggable";
import TextEditor from "./TextEditor";
import Date from "./Date";
import Link from "./Link";
import Lining from "./Lining";

export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable,
    Message,
    TextEditor,
    Link,
    Date,
  },
  data() {
    return {
      count:0,

     // list2: [],
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
      console.log("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")
  this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")
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
  simple1() {

    let a = this.count ++
    console.log('id',a)
    let field="1"

     let name ="Message"
     let ico='http://192.168.100.144:8001/api/messageicon/1/'
     this.axios.get(ico).then(res=>{
       console.log('ico',res.data)
     })
      a=[]
      let holder = "Select"
      pos = "1"
      let ecos = 0
      let boot = "http://192.168.100.144:8001/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://192.168.100.144:8001/api/user/"+localStorage.getItem('id')+"/"
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
      this.axios .post("http://192.168.100.144:8001/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {

        console.log("post-result3", data.data);
 this.axios.get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")
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
  simple2() {
   let a = this.count ++
    console.log('id',a)
    let field="2"

     let name ="TextQuestion"
     let ico='http://192.168.100.144:8001/api/messageicon/2/'
        this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Select"
      pos = "2"
      let ecos = 0
      let boot = "http://192.168.100.144:8001/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://192.168.100.144:8001/api/user/"+localStorage.getItem('id')+"/"
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
      .post("http://192.168.100.144:8001/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data) => {
        console.log("post-result3", data.data);
 this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.loading = false;this.all = response.data});
        })
      .catch((e)=> {
        console.log("FAILURE!!");
      });


  },
  simple3() {
   let a = this.count ++
    console.log('id',a)
    let field="5"

     let name ="Date"
     let ico='http://192.168.100.144:8001/api/messageicon/5/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Select"
      pos = "2"
      let ecos = 0
      let boot = "http://192.168.100.144:8001/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://192.168.100.144:8001/api/user/"+localStorage.getItem('id')+"/"
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
      .post("http://192.168.100.144:8001/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data) =>{
        console.log("post-result3", data.data);
         this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.loading = false;this.all = response.data}
      );
        })
      .catch(() => {
        console.log("FAILURE!!");
      });

  },
  simple4() {
 let a = this.count ++
    console.log('id',a)
    let field="8"

     let name ="List"
     let ico='http://192.168.100.144:8001/api/messageicon/8/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Select"
      pos = "2"
      let ecos = 0
      let boot = "http://192.168.100.144:8001/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://192.168.100.144:8001/api/user/"+localStorage.getItem('id')+"/"
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
      .post("http://192.168.100.144:8001/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")
      .then(response =>{this.all = response.data

      let a=response.data[0].fieldicon;
      console.log('value2',a)}
      );
        })
      .catch(() =>{
        console.log("FAILURE!!");
      });

  },
  simple5() {
 let a = this.count ++
    console.log('id',a)
    let field="13"

     let name ="Links"
     let ico='http://192.168.100.144:8001/api/messageicon/13/'
     this.axios.get(ico).then(res=>{
       console.log(res.data)
     })
      a=[]
      let holder = "Select"
      pos = "2"
      let ecos = 0
      let boot = "http://192.168.100.144:8001/api/chatbots/"+localStorage.getItem('bot_id')+"/"
      let usr = "http://192.168.100.144:8001/api/user/"+localStorage.getItem('id')+"/"
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
      .post("http://192.168.100.144:8001/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then((data)=> {
        console.log("post-result3", data.data);
 this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")
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
   }
};
</script>
<style scoped>
.s{
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
