<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Opinion Scale</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
      <div class="form-group" style="top:10px">
        <ckeditor @input="oncheange(scaledata)" :editor="scaleeditor" v-model="scaledata" :config="editorConfig"></ckeditor>
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
          <b>Left label</b>
          <input type="text" class="form-control" placeholder="Less likely" />
        </div>
        <div class="col-sm-6">
          <b>Right label</b>
          <input type="text" class="form-control" placeholder="Very likely" />
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
      scaleeditor: ClassicEditor,
      scaledata: "",
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
.container {
  margin-top: 20px;
}
</style>
