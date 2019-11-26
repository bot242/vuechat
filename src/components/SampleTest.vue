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


        <div
          class="card-shadow question-list s"
          v-for="element in list1"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      <!-- </draggable> -->
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <!-- <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        @change="log"
      > -->
     <div v-for=" get in all" :key="get.id">
        <div class="list-group-item" >
          <div class="item">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          
                          <div
                            class="btn is-isolated btn-school hint--bottom change"
                            aria-label="Edit"
                          >
                                                      <i :class="[faClass(get.fieldicon)]" style="width:auto"></i>

                             {{ get.field }}
                              
                            
                            <i class="fas fa-pen"  @click="$emit(showModal=true)"></i>    
                                                  
                          
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
        <div v-if="showModal">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showModal=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                    </div>
                  </div>
                </div>
        

      <!-- </draggable> -->
    </div>


  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable
  },
  data() {
    return {
      count:0,

      list2: [],
      showModal: false,
      value:'',
      botcount:[],
      all:'',
      loading: false

    
     
      
    };
  },
mounted(){
  let id=localStorage.getItem('id')
      let botid=localStorage.getItem("bot_id")
  this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")        
      .then(response =>{this.all = response.data}                
      );
},
  methods: {    
    log: function(evt) {
      window.console.log(evt);
    },
  faClass(icon) {
            return `fas fa-${icon}`;
          },
  simple1() {

    let a = this.count ++
    console.log('id',a)
    let field="1"
     
     let name ="Message"
     let ico='http://192.168.100.144:8001/api/messageicon/1/'
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
      this.axios
      .post("http://192.168.100.144:8001/api/script/", obj, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json"
        },
      })
      .then(function(data) {
        console.log("post-result3", data.data);
        })
      .catch(function() {
        console.log("FAILURE!!");
      });
      this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")        
       .then(response =>{ this.loading = false;this.all = response.data}
       
      );

  },
  simple2() {
   let a = this.count ++
    console.log('id',a)
    let field="2"
     
     let name ="TextQuestion"
     let ico='http://192.168.100.144:8001/api/messageicon/2/'
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
      .then(function(data) {
        console.log("post-result3", data.data);
        })
      .catch(function() {
        console.log("FAILURE!!");
      });   
      this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")        
      .then(response =>{this.loading = false;this.all = response.data}
      );
      
  },
  simple3() {
   let a = this.count ++
    console.log('id',a)
    let field="5"
     
     let name ="Date"
     let ico='http://192.168.100.144:8001/api/messageicon/5/'
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
      .then(function(data) {
        console.log("post-result3", data.data);
        })
      .catch(function() {
        console.log("FAILURE!!");
      });
      this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")        
      .then(response =>{this.loading = false;this.all = response.data}               
      );
  },
  simple4() {
 let a = this.count ++
    console.log('id',a)
    let field="8"
     
     let name ="List"
     let ico='http://192.168.100.144:8001/api/messageicon/8/'
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
      .then(function(data) {
        console.log("post-result3", data.data);
        })
      .catch(function() {
        console.log("FAILURE!!");
      });
      this.axios
      .get("http://192.168.100.144:8001/api/scriptdetails/"+id+"/"+botid+"/")        
      .then(response =>{this.all = response.data 
      
      let a=response.data[0].fieldicon;
      console.log('value2',a)}              
      );
  },
  simple5() {
 let a = this.count ++
    console.log('id',a)
    let field="13"
     
     let name ="Links"
     let ico='http://192.168.100.144:8001/api/messageicon/13/'
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
      .then(function(data) {
        console.log("post-result3", data.data);
        })
      .catch(function() {
        console.log("FAILURE!!");
      });
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

</style>
