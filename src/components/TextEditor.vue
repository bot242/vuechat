<template>
  <div>

    <div class="container" style="margin-top:20px">
                          <div class="header">
                            <div class="clearfix">
                              <h5 class="float-left">Text Question</h5>
                            </div>
                          </div>                         
                          <form>
                            <div class="form-group">
                              <b>Chat Message</b>
                            </div>
                                <ckeditor  @input="oncheange(textdata)" :editor="texteditor" v-model="textdata" :config="editorConfig"></ckeditor>

                            <div class="form-group">
                              <!-- <TextEditor/> -->
                            </div>
                            <span>
                              Back button
                              <toggle-button
                                @change="onChangeEventHandler"
                                style="margin-left: 10px;margin-right: 5px"
                              />
                            </span>
                            <span>
                              Skip button
                              <toggle-button
                                @change="onChangeEventHandler"
                                style="margin-left: 10px"
                              />
                            </span>
                          </form>
                        </div>
  </div>
</template>
 
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
       texteditor: ClassicEditor,
      textdata: "",
      editorConfig: {}
    };
  },
  methods:{
    onChangeEventHandler() {
      alert("hi");
    },
    oncheange(event){
           this.data=event;
           console.log("==>",this.data)
          this.$emit('changedata',this.data)
           
     },
  }
}
</script>