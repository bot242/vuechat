<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Multi Select</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
            <div class="form-group" style="top:10px">

      <ckeditor @input="oncheange(selectdata)"  :editor="selecteditor" v-model="selectdata" :config="editorConfig"></ckeditor>
            </div>
      <!-- <div class="form-check">
        <span>
          Back button
          <toggle-button
           
            style="margin-left: 10px;margin-right: 5px"
          />
        </span>
        <span>
          Skip button
          <toggle-button  style="margin-left: 10px" />
        </span>
      </div> -->
       <div class="form-group mt-1">
        <b>Options</b>
      </div>
      <div class="row">
       
        <div class="col-sm-6" style="margin-bottom:10px">
          <input type="text" v-model="option" class="form-control" placeholder="Sample Option" />
        </div>
        <div class="col-sm-3" style="margin-bottom:10px">
          <span class="btn btn-success" @click="addMsel()">+</span>
        </div>
      </div>
      <div class="row mt-1 sample" v-for="(div, msel) in msel" v-bind:key="msel">
        <div class="col-sm-6" style="margin-bottom:10px">
        <h5 class="pl-2"> {{div.question}}</h5>
        </div>
        <div class="col-sm-3">
          <span class="btn btn-danger" style="width:35px" @click="deleteMsel(msel)">-</span>
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
       msel: [],
      selecteditor: ClassicEditor,
      selectdata: "",
      editorConfig: {},

    };
  },
  methods: {
    oncheange(event){
           this.data=event;
           let obj={data:event,option:this.msel}
           console.log("==>", obj)
          this.$emit('changedata',obj)

     },
    addMsel() {
      this.msel.push({question:this.option});
      console.log(this.msel)
      this.option='';
    },
    deleteMsel(msel) {
      this.msel.splice(msel, 1);
    }
  }
};
</script>

<style scoped>
</style>
