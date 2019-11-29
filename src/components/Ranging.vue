<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Range</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
      <div class="form-group" style="top:10px">
        <ckeditor @input="oncheange(rangedata)" :editor="rangeditor" v-model="rangedata" :config="editorConfig"></ckeditor>
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
      <div class="row">
        <div class="col-sm-6">
          <label class="form-check-label2" for="exampleCheck1">Prefix</label>
          <i class="far fa-question-circle" style="color:#3e396b;margin-left:5px;"></i>
          <input type="text" class="form-control" />
        </div>
        <div class="col-sm-6">
          <label class="form-check-label2" for="exampleCheck1">Suffix</label>
          <i class="far fa-question-circle" style="color:#3e396b;margin-left:5px;"></i>
          <input type="text" class="form-control" />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <label class="form-check-label2" for="exampleCheck1">Minimum</label>
          <input type="number" class="form-control" />
        </div>
        <div class="col-sm-6">
          <label class="form-check-label2" for="exampleCheck1">Maximum</label>
          <input type="number" class="form-control" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <label class="form-check-label2" for="exampleCheck1">Step</label>
          <input type="text" class="form-control" />
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
      rangeditor: ClassicEditor,
      rangedata: "",
      editorConfig: {}
    };
  },
  methods: {
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
