<template>
 <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Multi Choice</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
     <div class="form-group" style="top:10px">

      <ckeditor  @input="oncheange(optiondata)" :editor="optioneditor" v-model="optiondata" :config="editorConfig"></ckeditor>
            </div>

      <!-- <div class="form-check">
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
      </div> -->
      <div class="form-group">
        <b>Options</b>
      </div>

     <div class="row">
       
        <div class="col-sm-6" style="margin-bottom:10px">
          <input type="text" v-model="option" class="form-control" placeholder="Question" />
        </div>
        <div class="col-sm-6" style="margin-bottom:10px">
          <input type="text" v-model="answer" class="form-control" placeholder="Answer  " />
        </div>
        <div class="col-sm-3"  style="margin-bottom:10px">
          <button class="btn btn-success" :disabled="option == '' || answer==''" @click="addMcho()">
            +</button>
        </div>
      </div>
      <div class="row mt-1 sample" v-for="(div, mcho) in mcho" v-bind:key="mcho">
        <div class="col-sm-6" style="margin-bottom:10px">
        <h5 class="pl-2"> {{div.question}}</h5>
        </div>
         <div class="col-sm-6" style="margin-bottom:10px">
        <h5 class="pl-2"> {{div.answer}}</h5>
        </div>
        <div class="col-sm-3">
          <span class="btn btn-danger" style="width:35px" @click="deleteMcho(mcho)">-</span>
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
      option:'',
      answer:'',
      mcho: [],
      optioneditor: ClassicEditor,
      optiondata: "",
      datas:'',
      editorConfig: {}
    };
  },
   mounted(){
this.opt()
  },
  methods: {
     opt:function(){
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
          this.optiondata=response.data[0].placeholder
          console.log("get data  ", this.optiondata);
        });
}, 
    oncheange(event){
        this.data=event;
           let obj={data:event,option:this.mcho}
           console.log("==>", obj)
          this.$emit('changedata',obj)
     },
    addMcho() {
      this.mcho.push({question:this.option,answer:this.answer});
      console.log(this.mcho)
      this.option='';
       this.answer='';
    },
    deleteMcho(mcho) {
      this.mcho.splice(mcho, 1);
    }
  }
};
</script>

<style scoped>
</style>
