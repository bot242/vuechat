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
        <ckeditor :editor="listeditor" v-model="listdata" :config="editorConfig"></ckeditor>
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
        <b>Add suggestions</b>
      </div>

      <div class="form-group">
        <input type="text" class="form-control" placeholder="Add a tag" />
      </div>
      <div class="form-check">
          <span>
        Show
        Error if answer not in list
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
      listeditor: ClassicEditor,
      listdata: "",
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
</style>
