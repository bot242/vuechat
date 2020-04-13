<template>
          <div class="backgr">
                            <b-row class="tab1-bg " title="widget-tab2">
                                <b-col class="mt-3" cols="12" md="4" sm="6" v-if="!isHidden & !isShow">
                                 
                                    <div class="tab1-data1 mt-2">
                                        <div class="twitter-picker picker mb-3" v-on:click="isHidden = !isHidden" >
                                            <p class="circle ml-3"><b>Design</b> <i class="far fa-question-circle"></i>
                                            </p>
                                            <p class="greater" style="float:left"><i class="fas fa-greater-than"></i>
                                            </p>
                                        </div>
                                        <div class="twitter-picker picker" v-on:click="isShow = !isShow" >
                                            <p class="circle ml-3"><b>Content</b> <i class="far fa-question-circle"></i>
                                            </p>
                                            <p class="greater1" style="float:left"><i class="fas fa-greater-than"></i>
                                            </p>
                                        </div>

                                        

                                        <div class="details-slider mt-2 avator">
                                            Avator
                                            <i class="far fa-question-circle"></i>
                                        </div>
                                        <div class="twitter-picker ml-4 "
                                            style="width: 80%; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;">
                                            <div
                                                style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; top: -11px; left: 12px;">
                                            </div>
                                            <div
                                                style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; top: -10px; left: 12px;">
                                            </div>
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
                                        <!--Slider  -->

                                        <div class="details-slider theme">
                                            Theme
                                            <i class="far fa-question-circle"></i>
                                        </div>
<div class="form__input" >
    <swatches
      v-model="color"

      show-fallback
      fallback-input-type="color"

      popover-to="center"
    ></swatches>
  </div>

                                        <!-- <div class="twitter-picker pick mb-2"
                                            style="width:80%; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;">
                                            <div
                                                style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; top: -11px; left: 12px;">
                                            </div>
                                            <div
                                                style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; top: -10px; left: 12px;">
                                            </div>
                                            <div style="padding: 25px 0px 30px 0px;" class="ml-3"><span>
                                                    <div title="#FF6900" tabindex="0"
                                                        style="background: rgb(255, 105, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                    </div>
                                                </span><span>
                                                    <div title="#FCB900" tabindex="0"
                                                        style="background: rgb(252, 185, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                    </div>
                                                </span><span>
                                                    <div title="#2dc464" tabindex="0"
                                                        style="background: rgb(45, 196, 100); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                    </div>
                                                </span><span>
                                                    <div title="#0069ff" tabindex="0"
                                                        style="background: rgb(0, 105, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                    </div>
                                                </span><span>
                                                    <div title="#ABB8C3" tabindex="0"
                                                        style="background: rgb(171, 184, 195); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                    </div>
                                                </span><span>
                                                    <div title="#EB144C" tabindex="0"
                                                        style="background: rgb(235, 20, 76); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                    </div>
                                                </span><span>
                                                    <div title="#5b4b9f" tabindex="0"
                                                        style="background: rgb(91, 75, 159); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                    </div>
                                                </span><span>
                                                    <div title="#8d7260" tabindex="0"
                                                        style="background: rgb(141, 114, 96); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                    </div>
                                                </span><span>
                                                </span><span>
                                                    <div title="#2b2b2b" tabindex="0"
                                                        style="background: rgb(43, 43, 43); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                    </div>
                                                </span>
                                                <div
                                                    style="background: rgb(240, 240, 240); height: 30px; width: 30px; border-radius: 4px 0px 0px 4px; float: left; color: rgb(152, 161, 164); display: flex; align-items: center; justify-content: center;">
                                                    #</div>
                                                <div style="position: relative;"><input value="0069FF"
                                                        spellcheck="false"
                                                        style="width: 89px; font-size: 14px; color: rgb(102, 102, 102); border: 0px; outline: none; height: 28px; box-shadow: rgb(240, 240, 240) 0px 0px 0px 1px inset; box-sizing: content-box; border-radius: 0px 4px 4px 0px; float: left; ">
                                                </div>
                                                <div style="clear: both;"></div>
                                            </div>
                                        </div> -->
                                        <div class="details-slider collect pick mt-3 mb-5">
                                            Collect.chat Branding
                                            <i class="far fa-question-circle"></i>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col class="mt-3" cols="12" md="4" sm="6" v-if="isHidden">
                                        <!-- start design tab -->
                                        <div class="form-details-sidebar" >
                                               
                                            <b-row class="models" title="widget-tab1">
                                                    <button type="button"
                                                    class=" btn btn-info float-left done ml-4"
                                                    id="close" v-on:click="isHidden=false"><span><i
                                                            class="fas fa-long-arrow-alt-left "
                                                            id="long"></i></span> Back</button>
                                                    <b-col cols="12" md="12" sm="6">
                                                                        <div class="details-slider  mb-2 ml-4">
                                                                            Layout
                                                                            <i class="far fa-question-circle"></i>
                                                                        </div>

                                                                        <div class="ml-4">
                                                                            <div class="img-layout lright layout" @click = "isLeftlay" :class="{red: isActivelay}"></div>
                                                                            <div class="img-layout lcenter layout" @click = "isCenterlay" :class="{red: isColorlay}"></div>
                                                                            <div class="img-layout lleft layout" @click = "isRightlay" :class="{red: isGreenlay}"></div>
                                                                        </div>
                                                                        <div class="ml-4 mt-4">
                                                            <ul class="nav nav-tabs" id="myTab"
                                                                role="tablist">
                                                                <li class="nav-item">
                                                                    <a class="nav-link active"
                                                                        id="home-tab" data-toggle="tab"
                                                                        href="#home" role="tab"
                                                                        aria-controls="home"
                                                                        aria-selected="true">Color</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" id="profile-tab"
                                                                        data-toggle="tab"
                                                                        href="#profile" role="tab"
                                                                        aria-controls="profile"
                                                                        aria-selected="false">Gradient</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" id="contact-tab"
                                                                        data-toggle="tab"
                                                                        href="#contact" role="tab"
                                                                        aria-controls="contact"
                                                                        aria-selected="false">Image</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                    <a class="nav-link" id="video-tab"
                                                                        data-toggle="tab" href="#video"
                                                                        role="tab" aria-controls="video"
                                                                        aria-selected="false">Video</a>
                                                                </li>
                                                            </ul>
                                                            <div class="tab-content" id="myTabContent">
                                                                <div class="tab-pane fade show active"
                                                                    id="home" role="tabpanel"
                                                                    aria-labelledby="home-tab">
                                                                    <div class="twitter-picker ml-4"
                                                                        style="width:80%; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;">
                                                                        <div
                                                                            style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; top: -11px; left: 12px;">
                                                                        </div>
                                                                        <div
                                                                            style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; top: -10px; left: 12px;">
                                                                        </div>
                                                                        <div style="padding: 25px 0px 30px 0px;"
                                                                            class="ml-3"><span>
                                                                                <div title="#FF6900"
                                                                                    tabindex="0"
                                                                                    style="background: rgb(255, 105, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                </div>
                                                                            </span><span>
                                                                                <div title="#FCB900"
                                                                                    tabindex="0"
                                                                                    style="background: rgb(252, 185, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                </div>
                                                                            </span><span>
                                                                                <div title="#2dc464"
                                                                                    tabindex="0"
                                                                                    style="background: rgb(45, 196, 100); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                </div>
                                                                            </span><span>
                                                                                <div title="#0069ff"
                                                                                    tabindex="0"
                                                                                    style="background: rgb(0, 105, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                </div>
                                                                            </span><span>
                                                                                <div title="#ABB8C3"
                                                                                    tabindex="0"
                                                                                    style="background: rgb(171, 184, 195); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                </div>
                                                                            </span><span>
                                                                                <div title="#EB144C"
                                                                                    tabindex="0"
                                                                                    style="background: rgb(235, 20, 76); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                </div>
                                                                            </span><span>
                                                                                <div title="#5b4b9f"
                                                                                    tabindex="0"
                                                                                    style="background: rgb(91, 75, 159); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                </div>
                                                                            </span><span>
                                                                                <div title="#8d7260"
                                                                                    tabindex="0"
                                                                                    style="background: rgb(141, 114, 96); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                </div>
                                                                            </span><span>
                                    
                                                                            </span><span>
                                                                                <div title="#2b2b2b"
                                                                                    tabindex="0"
                                                                                    style="background: rgb(43, 43, 43); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                </div>
                                                                            </span>
                                                                            <div
                                                                                style="background: rgb(240, 240, 240); height: 30px; width: 30px; border-radius: 4px 0px 0px 4px; float: left; color: rgb(152, 161, 164); display: flex; align-items: center; justify-content: center;">
                                                                                #</div>
                                                                            <div
                                                                                style="position: relative;">
                                                                                <input value="0069FF"
                                                                                    spellcheck="false"
                                                                                    style="width: 89px; font-size: 14px; color: rgb(102, 102, 102); border: 0px; outline: none; height: 28px; box-shadow: rgb(240, 240, 240) 0px 0px 0px 1px inset; box-sizing: content-box; border-radius: 0px 4px 4px 0px; float: left; ">
                                                                            </div>
                                                                            <div style="clear: both;">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane fade" id="profile"
                                                                    role="tabpanel"
                                                                    aria-labelledby="profile-tab">
                                                                    <div class="colorpicker-container ">
                                                                        <div class="arrow-tip"
                                                                            style="left: 150px;"></div>
                                                                        <div class="arrow-content"
                                                                            style="left: 91px;"></div>
                                                                        <div class="colorpicker-half">
                                                                            <div
                                                                                class="form-details-sidebar-title">
                                                                                Start</div>
                                                                            <div class="twitter-picker"
                                                                                style="width: 276px; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;">
                                                                                <div
                                                                                    style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; display: none;">
                                                                                </div>
                                                                                <div
                                                                                    style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; display: none;">
                                                                                </div>
                                                                                <div
                                                                                    style="padding: 15px 9px 9px 15px;">
                                                                                    <span>
                                                                                        <div title="#FF6900"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(255, 105, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#FCB900"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(252, 185, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#2dc464"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(45, 196, 100); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#0069ff"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(0, 105, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#ABB8C3"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(171, 184, 195); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#EB144C"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(235, 20, 76); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#5b4b9f"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(91, 75, 159); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#8d7260"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(141, 114, 96); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#ffffff"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(255, 255, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#2b2b2b"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(43, 43, 43); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span>
                                                                                    <div
                                                                                        style="background: rgb(240, 240, 240); height: 30px; width: 30px; border-radius: 4px 0px 0px 4px; float: left; color: rgb(152, 161, 164); display: flex; align-items: center; justify-content: center;">
                                                                                        #</div>
                                                                                    <div
                                                                                        style="position: relative;">
                                                                                        <input
                                                                                            value="22194D"
                                                                                            spellcheck="false"
                                                                                            style="width: 100px; font-size: 14px; color: rgb(102, 102, 102); border: 0px; outline: none; height: 28px; box-shadow: rgb(240, 240, 240) 0px 0px 0px 1px inset; border-radius: 0px 4px 4px 0px; float: left; padding-left: 8px;">
                                                                                    </div>
                                                                                    <div
                                                                                        style="clear: both;">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="colorpicker-half">
                                                                            <div
                                                                                class="form-details-sidebar-title">
                                                                                End</div>
                                                                            <div class="twitter-picker"
                                                                                style="width: 276px; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;">
                                                                                <div
                                                                                    style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; display: none;">
                                                                                </div>
                                                                                <div
                                                                                    style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; display: none;">
                                                                                </div>
                                                                                <div
                                                                                    style="padding: 15px 9px 9px 15px;">
                                                                                    <span>
                                                                                        <div title="#FF6900"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(255, 105, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#FCB900"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(252, 185, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#2dc464"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(45, 196, 100); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#0069ff"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(0, 105, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#ABB8C3"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(171, 184, 195); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#EB144C"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(235, 20, 76); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#5b4b9f"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(91, 75, 159); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#8d7260"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(141, 114, 96); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#ffffff"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(255, 255, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span><span>
                                                                                        <div title="#2b2b2b"
                                                                                            tabindex="0"
                                                                                            style="background: rgb(43, 43, 43); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                        </div>
                                                                                    </span>
                                                                                    <div
                                                                                        style="background: rgb(240, 240, 240); height: 30px; width: 30px; border-radius: 4px 0px 0px 4px; float: left; color: rgb(152, 161, 164); display: flex; align-items: center; justify-content: center;">
                                                                                        #</div>
                                                                                    <div
                                                                                        style="position: relative;">
                                                                                        <input
                                                                                            value="22194D"
                                                                                            spellcheck="false"
                                                                                            style="width: 100px; font-size: 14px; color: rgb(102, 102, 102); border: 0px; outline: none; height: 28px; box-shadow: rgb(240, 240, 240) 0px 0px 0px 1px inset; border-radius: 0px 4px 4px 0px; float: left; padding-left: 8px;">
                                                                                    </div>
                                                                                    <div
                                                                                        style="clear: both;">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane fade contacts"
                                                                    id="contact" role="tabpanel"
                                                                    aria-labelledby="contact-tab">
                                    
                                    
                                                                    <div class="bg-upload-wrap">
                                                                        <div class="arrow-tip"
                                                                            style="left: 195px;"></div>
                                                                        <div class="arrow-content"
                                                                            style="left: 195px;"></div>
                                                                            <div class="p-relative bg-upload">
                                                                                <input type="file" class="ava-upload" accept="image/*">
                                                                                <i class="fas fa-plus-circle fa-10x "></i>                                                                                            
                                                                            </div>
                                                                        <div class="p-relative v-line">
                                                                        </div>
                                                                        <div class="bg-library"><i
                                                                                class="far fa-images fa-10x"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane fade contacts"
                                                                    id="video" role="tabpanel"
                                                                    aria-labelledby="video-tab">
                                    
                                    
                                                                    <div class="bg-upload-wrap">
                                                                        <div class="arrow-tip"
                                                                            style="left: 280px;"></div>
                                                                        <div class="arrow-content"
                                                                            style="left: 280px;"></div>
                                                                            <div class="p-relative bg-upload">
                                                                                <input type="file" class="ava-upload" accept="image/*">
                                                                                <i class="fas fa-plus-circle fa-10x "></i>                                                                                            
                                                                            </div>
                                                                        <div class="p-relative v-line">
                                                                        </div>
                                                                        <div class="bg-library"><i
                                                                                class="far fa-images fa-10x"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                    
                                                        </div>

                                                                    </b-col>
                                    
                                                </b-row>
                                            </div>
                                            <!-- end design tab -->
                                    </b-col>
                                    <b-col class="mt-3" cols="12" md="4" sm="6" v-if="isShow">
                                           
                                        <b-row class="models mt-3" title="widget-tab1">
                                                <button type="button"
                                                class=" btn btn-info float-left done ml-4"
                                                id="close" @click="showContent=false" v-on:click="isShow=false"><span><i
                                                        class="fas fa-long-arrow-alt-left "
                                                        id="long"></i></span> Back
                                            </button>  
                                                    <b-col cols="12" md="12" sm="9">
                                                            
                                                        <div class="ml-4 mt-4">
                                                                            <ul class="nav nav-tabs" id="myTab"
                                                                                role="tablist">
                                                                                <li class="nav-item">
                                                                                    <a class="nav-link active"
                                                                                        id="home-tab" data-toggle="tab"
                                                                                        href="#home" role="tab"
                                                                                        aria-controls="home"
                                                                                        aria-selected="true">Color</a>
                                                                                </li>
                                                                                <li class="nav-item">
                                                                                    <a class="nav-link" id="profile-tab"
                                                                                        data-toggle="tab"
                                                                                        href="#profile" role="tab"
                                                                                        aria-controls="profile"
                                                                                        aria-selected="false">Gradient</a>
                                                                                </li>
                                                                                <li class="nav-item">
                                                                                    <a class="nav-link" id="contact-tab"
                                                                                        data-toggle="tab"
                                                                                        href="#contact" role="tab"
                                                                                        aria-controls="contact"
                                                                                        aria-selected="false">Image</a>
                                                                                </li>
                                                                                <li class="nav-item">
                                                                                    <a class="nav-link" id="video-tab"
                                                                                        data-toggle="tab" href="#video"
                                                                                        role="tab" aria-controls="video"
                                                                                        aria-selected="false">Video</a>
                                                                                </li>
                                                                            </ul>
                                                                            <div class="tab-content" id="myTabContent">
                                                                                <div class="tab-pane fade show active"
                                                                                    id="home" role="tabpanel"
                                                                                    aria-labelledby="home-tab">
                                                                                    <div class="twitter-picker ml-4"
                                                                                        style="width:80%; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;">
                                                                                        <div
                                                                                            style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; top: -11px; left: 12px;">
                                                                                        </div>
                                                                                        <div
                                                                                            style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; top: -10px; left: 12px;">
                                                                                        </div>
                                                                                        <div style="padding: 25px 0px 30px 0px;"
                                                                                            class="ml-3"><span>
                                                                                                <div title="#FF6900"
                                                                                                    tabindex="0"
                                                                                                    style="background: rgb(255, 105, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                </div>
                                                                                            </span><span>
                                                                                                <div title="#FCB900"
                                                                                                    tabindex="0"
                                                                                                    style="background: rgb(252, 185, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                </div>
                                                                                            </span><span>
                                                                                                <div title="#2dc464"
                                                                                                    tabindex="0"
                                                                                                    style="background: rgb(45, 196, 100); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                </div>
                                                                                            </span><span>
                                                                                                <div title="#0069ff"
                                                                                                    tabindex="0"
                                                                                                    style="background: rgb(0, 105, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                </div>
                                                                                            </span><span>
                                                                                                <div title="#ABB8C3"
                                                                                                    tabindex="0"
                                                                                                    style="background: rgb(171, 184, 195); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                </div>
                                                                                            </span><span>
                                                                                                <div title="#EB144C"
                                                                                                    tabindex="0"
                                                                                                    style="background: rgb(235, 20, 76); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                </div>
                                                                                            </span><span>
                                                                                                <div title="#5b4b9f"
                                                                                                    tabindex="0"
                                                                                                    style="background: rgb(91, 75, 159); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                </div>
                                                                                            </span><span>
                                                                                                <div title="#8d7260"
                                                                                                    tabindex="0"
                                                                                                    style="background: rgb(141, 114, 96); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                </div>
                                                                                            </span><span>

                                                                                            </span><span>
                                                                                                <div title="#2b2b2b"
                                                                                                    tabindex="0"
                                                                                                    style="background: rgb(43, 43, 43); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                </div>
                                                                                            </span>
                                                                                            <div
                                                                                                style="background: rgb(240, 240, 240); height: 30px; width: 30px; border-radius: 4px 0px 0px 4px; float: left; color: rgb(152, 161, 164); display: flex; align-items: center; justify-content: center;">
                                                                                                #</div>
                                                                                            <div
                                                                                                style="position: relative;">
                                                                                                <input value="0069FF"
                                                                                                    spellcheck="false"
                                                                                                    style="width: 89px; font-size: 14px; color: rgb(102, 102, 102); border: 0px; outline: none; height: 28px; box-shadow: rgb(240, 240, 240) 0px 0px 0px 1px inset; box-sizing: content-box; border-radius: 0px 4px 4px 0px; float: left; ">
                                                                                            </div>
                                                                                            <div style="clear: both;">
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="tab-pane fade" id="profile"
                                                                                    role="tabpanel"
                                                                                    aria-labelledby="profile-tab">
                                                                                    <div class="colorpicker-container ">
                                                                                        <div class="arrow-tip"
                                                                                            style="left: 91px;"></div>
                                                                                        <div class="arrow-content"
                                                                                            style="left: 91px;"></div>
                                                                                        <div class="colorpicker-half">
                                                                                            <div
                                                                                                class="form-details-sidebar-title">
                                                                                                Start</div>
                                                                                            <div class="twitter-picker"
                                                                                                style="width: 276px; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;">
                                                                                                <div
                                                                                                    style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; display: none;">
                                                                                                </div>
                                                                                                <div
                                                                                                    style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; display: none;">
                                                                                                </div>
                                                                                                <div
                                                                                                    style="padding: 15px 9px 9px 15px;">
                                                                                                    <span>
                                                                                                        <div title="#FF6900"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(255, 105, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#FCB900"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(252, 185, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#2dc464"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(45, 196, 100); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#0069ff"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(0, 105, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#ABB8C3"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(171, 184, 195); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#EB144C"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(235, 20, 76); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#5b4b9f"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(91, 75, 159); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#8d7260"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(141, 114, 96); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#ffffff"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(255, 255, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#2b2b2b"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(43, 43, 43); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        style="background: rgb(240, 240, 240); height: 30px; width: 30px; border-radius: 4px 0px 0px 4px; float: left; color: rgb(152, 161, 164); display: flex; align-items: center; justify-content: center;">
                                                                                                        #</div>
                                                                                                    <div
                                                                                                        style="position: relative;">
                                                                                                        <input
                                                                                                            value="22194D"
                                                                                                            spellcheck="false"
                                                                                                            style="width: 100px; font-size: 14px; color: rgb(102, 102, 102); border: 0px; outline: none; height: 28px; box-shadow: rgb(240, 240, 240) 0px 0px 0px 1px inset; border-radius: 0px 4px 4px 0px; float: left; padding-left: 8px;">
                                                                                                    </div>
                                                                                                    <div
                                                                                                        style="clear: both;">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="colorpicker-half">
                                                                                            <div
                                                                                                class="form-details-sidebar-title">
                                                                                                End</div>
                                                                                            <div class="twitter-picker"
                                                                                                style="width: 276px; background: rgb(255, 255, 255); border: 0px solid rgba(0, 0, 0, 0.25); box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px; border-radius: 4px; position: relative;">
                                                                                                <div
                                                                                                    style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgba(0, 0, 0, 0.1); position: absolute; display: none;">
                                                                                                </div>
                                                                                                <div
                                                                                                    style="width: 0px; height: 0px; border-style: solid; border-width: 0px 9px 10px; border-color: transparent transparent rgb(255, 255, 255); position: absolute; display: none;">
                                                                                                </div>
                                                                                                <div
                                                                                                    style="padding: 15px 9px 9px 15px;">
                                                                                                    <span>
                                                                                                        <div title="#FF6900"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(255, 105, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#FCB900"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(252, 185, 0); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#2dc464"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(45, 196, 100); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#0069ff"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(0, 105, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#ABB8C3"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(171, 184, 195); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#EB144C"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(235, 20, 76); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#5b4b9f"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(91, 75, 159); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#8d7260"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(141, 114, 96); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#ffffff"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(255, 255, 255); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span><span>
                                                                                                        <div title="#2b2b2b"
                                                                                                            tabindex="0"
                                                                                                            style="background: rgb(43, 43, 43); height: 30px; width: 30px; cursor: pointer; position: relative; outline: none; float: left; border-radius: 4px; margin: 0px 6px 6px 0px;">
                                                                                                        </div>
                                                                                                    </span>
                                                                                                    <div
                                                                                                        style="background: rgb(240, 240, 240); height: 30px; width: 30px; border-radius: 4px 0px 0px 4px; float: left; color: rgb(152, 161, 164); display: flex; align-items: center; justify-content: center;">
                                                                                                        #</div>
                                                                                                    <div
                                                                                                        style="position: relative;">
                                                                                                        <input
                                                                                                            value="22194D"
                                                                                                            spellcheck="false"
                                                                                                            style="width: 100px; font-size: 14px; color: rgb(102, 102, 102); border: 0px; outline: none; height: 28px; box-shadow: rgb(240, 240, 240) 0px 0px 0px 1px inset; border-radius: 0px 4px 4px 0px; float: left; padding-left: 8px;">
                                                                                                    </div>
                                                                                                    <div style="clear: both;"></div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="tab-pane fade contacts"
                                                                                    id="contact" role="tabpanel"
                                                                                    aria-labelledby="contact-tab">


                                                                                    <div class="bg-upload-wrap">
                                                                                        <div class="arrow-tip"
                                                                                            style="left: 195px;"></div>
                                                                                        <div class="arrow-content"
                                                                                            style="left: 195px;"></div>
                                                                                        <div class="p-relative bg-upload">
                                                                                            <input type="file" class="ava-upload" accept="image/*">
                                                                                            <i class="fas fa-plus fa-10x "></i>
                                                                                        </div>
                                                                                        <div class="p-relative v-line">
                                                                                        </div>
                                                                                        <div class="bg-library">
                                                                                            <i class="far fa-images fa-10x"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="tab-pane fade contacts"
                                                                                        id="video" role="tabpanel"
                                                                                        aria-labelledby="video-tab">
                                                                                    <div class="bg-upload-wrap">
                                                                                        <div class="arrow-tip"
                                                                                            style="left: 280px;"></div>
                                                                                        <div class="arrow-content"
                                                                                            style="left: 280px;"></div>
                                                                                        <div class="p-relative bg-upload">
                                                                                            <input type="file" class="ava-upload" accept="image/*">
                                                                                            <i class="fas fa-plus fa-10x "></i>                                                                                            
                                                                                        </div>
                                                                                        <div class="p-relative v-line">
                                                                                        </div>
                                                                                        <div class="bg-library">
                                                                                            <i class="fas fa-video fa-10x"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                    </b-col>
        
                                                </b-row>
                                    </b-col>
                                   
                                <b-col cols="12" md="8" sm="6">
                                    <div class="tab2-data2 mt-4">
                                        <div class="tab-1">
                                            <div class="float-left mr-1 ml-4 indicator1"></div>
                                            <div class="float-left mr-1 indicator2"></div>
                                            <div class="float-left indicator3"></div>
                                        </div>
                                        <div class="tab2 text-align:center">
                                            <div v-show="!isTruelay" class="chat11">
                                                <img class="image-chat" src="@/assets/favicon.png">
                                                <h1 style="text-align: center; padding-top: 15%">
                                                    <b>{{chat}}</b>
                                                </h1>
                                                <p style="text-align: center; font-size: 20px;">{{subchat}}</p>
                                            </div>
                                            <div v-show="!isChatlay" class="chat22">
                                                <img class="image2-chat" src="@/assets/favicon.png">
                                                <h1 class="icofav"><b>{{chat}}</b></h1>
                                                <p style="margin-left:130px; font-size: 20px;">{{subchat}}</p>
                                            </div>
                                            <div v-show="!isIconlay" class="chat33">            
                                                <div class="imgcol"><img class="image2-chat1" src="@/assets/favicon.png"></div>            
                                                <div class="imgcol2">
                                                    <h1 class="image3-chat">{{chat}}</h1>
                                                    <p style="margin-left:25px; font-size: 20px;">{{subchat}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>

          </div>
</template>

<script>
import Slick from "vue-slick";
import axios from "axios";
import Swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css"



export default {
  name: 'LandingPage',
  components: { Slick,
  Swatches },
  data () {
    return {
        color: '#1CA085',
        image: [],
         newOutput: [],
        isHidden:false,
        isShow:false,
        chat: "Chat",
        subchat: "sub title",
        isTruelay: true,
        isChatlay: true,
        isIconlay: true,
        isActivelay: false,
        isColorlay: false,
        isGreenlay: false,
        slickOptions: {
                        //options can be used from the plugin documentation
                        slidesToShow: 4,
                        infinite: false,
                        accessibility: true,
                        adaptiveHeight: false,
                        arrows: true,
                        dots: false,
                        draggable: true,
                        edgeFriction: 0.30,
                        swipe: true
                    }
               
    }
  },
   mounted() {
    // This will be called when HelloWorld is loaded
    this.getTasks(); // Call our getTasks function below
  },
  methods:{
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
        url: "http://chatbotportal.herokuapp.com/api/avatar/",
        auth: {}
      }).then(response => console.log((this.image = response.data)));
    },
      isLeftlay() {
                    this.isTruelay = false,
                    this.isChatlay = true,
                    this.isIconlay = true,
                    this.isActivelay = !this.isActivelay,  
                    this.isColorlay = false,
                    this.isGreenlay = false    
                  },
                isCenterlay() {
                    this.isTruelay = true,
                    this.isChatlay = false,
                    this.isIconlay = true,
                    this.isColorlay = !this.isColorlay,
                    this.isActivelay = false,
                    this.isGreenlay = false
                },
                isRightlay() {
                    this.isTruelay = true,
                    this.isChatlay = true,
                    this.isIconlay = false,
                    this.isGreenlay = !this.isGreenlay,
                    this.isActivelay = false,
                    this.isColorlay = false        
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
 
}
</script>

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
.backgr{
    background-color: #f4f4f4;
}
.tab1-data1 {
    width: 100%;
    float: left;
    height: 100%;
}
.picker {
    width: 81%;
    height: 40px;
    background: rgb(255, 255, 255);
    /* border: 0px solid rgba(0, 0, 0, 0.25); */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
    border-radius: 4px;
    position: relative;
    margin-left: 30px;
}
.circle {
    float: left;
    margin-top: 7px;
}
.greater {
    margin-left: 65%;
    margin-top: 7px;
}
.greater1 {
    margin-left: 62%;
    margin-top: 7px;
}
.avator {
    display: inline-block;
    width: 100%;
    margin-bottom: 9px;
    margin-left: 30px;
}
.theme {
    display: inline-block;
    margin-top: 5px;
    width: 100%;
    margin-left: 30px;
    margin-bottom: 9px;
}
.pick {
    margin-left: 30px;
}
.tab2-data2 {
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
.tab2 {
    float: left;
    width: 100%;
    background-color: #313F47;
    height: 600px;
}
.chat11 {
    margin-top: 60px;
    background-color: white;
    width: 75%;
    height: 540px;
    margin-left: 100px;
}
.chat22 {
    background-color: white;
    width: 100%;
    height: 600px;
}
.chat33 {
    background-color: white;
    width: 100%;
    height: 600px;
}
.image-chat {
    top: 13%;
    width: 100px;
    position: absolute;
    left: 45%;
}
.image2-chat {
    width: 100px;
    position: absolute;
    margin-top: 165px;
    margin-left: 120px;
}
.imgcol {
    background-color: rgb(183, 209, 243);
    width: 230px;
    height: 450px;
}
.imgcol2 {
    background-color: #313F47;
    width: 230px;
    height: 150px;
    color: white;
}
.img-layout {
    cursor: pointer;
    width: 85px;
    height: 60px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid #ccc;
    border-radius: 5px;
    display: inline-block;
    margin-right: 10px;
}
.image2-chat1 {
    width: 60px;
    position: absolute;
    margin-top: 10px;
    margin-left: 470px;
}
.lright{
  background-image: url('~@/assets/card.png');
}
.lcenter{
  background-image: url('~@/assets/personal.png');
}
.lleft{
  background-image: url('~@/assets/modern.png');
}
.red {
  border: 2px solid #2dc464;
}
.layout:hover {
  border: 2px solid #2dc464;
}
.arrow-content, .arrow-tip {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 9px 10px;
    position: absolute;
    left: 12px;
}

.arrow-tip {
    border-color: transparent transparent rgba(0,0,0,.1);
    top: -11px;
}
.arrow-content, .arrow-tip {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 9px 10px;
  position: absolute;
  left: 12px;
}
.colorpicker-container .colorpicker-half {
  display: inline-block;
  width: 134px!important;
}

.colorpicker-container .twitter-picker {
  width: 100%!important;
  border: none!important;
  -webkit-box-shadow: none!important;
  box-shadow: none!important;
}
.colorpicker-container .colorpicker-half {
  display: inline-block;
  width: 134px!important;
}



.bg-library, .bg-upload {
    display: inline-block;
    height: 90px;
    padding: 10px 20px;
}

.bg-library {
    width: 47%;
}
.bg-library, .bg-upload {
    display: inline-block;
    height: 90px;
    padding: 10px 20px;
}
.bg-library, .bg-upload {
    display: inline-block;
    height: 90px;
    padding: 10px 20px;
}
.bg-upload {
    width: 47%;
}
.bg-library, .bg-upload {
    display: inline-block;
    height: 90px;
    padding: 10px 20px;
}
.p-relative {
    position: relative;
}
.v-line {
    top: 5px;
    width: 2px;
    height: 45px;
    display: inline-block;
    background-color: #ccc;
}
.bg-upload-wrap {
    position: relative;
    margin-right: 6px;
}
.bg-upload-wrap, .profile-upload-wrap {
    cursor: pointer;
    border-radius: 4px;
    background-color: #fff;
}
.arrow-content, .arrow-tip {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 9px 10px;
    position: absolute;
    left: 12px;
}

.arrow-tip {
    border-color: transparent transparent rgba(0,0,0,.1);
    top: -11px;
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

.bg-upload-wrap i {
    margin: auto;
    display: block;
    font-size: 48px;
    text-align: center;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    color: #ccc;
    cursor: pointer;
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
