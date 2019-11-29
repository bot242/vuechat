<template>
  <div class="container" style="
    margin-top: 20px;">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Message</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
      <div class="form-group">
        <div>
          <ckeditor @input="oncheange(editorData)" :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
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
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {},
      data:''
    }; 
  },
   methods:{
     oncheange(event){
           this.data=event;
           console.log("==>",this.data)
          this.$emit('changedata',this.data)
           
     }
   }
};
</script>