<template>
  <b-tabs content justified>
    <b-tab title=" Preview" active class="pre">
      <div class="hole">
        <div class="nad" style="background-color: #f4f4f4">
          <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
            <li class="nav-item lin">
              <a
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >Widget</a>
            </li>
            <!-- <li class="nav-item lin">
              <a
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >Landingpage</a>
            </li> -->
            <li class="nav-item lin">
              <a
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >Embed</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab">
          <!-- <WidgetTab /> -->
        </div>
        <!-- <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab">
          <LandingPage />
        </div> -->
        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab">
          <Embed />
        </div>
      </div>
    </b-tab>
   <!-- <Scrip/> -->
      <Public/>

    
  </b-tabs>
</template>

<script>
import WidgetTab from "./WidgetTab";
import LandingPage from "./LandingPage";
import Embed from "./Embed";
import Public from "./Public";
// import Scrip from "./Scrip";
export default {
  name: "Tab",
  components: {
    WidgetTab,
    LandingPage,
    Embed,
    Public,
    // Scrip,
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hole {
  background-color: #f0f4f7;
  margin-top: 1%;
}
/* .tab-content{
  margin-left: 3%;
} */
.nav-pills .nav-link.active {
  color: white !important;
  background-color: #188de4 !important;
  border-radius: 6px !important;
}
.nav-pills .nav-link {
  color: black !important;
}
.lin {
  width: 30%;
  text-align: center;
  background-color: white !important;
  border-radius: 6px !important;
  border-style: ridge !important;
}

</style>
