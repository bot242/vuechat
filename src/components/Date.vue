<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Date</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
      <ckeditor @input="oncheange(datedata)" :editor="dateeditor" v-model="datedata" :config="editorConfig"></ckeditor>

      <div class="form-group"></div>
      <div class="form-check">
        <span>
          Back button
          <toggle-button
            @change="onChangeEventHandler"
            style="margin-left: 10px;margin-right: 5px"
          />
        </span>
        <span>
          Skip button
          <toggle-button @change="onChangeEventHandler" style="margin-left: 10px" />
        </span>
      </div>
      <div class="form-check">
        <span>
          show past date
          <toggle-button
            @change="onChangeEventHandler"
            style="margin-left: 10px;margin-right: 5px"
          />
        </span>
        <span>
          Show future date
          <toggle-button @change="onChangeEventHandler" style="margin-left: 10px" />
        </span>
      </div>
    </form>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      dateeditor: ClassicEditor,
      datedata: "",
      datas:"",
      editorConfig: {}
    };
  },
  mounted(){
this.init()
  },
  methods: {
init:function(){
  var user = JSON.parse(localStorage.getItem("id"));
      let bid = localStorage.getItem("bot_id");
  this.axios 
        .get(
          "http://192.168.100.144:8001/api/scriptdetails" +
            "/" +
            user +
            "/" +
            bid +
            "/"
        )
        .then(response => {
          this.datas = response.data;
          this.datedata=response.data[0].placeholder
          console.log("get data  ", this.datedata);
        });
},
onChangeEventHandler() {
      alert("hi");
    },
 oncheange(event){
           this.data=event;
           console.log("==>",this.data)
          this.$emit('changedata',this.data)
           
     },    

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
