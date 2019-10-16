<template>
  <b-row class="tab1-bg mt-3" title="widget-tab1">
    <b-col cols="12" md="4" sm="6">
      <div class="tab3-data1">
        <div class="details-slider mt-3 avator">
          Avator
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
                <input type="file" class="ava-upload" @change="onFileChange" accept="image/*" />
                <i class="fas fa-plus-circle fa-5x"></i>
              </div>
              <div v-for="images in image" :key="images.id">
                <img :src="images.avatar" style="width:90%;" />
              </div>
            </slick>
          </div>
        </div>

        <!-- bootstrap SLider -->
        <div class="details-slider theme ml-4 mb-2">
          Theme
          <i class="far fa-question-circle"></i>
        </div>
        <div
          class="twitter-picker ml-4"
          style="width:80%; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;"
        >
          <div
            style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; top: -11px; left: 12px;"
          ></div>
          <div
            style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; top: -10px; left: 12px;"
          ></div>
          <div style="padding: 25px 0px 30px 0px;" class="ml-3">
            <span>
              <div
                title="#FF6900"
                tabindex="0"
                style="background: rgb(255, 105, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;"
              ></div>
            </span>
            <span>
              <div
                title="#FCB900"
                tabindex="0"
                style="background: rgb(252, 185, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;"
              ></div>
            </span>
            <span>
              <div
                title="#2dc464"
                tabindex="0"
                style="background: rgb(45, 196, 100); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;"
              ></div>
            </span>
            <span>
              <div
                title="#0069ff"
                tabindex="0"
                style="background: rgb(0, 105, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;"
              ></div>
            </span>
            <span>
              <div
                title="#ABB8C3"
                tabindex="0"
                style="background: rgb(171, 184, 195); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;"
              ></div>
            </span>
            <span>
              <div
                title="#EB144C"
                tabindex="0"
                style="background: rgb(235, 20, 76); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;"
              ></div>
            </span>
            <span>
              <div
                title="#5b4b9f"
                tabindex="0"
                style="background: rgb(91, 75, 159); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;"
              ></div>
            </span>
            <span>
              <div
                title="#8d7260"
                tabindex="0"
                style="background: rgb(141, 114, 96); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;"
              ></div>
            </span>
            <span></span>
            <span>
              <div
                title="#2b2b2b"
                tabindex="0"
                style="background: rgb(43, 43, 43); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;"
              ></div>
            </span>
            <div
              style="background: rgb(240, 240, 240); height: 30px; width: 30px; border-radius: 4px 0px 0px 4px; float: left; color: rgb(152, 161, 164); display: flex; align-items: center; justify-content: center;"
            >#</div>
            <div style="position: relative;">
              <input
                value="0069FF"
                spellcheck="false"
                style="width: 89px; font-size: 14px; color: rgb(102, 102, 102); border: 0px; outline: none; height: 28px; box-shadow: rgb(240, 240, 240) 0px 0px 0px 1px inset; box-sizing: content-box; border-radius: 0px 4px 4px 0px; float: left; "
              />
            </div>
            <div style="clear: both;"></div>
          </div>
        </div>
        <div class="details-slider mt-2 collect">
          Collect.chat Branding
          <i class="far fa-question-circle"></i>
        </div>
      </div>
    </b-col>
    <b-col cols="12" md="8" sm="6">
      <div class="tab1-data3">
        <div class="tab-3">
          <div class="float-left mr-1 ml-3 indicator1"></div>
          <div class="float-left mr-1 indicator2"></div>
          <div class="float-left indicator3"></div>
        </div>
        <div class="tab3 text-align:center">
          <div class="sl">
            <div class="chatbox">
              <h1 style="text-align: center; padding-top: 10%">
                <b>Chat</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import Slick from "vue-slick";
import axios from "axios";
export default {
  name: "Embed",
  components: { Slick },
  data() {
    return {
      image: [],
      newOutput: [],
      slickOptions: {
        //options can be used from the plugin documentation
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
  mounted() {
    // This will be called when HelloWorld is loaded
    this.getTasks(); // Call our getTasks function below
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      (this.isActive = false),
        (this.isTrue = true),
        this.newOutput.push(this.images);
    },
    getTasks() {
      axios({
        method: "get",
        url: "http://192.168.100.144:8000/api/avatar/",
        auth: {}
      }).then(response => console.log((this.image = response.data)));
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
.ava-upload {
    width: 100%;
    height: 100%;
    color: transparent;
    position: absolute;
    left: 0;
    opacity: 0;
    cursor: pointer;
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
.tab-3 {
  background-color: #f0f4f7;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 200%;
  float: left;
}
.tab1-data3 {
  width: 100%;
  float: left;
  border: 2px solid #dbe2dd;
  margin-top: 25px;
}
.tab3 {
  height: calc(100vh - 100px);
  background-image: url("~@/assets/desktop-dummy.png");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 90px;
}
.data1 {
    position: relative;
}
.uploadbg {
    display: inline-block;
    height: 90px;
    width: 50%;
}
</style>
