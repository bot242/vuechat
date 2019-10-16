<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Rating</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
            <div class="form-group" style="top:10px">

              <ckeditor :editor="rateeditor" v-model="ratedata" :config="editorConfig"></ckeditor>
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
      <div class="row mb-3">
        <div class="col-sm-6">
          <b>Rating - 1</b>
          <input type="text" class="form-control" placeholder="Terrible" />
        </div>
        <div class="col-sm-6">
          <b>Rating - 2</b>
          <input type="text" class="form-control" placeholder="Okay" />
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-sm-6">
          <b>Rating - 3</b>
          <input type="text" class="form-control" placeholder="Bad" />
        </div>
        <div class="col-sm-6">
          <b>Rating - 4</b>
          <input type="text" class="form-control" placeholder="Good" />
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-sm-6">
          <b>Rating - 5</b>
          <input type="text" class="form-control" placeholder="Awesome" />
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
      rateeditor: ClassicEditor,
      ratedata: "",
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
.container {
  margin-top: 20px;
}
</style>
