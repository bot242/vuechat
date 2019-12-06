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

      <div class="row mb-3">
        <div class="col-sm-6">
          <input type="text" class="form-control" placeholder="Sample Option" />
        </div>
        <div class="col-sm-3">
          <span class="btn btn-success" @click="addMcho">+</span>
        </div>
      </div>
      <div class="row sample mb-3" v-for="(div, mcho) in mcho" v-bind:key="mcho">
        <div class="col-sm-6">
          <input type="text" class="form-control" placeholder="Sample Option" />
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
      mcho: [],
      optioneditor: ClassicEditor,
      optiondata: "",
      editorConfig: {}
    };
  },
  methods: {
    oncheange(event){
           this.data=event;
           console.log("==>",this.data)
          this.$emit('changedata',this.data)

     },
    addMcho() {
      this.mcho.push({});
    },
    deleteMcho(mcho) {
      this.mcho.splice(mcho, 1);
    }
  }
};
</script>

<style scoped>
</style>
