<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">List</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
      <div class="form-group" style="top:10px">
        <ckeditor @input="oncheange(listdata)" :editor="listeditor" v-model="listdata" :config="editorConfig"></ckeditor>
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
        <b>Add List Item</b>
      </div>

      <!-- <div class="form-group">
        <input type="text" class="form-control" placeholder="Add a tag" />
      </div> -->
      <!-- <div class="form-check">
          <span>
        Show
        Error if answer not in list
        <toggle-button @change="onChangeEventHandler" style="margin-left: 10px" />
          </span>
      </div> -->
       <div class="row">
       
        <div class="col-sm-6" style="margin-bottom:10px">
          <input type="text" v-model="option" class="form-control" placeholder="Sample Option" />
        </div>
        <div class="col-sm-3" style="margin-bottom:10px">
          <span class="btn btn-success" @click="addMcho()">+</span>
        </div>
      </div>
      <div class="row mt-1 sample" v-for="(div, mcho) in mcho" v-bind:key="mcho">
        <div class="col-sm-6" style="margin-bottom:10px">
        <h5 class="pl-2"> {{div.question}}</h5>
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
      listeditor: ClassicEditor,
      listdata: "",
      editorConfig: {},
      option:'',
      mcho: [],
      optiondata: "",
    };
  },
  methods: {
   oncheange(event){
        this.data=event;
           let obj={data:event,option:this.mcho}
           console.log("==>", obj)
          this.$emit('changedata',obj)
     },
    addMcho() {
      this.mcho.push({question:this.option});
      console.log(this.mcho)
      this.option='';
    },
    deleteMcho(mcho) {
      this.mcho.splice(mcho, 1);
    }
  }
};
</script>

<style scoped>
</style>
