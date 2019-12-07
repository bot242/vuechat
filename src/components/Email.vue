<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Email</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
      <div class="form-group" style="top:10px">

              <ckeditor  @input="oncheange(emaildata)" :editor="emaileditor" v-model="emaildata" :config="editorConfig"></ckeditor>
            </div>
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
      <div class="form-group">
        <b>
          Error message when visitor enter
          invalid answer
        </b>
      </div>
      <div class="form-group">
        <div>
          <input type="text" class="form-control" placeholder="Please enter valid email address" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
      emaileditor: ClassicEditor,
      emaildata: "",
      editorConfig: {},
      datas:''
    };
  },  mounted(){
this.email()
  },
  methods: {
    email:function(){
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
          this.emaildata=response.data[0].placeholder
          console.log("get data  ", this.emaildata);
        });
}, 
    oncheange(event){
           this.data=event;
           console.log("==>",this.data)
          this.$emit('changedata',this.data)

     }
  }
};
</script>

<style scoped>
</style>
