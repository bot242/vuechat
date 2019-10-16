<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">File Upload</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
       <div class="form-group" style="top:10px">

      <ckeditor :editor="uploadeditor" v-model="uploaddata" :config="editorConfig"></ckeditor>
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
          Message to show when file size
          exceeds 10 Mb
        </b>
      </div>
      <div class="form-group">
        <div>
          <input type="text" class="form-control" placeholder="File size exceeded 10 Mb" />
        </div>
      </div>
      <div class="form-group">
        <b>
          Message to show when upload
          failes
        </b>
      </div>
      <div class="form-group">
        <div>
          <input type="text" class="form-control" placeholder="Upload failed" />
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
      uploadeditor: ClassicEditor,
      uploaddata: "",
      editorConfig: {}
    };
  },
  methods: {
    onChangeEventHandler() {
      alert("hi");
    },
  
  }
};
</script>

<style scoped>
</style>
