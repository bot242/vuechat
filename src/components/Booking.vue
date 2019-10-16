<template>
  <div class="container" style="margin-top:20px">
    <div class="header">
      <div class="clearfix">
        <h5 class="float-left">Appointment</h5>
      </div>
    </div>
    <form>
      <div class="form-group">
        <b>Chat Message</b>
      </div>
      <div class="form-group" style="top:10px">
        <ckeditor :editor="bookeditor" v-model="bookdata" :config="editorConfig"></ckeditor>
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
      <div class="groups">
        <b>Available Days and Time</b>
        <label class="form-check-label2" for="exampleCheck1">
          in IST
          timezone
        </label>
      </div>
      <div class="row mb-3">
        <div class="col-sm-7">
          <button type="button" class="btn btn-outline-success text">sun</button>
          <button type="button" class="btn btn-outline-success text">mon</button>
          <button type="button" class="btn btn-outline-success text">tue</button>
          <button type="button" class="btn btn-outline-success text">wed</button>
          <button type="button" class="btn btn-outline-success text">thu</button>
          <button type="button" class="btn btn-outline-success text">fri</button>
          <button type="button" class="btn btn-outline-success text">sat</button>
        </div>
        <div class="col-sm-2">
          <select class="form-control drop" id="sel1" name="sellist1">
            <option>9.00 am</option>
            <option>9.30 am</option>
          </select>
        </div>
        <div class="col-sm-2">
          <select class="form-control drop" id="sel1" name="sellist1">
            <option>5.00 pm</option>
            <option>5.30 pm</option>
          </select>
        </div>
      </div>

      <div class="accept">
        <b>Accept</b>
        <span>
          <input type="number" id="cont" style="width:65px;" value="-1" />
        </span>
        <b>appointment per</b>

        <button class="btn btn-outline-success text" style="margin-left:5px">15</button>
        <button class="btn btn-outline-success text">30</button>
        <button class="btn btn-outline-success text">60</button>
        <input
          type="number"
          placeholder="custom"
          id="cont"
          style="width: 20%;margin-left: 20px;border-radius: .25rem;border: 1px solid gray;"
          value
        />
        <b style="margin-left: 20px;">
          minute
          duration
        </b>
      </div>
      <div>
        <i class="fas fa-info-circle" style="color:#4051b4;margin-right: 10px"></i>
        <label style="color:#4051b4;margin:10px 0 20px">
          Connect
          with Google Calender from
          integrations page for more powerful
          features
        </label>
      </div>
        <div class="group">
          <b>Invitee Email Question</b>
        </div>
        <div class="group">
          <div>
            <select class="form-control drop" id="sel1" name="sellist1">
              <option>
                What is your email
                address
              </option>
              <option>
                What is your email
                address
              </option>
            </select>
          </div>
        </div>
        <div class="group">
          <b>Success message on confirmation</b>
        </div>
        <div class="group">
          <div>
            <input type="text" class="form-control" placeholder="Your appointment is confirmed" />
          </div>
        </div>
        <div class="group">
          <b>
            Message to show when slots are
            unavailable
          </b>
        </div>
        <div class="group">
          <div>
            <input
              type="text"
              class="form-control"
              placeholder="Slots are not available for the selected day"
            />
          </div>
        </div>
        <div class="group">
          <b>
            Message to show when selected slot is
            already booked
          </b>
        </div>
        <div class="group">
          <div>
            <input type="text" class="form-control" placeholder="Selected slot is not available" />
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
      bookeditor: ClassicEditor,
      bookdata: "",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.group {
  margin-bottom: 5px;
}
.groups{
  margin-top: 5px;
}
</style>
