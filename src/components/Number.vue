<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Number</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
      <div class="form-group" style="top:10px">
        <ckeditor :editor="numeditor" v-model="numdata" :config="editorConfig"></ckeditor>
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
          <label class="form-check-label2" for="exampleCheck1">
            Maximum
            Digits
          </label>
          <input type="number" class="form-control" />
        </div>
        <div class="col-sm-6">
          <label class="form-check-label2" for="exampleCheck1">
            Minimum
            Digits
          </label>
          <input type="number" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <b>
          Error message when visitor enter
          invalid answer
        </b>
      </div>
      <div class="form-group">
        <div>
          <input type="text" class="form-control" placeholder="Please enter valid number" />
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
      numeditor: ClassicEditor,
      numdata: "",
      editorConfig: {}
    };
  },
  methods: {
    onChangeEventHandler() {
      alert("hi");
    }
  }
};
</script>

<style scoped>
.container{
    margin-top: 20px
}
</style>
