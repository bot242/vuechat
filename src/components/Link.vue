<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Link</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
      <div class="form-group" style="top:10px">
                  <ckeditor :editor="linkeditor" v-model="linkdata" :config="editorConfig"></ckeditor>

      </div>
      <div class="form-group">
        <b>Links</b>
      </div>

      <div class="row">
        <div class="col-sm-2 mb-3">
          <b>Type</b>
        </div>
        <div class="col-sm-3">
          <b>Title</b>
        </div>
        <div class="col-sm-4">
          <b>Username/Link</b>
        </div>
        <div class="col-sm-3">
          <b>New Tab?</b>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-2 mb-3">
          <select class="form-control drop" id="sel1" name="sellist1">
            <option>Messenger</option>
            <option>Link</option>
            <option>Whatsapp</option>
            <option>Twitter</option>
            <option>LinkedIn</option>
            <option>Snapchat</option>
            <option>Telegram</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Email</option>
            <option>Phone</option>
            <option>Facebook</option>
            <option>Twitter-follow</option>
            <option>Instagram</option>
            <option>Medium</option>
            <option>ProductHunt</option>
            <option>Vk</option>
            <option>Youtube</option>
            <option>Github</option>
            <option>Stackoverflow</option>
          </select>
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control title" placeholder="Message us" />
        </div>

        <div class="col-sm-4">
          <input type="text" class="form-control link" placeholder="Facebook page Id or hand" />
        </div>
        <div class="col-sm-1">
          <div class="switchToggle" style="width:20%;">
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
          </div>
        </div>
        <div class="col-sm-2">
          <span class="btn btn-success" @click="addSel">+</span>
        </div>
      </div>

      <div class="row" v-for="(div, link) in sel" v-bind:key="link">
        <div class="col-sm-2 mb-3">
          <select class="form-control drop" id="sel1" name="sellist1">
            <option>Email</option>
            <option>Link</option>
            <option>Whatsapp</option>
            <option>Twitter</option>
            <option>LinkedIn</option>
            <option>Snapchat</option>
            <option>Telegram</option>
            <option>Slack</option>
            <option>Skype</option>
            <option>Messenger</option>
            <option>Phone</option>
            <option>Facebook</option>
            <option>Twitter-follow</option>
            <option>Instagram</option>
            <option>Medium</option>
            <option>ProductHunt</option>
            <option>Vk</option>
            <option>Youtube</option>
            <option>Github</option>
            <option>Stackoverflow</option>
          </select>
        </div>
        <div class="col-sm-3">
          <input type="text" class="form-control title" placeholder="Email us" />
        </div>

        <div class="col-sm-4">
          <input type="text" class="form-control link" placeholder="Email Id" />
        </div>
        <div class="col-sm-1">
          <div class="switchToggle" style="width:20%;">
            <input type="checkbox" id="switch" />
            <label for="switch">Toggle</label>
          </div>
        </div>
        <div class="col-sm-2">
          <span class="btn btn-danger" style="width:35px" @click="deleteSel(link)">-</span>
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
         sel: [],
      linkeditor: ClassicEditor,
      linkdata: "",
      editorConfig: {}
    };
  },
  methods: {
    onChangeEventHandler() {
      alert("hi");
    },addSel() {
      this.sel.push({});
    },
     deleteSel(link) {
      this.sel.splice(link, 1);
    },
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
