<template>
  <b-row class="tab1-bg" title="widget-tab1">
    <b-col cols="12" md="4" sm="6">
      <div class="details-slider mt-4 mb-2 ml-4">
        Position
        <i class="far fa-question-circle"></i>
      </div>

      <div class="col-md-8 col-lg-8 col-sm-8 ml-2">
        <div class="img-right pright layout" v-on:click="isLeft" v-bind:class="{red: isActive}" ></div>
        <div class="img-right pcenter layout" v-on:click="isCenter" v-bind:class="{red: isColor}"></div>
        <div class="img-right pleft layout" v-on:click="isRight" v-bind:class="{red: isGreen}"></div>
      </div>

      <div class="r welcome mt-1 mb-2 ml-4">
        Welcome Message
        <i class="far fa-question-circle"></i>
      </div>
      <b-form-input class="ml-4" id="input-default" style="width: 75%" v-model="msg"></b-form-input>

      <div class="mb-2 ml-4 mt-2 t avatar">
        Avatar
        <i class="far fa-question-circle"></i>
      </div>
      <div
        class="twitter-picker ml-4"
        style="width: 80%; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;"
      >
        <div
          style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; top: -11px; left: 12px;"
        ></div>
        <div
          style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; top: -10px; left: 12px;"
        ></div>
        <div style="padding: 15px 9px 9px 15px;">
          <slick ref="slick" :options="slickOptions" v-if="image.length">
            <div class="data1 uploadbg">
              <input
                type="file"
                class="ava-upload"
                @change="onFileChange"
                accept="image/*"
                style="width:90%;"
              />
              <i class="fas fa-plus-circle fa-5x"></i>
            </div>
            <div v-for="images in image" :key="images.id"  >
              <img  v-bind:class="{red: isImage}" :src="images.avatar" style="width:90%;"  @click="setImg(images)"     
/>
            </div>
          </slick>
        </div>
      </div>
      
      <div class="q collect ml-4 mt-2 mb-5">
        zoogle.chat Branding
        <i class="far fa-question-circle"></i>
      </div>
              <button v-on:click="widget()">Send</button>
<modal name="hello-world">
  hello, world!
</modal>
    </b-col>
    <b-col cols="12" md="8" sm="6">
      <div class="tab1-data2 mt-4">
        <div class="tab-1">
          <div class="float-left mr-1 ml-3 indicator1"></div>
          <div class="float-left mr-1 indicator2"></div>
          <div class="float-left indicator3"></div>
        </div>
        <div class="body1 ml-3 mr-3">

          <div>
            <span v-show="!isTrue"></span>
          </div>
          <div v-show="!isTrue" class="chat11">
            <span v-show="!isM">
              <img class="padrig1" :src="outputImg" :id="outputId" />
            </span>
            <span v-show="!isQ">
             
              <img class="padrig1" v-if="url" :src="url"  />
               
            </span>
            <p class="chatname" style="float: right">{{msg}}</p>
          </div>
          <div v-show="!isChat" class="chat22">
            <span v-show="!isM">
              <img class="padrig2" :src="outputImg" :id="outputId" />
            </span>
            <span v-show="!isQ">
              

              <img class="padrig1" v-if="url" :src="url"  />
             
            </span>
            <p class="chatname1" style="float: right">{{msg}}</p>
          </div>
          <div v-show="!isIcon" class="chat33">
            <span v-show="!isM">
              <img class="padrig3" :src="outputImg" :id="outputId" />
            </span>
            <span v-show="!isQ">
              <img class="padrig3" v-if="url" :src="url" />
            </span>
            <p class="chatname" style="float: left">{{msg}}</p>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import Slick from "vue-slick";
import axios from "axios";
import Vue from 'vue';
import qs from 'qs'




export default {
  name: "WidgetTab",
  components: { 
    Slick,
  },

  data() {
    return {

      isHidden: false,
      isShow: false,
      isTrue: true,
      isChat: true,
      isIcon: true,
      msg: "Chat now",
      user:"2",
      isQ: true,
      isM: true,
      isActive: false,
      isImage: false,
      isColor: false,
      isGreen: false,
      image: [],
      url: null,
      outputId: "",
      outputImg: "",
      newOutput: [],
      response: "",
      as:"",
      slickOptions: {
        slidesToShow: 4,
        infinite: false,
        accessibility: true,
        adaptiveHeight: false,
        arrows: true,
        dots: false,
        draggable: true,
        edgeFriction: 0.3,
        swipe: true
      }
    };
  },
  computed: {
    formData() {
        return {
            stuff: {
                position: this.as,
                message:this.msg,
                avatar:this.outputImg,
                user:this.user
            }
        }
    }
  },
  mounted() {
    // This will be called when HelloWorld is loaded
    this.getTasks(); // Call our getTasks function below
  },
  methods: {
    getTasks() {
      axios({
        method: "get",
        url: "http://192.168.100.144:8000/api/avatar/",
        auth: {}
      }).then(response => console.log((this.image = response.data)));
    },
    widget(){
    let formData = new FormData();
            formData.append('position', this.as);
            formData.append('message',this.msg);
            formData.append('avatar',this.outputId);
            formData.append('user',this.user);
            console.log("ssss",this.formData)
            this.axios.post('http://192.168.100.144:8000/api/widget/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Content-Type': 'application/json',

                }
              }
            ).then(function(data){
              console.log(data.data);
            })
            .catch(function(){
              console.log('FAILURE!!');
            });
    },
    
 
    isLeft() {
      (this.isTrue = false),
        (this.isChat = true),
        (this.isIcon = true),
        (this.isActive = !this.isActive);
      (this.isColor = false), 
      (this.isGreen = false);
        if (this.isTrue===false)
      {
        var asa="Left"
        // this.$set(this.as[0], );
        this.as=asa
        // console.log('left',a)
        // Vue.set(this.as,2,this.ms)
        console.log("sdda",this.as)
        console.log('msg',this.msg)


        
      }

    },
    isCenter() {
      (this.isTrue = true),
        (this.isChat = false),
        (this.isIcon = true),
        (this.isColor = !this.isColor),
        (this.isActive = false),
        (this.isGreen = false);
        if (this.isChat===false)
      {
        var asa="Center"
        this.as=asa

        // Vue.set(this.as,0, asa )
        // Vue.set(this.as,2,this.msg)

        console.log("sdda", this.as)
        console.log('msg',this.msg)

      }
    },
    isRight() {
      (this.isTrue = true),
        (this.isChat = true),
        (this.isIcon = false),
        (this.isGreen = !this.isGreen),
        (this.isActive = false),
        (this.isColor = false);
        if (this.isIcon===false)
      {
        var asa="Right"
        this.as=asa
        console.log("sdda", this.as)
        console.log('msg',this.msg)
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      (this.isQ = false), (this.isM = true), this.newOutput.push(this.images);
    },
    setImg(event) {
      (this.outputId = event.id),
        (this.outputImg  = event.avatar),
        (this.isQ = true),
        (this.isM = false);
        if (this.outputImg===event.avatar){
              this.isImage = !this.isImage;
              // alert("s")
        }
                console.log("test",this.outputImg )
                console.log('sumbmit',this.outputId)

    },


    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab1-bg {
  background-color: #f4f4f4;
}
.data1 {
  position: relative;
}
.uploadbg {
  display: inline-block;
  height: 90px;
  width: 50%;
}
.ava-upload {
  width: 100%;
  height: 100%;
  color: transparent;
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;
}
.img-right {
  cursor: pointer;
  width: 45px;
  height: 45px;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  margin-right: 3px;
}
.tab1-data2 {
  width: 100%;
  float: left;
  border: 2px solid #dbe2dd;
}
.tab-1 {
  background-color: #f0f4f7;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 200%;
  float: left;
}
.indicator1 {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  /* top: 20px; */
  left: 26px;
  background-color: red;
}
.indicator2 {
  margin-right: 50px;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  /* top: 20px; */
  left: 26px;
  background-color: yellow;
}
.indicator3 {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  /* top: 20px; */
  left: 26px;
  background-color: #2bbb5f;
}
.body1 {
  height: calc(100vh - 150px);
  background-image: url("~@/assets/desktop-dummy.png");
  background-repeat: no-repeat;
  background-size: 100%;
}
.pright {
  background-image: url("~@/assets/pright.png");
}
.pcenter {
  background-image: url("~@/assets/pcenter.png");
}
.pleft {
  background-image: url("~@/assets/pleft.png");
}
.padrig1 {
  width: 9%;
  position: relative;
  float: right;
  top: 475px;
}
.padrig2 {
  width: 9%;
  position: relative;
  float: right;
  top: 250px;
  /* background-color: purple; */
  border-radius: 45px 0px 0px 45px;
  padding: 2px 3px 2px 3px;
}
.padrig3 {
  width: 9%;
  position: relative;
  float: left;
  top: 475px;
}
.row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
.chatname {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  color: black;
  line-height: 24px !important;
  position: relative;
  z-index: 2147482999;
  cursor: pointer;
  padding: 7px 10px;
  border-radius: 0.625rem !important;
  white-space: normal;
  text-overflow: ellipsis;
  max-width: 300px;
  margin: 0px 15px;
  top: 470px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  animation: launcher-frame-appear 0.25s ease forwards;
}
.chatname1 {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
  color: black;
  line-height: 24px !important;
  position: relative;
  z-index: 2147482999;
  cursor: pointer;
  padding: 7px 10px;
  border-radius: 0.625rem !important;
  white-space: normal;
  text-overflow: ellipsis;
  max-width: 300px;
  margin: 0px 15px;
  top: 250px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  animation: launcher-frame-appear 0.25s ease forwards;
}
.red {
  border: 2px solid #2dc464;
}
.layout:hover {
  border: 2px solid #2dc464;
}
.slick-prev:before,
.slick-next:before {
  color: black !important;
}
img.is-active{
  background-color: lightblue;
  border: green solid 2px;
  color: red;
}
</style>
