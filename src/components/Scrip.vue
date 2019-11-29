<template>
  <div class="main">
    <div class="form-builder">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row>
        <b-col cols="12" md="4" sm="9">
          <div class="form-builder-toolbar pull-left not-selectable form-builder-toolbar-sticky">
            <h4></h4>
            <b-row>
              <b-col cols="6" md="6" sm="6">
                <ul>
                  <li class="card-shadow question-list" @click="addRow">
                    <i class="fas fa-quote-left"></i>
                    Message
                  </li>
                  <li class="card-shadow question-list" @click="addText">
                    <i class="fas fa-comment-alt"></i>
                    Text Question
                  </li>

                  <li class="card-shadow question-list" @click="addDate">
                    <i class="far fa-calendar-alt"></i>
                    Date
                  </li>

                  <li class="card-shadow question-list" @click="addSelect">
                    <i class="fas fa-check-circle"></i>
                    Multi Select
                  </li>

                  <li class="card-shadow question-list" @click="addNumber">
                    <i class="fas fa-hashtag"></i>
                    Number
                  </li>

                  <li class="card-shadow question-list" @click="addRating">
                    <i class="fas fa-star-half-alt"></i>
                    Rating
                  </li>

                  <li class="card-shadow question-list" @click="addLink">
                    <i class="fas fa-link"></i>
                    Links
                  </li>
                </ul>
              </b-col>

              <b-col cols="6" md="6" sm="6">
                <ul>
                  <li class="card-shadow question-list" @click="addOption">
                    <i class="far fa-stop-circle"></i>
                    Multi Choice
                  </li>

                  <li class="card-shadow question-list" @click="addEmail">
                    <i class="fas fa-envelope-square"></i>
                    Email
                  </li>

                  <li class="card-shadow question-list" @click="addBooking">
                    <i class="far fa-clock"></i>
                    Appointment
                  </li>

                  <li class="card-shadow question-list" @click="addList">
                    <i class="far fa-list-alt"></i>
                    List
                  </li>

                  <li class="card-shadow question-list" @click="addRange">
                    <i class="fas fa-sliders-h"></i>
                    Range
                  </li>

                  <li class="card-shadow question-list" @click="addScale">
                    <i class="fas fa-tachometer-alt"></i>
                    Opinion Scale
                  </li>

                  <li class="card-shadow question-list" @click="addFile">
                    <i class="fas fa-upload"></i>
                    File Upload
                  </li>
                </ul>
              </b-col>
            </b-row>

            <div>
              <p style="font-size: 15px; margin-top: 10px;">
                <a href="https://help.collect.chat/container/show/script-types" target="_blank">
                  Learn
                  about
                  script types
                </a>
              </p>
              <a href="/5d6605aac153a1688892bbd2/builder/preview">
                <button class="btn btn-blue form-big-input w-200">Preview Bot</button>
              </a>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="8" sm="9">
          <div class="form-builder-preview pull-right card-shadow">
            <div class="edit-form"></div>
            <div class="ui-sortable vertical-container">
              <draggable>
                <div v-for=" totals in total " v-bind:key="totals">
                  {{ totals.id }}
                  <div class="item">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school hint--bottom change"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showModal = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school arrow-btn hint--bottom change"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school hint--bottom change delete"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteRow(input,index )"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-quote-left"></i>
                    </div>
                  </div>
                </div>

                <div v-if="showModal">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showModal=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Message />
                    </div>
                  </div>
                </div>

                <!-- message end -->

                <!-- text start -->
                <div v-for=" totals in total " v-bind:key="totals">
                  {{ totals.id }}
                  <div class="item">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school hint--bottom change"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showText = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school arrow-btn hint--bottom change"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school hint--bottom change"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteText(index2)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-comment-alt"></i>
                    </div>
                  </div>
                </div>
                <div v-if="showText">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showText=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <TextEditor />
                    </div>
                  </div>
                </div>

                <!-- text end -->

                <!-- date start  -->

                <div class="item" v-for="(date, index3) in dates" v-bind:key="index3.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addDate"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showDate = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteDate(index3)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-calendar-alt"></i>
                      <label class="static">select a date</label>
                    </div>
                  </div>
                </div>
                <div v-if="showDate">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showDate=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Date />
                    </div>
                  </div>
                </div>

                <!-- date end -->

                <!-- multi select start-->

                <div class="item" v-for="(select, index4) in selects" v-bind:key="index4.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addSelect"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showSelect = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteSelect(index4)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-check-circle"></i>
                      <label class="static">select your choices</label>
                    </div>
                  </div>
                </div>
                <div v-if="showSelect">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showSelect=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Select />
                    </div>
                  </div>
                </div>

                <!-- multi select end -->

                <!-- number start -->

                <div class="item" v-for="(numbers, index5) in number" v-bind:key="index5.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addNumber"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showNumber = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteNumber(index5)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-hashtag"></i>
                      <label class="static">choose a number</label>
                    </div>
                  </div>
                </div>
                <div v-if="showNumber">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showNumber=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Number />
                    </div>
                  </div>
                </div>

                <!-- number end -->

                <!-- ratings start -->

                <div class="item" v-for="(rate, index6) in rating" v-bind:key="index6.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addRating"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showRating = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteRating(index6)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-star-half-alt"></i>
                      <label class="static">How was your experience?</label>
                    </div>
                  </div>
                </div>
                <div v-if="showRating">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showRating=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Ratinng />
                    </div>
                  </div>
                </div>

                <!-- ratings end -->

                <!-- link start -->

                <div class="item" v-for="(link, index7) in links" v-bind:key="index7.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addLink"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showLink = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteLink(index7)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-link"></i>
                      <label class="static">
                        please
                        contact us
                      </label>
                    </div>
                  </div>
                </div>
                <div v-if="showLink">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showLink=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Link />
                    </div>
                  </div>
                </div>

                <!-- link end -->

                <!-- option start -->

                <div class="item" v-for="(option, index8) in options" v-bind:key="index8.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addOption"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showOption = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteOption(index8)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-stop-circle"></i>
                      <label class="static">select an option</label>
                    </div>
                  </div>
                </div>
                <div v-if="showOption">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showOption=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Moption />
                    </div>
                  </div>
                </div>

                <!-- option end -->

                <!-- email start -->

                <div class="item" v-for="(email, index9) in emails" v-bind:key="index9.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addEmail"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showEmail = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteEmail(index9)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-envelope"></i>
                      <label class="static">
                        What is
                        your email address?
                      </label>
                    </div>
                  </div>
                </div>
                <div v-if="showEmail">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showEmail=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Email />
                    </div>
                  </div>
                </div>
                <!-- email end -->

                <!-- booking start -->

                <div class="item" v-for="(book, index10) in booking" v-bind:key="index10.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addBooking"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showBooking = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteBooking(index10)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-clock"></i>
                      <label class="static">
                        Book
                        an appointment/meeting
                      </label>
                    </div>
                  </div>
                </div>
                <div v-if="showBooking">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showBooking=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Booking />
                    </div>
                  </div>
                </div>

                <!-- booking end -->

                <!-- list start -->

                <div class="item" v-for="(lists, index11) in list" v-bind:key="index11.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addList"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showList = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteList(index11)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-clipboard-list"></i>
                      <label class="static">Type and select your answer</label>
                    </div>
                  </div>
                </div>
                <div v-if="showList">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showList=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Lining />
                    </div>
                  </div>
                </div>

                <!-- list end -->

                <!-- range start -->

                <div class="item" v-for="(range, index12) in range" v-bind:key="index12.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addRange"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showRange = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteRange(index12)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-sliders-h"></i>
                      <label class="static">Select a range</label>
                    </div>
                  </div>
                </div>
                <div v-if="showRange">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showRange=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Ranging />
                    </div>
                  </div>
                </div>

                <!-- range end -->

                <!-- scale start -->

                <div class="item" v-for="(scales, index13) in scale" v-bind:key="index13.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addScale"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showScale = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt" @click="deleteScale(index13)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-tachometer-alt"></i>
                      <label class="static">
                        How likely do you recommend us to a friend
                        or colleague
                      </label>
                    </div>
                  </div>
                </div>
                <div v-if="showScale">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showScale=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Scale />
                    </div>
                  </div>
                </div>

                <!-- scale end  -->

                <!-- file start -->

                <div class="item" v-for="(files, index14) in file" v-bind:key="index14.id">
                  <div class="clearfix">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Duplicate"
                          >
                            <i class="fas fa-copy" @click="addFile"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom logic-active"
                            aria-label="Logical Jump"
                          >
                            <i class="fas fa-random"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change hint--bottom"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click="showFile = true"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school change arrow-btn hint--bottom"
                            aria-label="Drag to Move"
                          >
                            <i class="fas fa-expand-arrows-alt"></i>
                          </div>
                          <div class="btn is-isolated btn-school hint--bottom" aria-label="Delete">
                            <i class="fas fa-trash-alt" @click="deleteFile(index14)"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-upload"></i>
                      <label class="static">Upload file</label>
                    </div>
                  </div>
                </div>
                <div v-if="showFile">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showFile=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Uploade />
                    </div>
                  </div>
                </div>
              </draggable>
            </div>
            <div id="END"></div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Message from "./Message";
import TextEditor from "./TextEditor";
import Date from "./Date";
import Select from "./Select";
import Number from "./Number";
import Ratinng from "./Ratinng";
import Link from "./Link";
import Moption from "./Moption";
import Email from "./Email";
import Booking from "./Booking";
import Lining from "./Lining";
import Ranging from "./Ranging";
import Scale from "./Scale";
import Uploade from "./Uploade";

export default {
  name: "Scrip",
  components: {
    draggable,
    Message,
    TextEditor,
    Date,
    Select,
    Number,
    Ratinng,
    Link,
    Moption,
    Email,
    Booking,
    Lining,
    Ranging,
    Scale,
    Uploade
  },
  data() {
    return {
      total: [],
      inputs: [],
      count: 0,
      ass: [],
      use: "Message",
      field2: "sadas",
      field3: "4",
      field4: "0",
      bot:
        "http://192.168.100.144:8001/api/bot/" +
        localStorage.getItem("bot_id") +
        "/",
      user:
        "http://192.168.100.144:8001/api/user/" +
        localStorage.getItem("id") +
        "/",
      // aan: [],
      user_id: localStorage.getItem("id"),
      bot_id: localStorage.getItem("bot_id"),
      field7: "0",
      texts: [],
      dates: [],
      selects: [],
      number: [],
      rating: [],
      links: [],
      options: [],
      emails: [],
      booking: [],
      list: [],
      range: [],
      scale: [],
      file: [],
      sel: [],
      mcho: [],
      botcount: null,
      showModal: false,
      showText: false,
      showDate: false,
      showSelect: false,
      showNumber: false,
      showRating: false,
      showLink: false,
      showOption: false,
      showEmail: false,
      showBooking: false,
      showList: false,
      showRange: false,
      showScale: false,
      showFile: false,
      showDesign: false,
      showContent: false
    };
  },
  created() {
    console.log("type");
  },
  methods: {
    addRow() {
      let s = "Message";
      let a = this.count ++
      let main = { id: this.count++, inputtypeid: s , id: a };
      this.total.push(main);
      console.log("####", this.total);
    },
    addText() {
      let s = "TextQuestion";
      let a = this.count ++
      let main = { id: this.count++, inputtypeid: s,id:a };
      this.total.push(main);
      console.log("####", this.total);
    },
    addDate() {
      let s = "Date";
      let aan=[]
      let  ico=null
      this.dates.push({ id: this.count++, inputtypeid: s });
      this.dates.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
           inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: aan,
          icon:ico
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
      this.axios
          .get("http://192.168.100.144:8001/api/botdetails/144/4/")        
          
           .then(response =>
          console.log("aassssssssss", (this.botcount = response.data)),
       
        );
    },
    addSelect() {
      let s = "MultiSelect";
      
      this.selects.push({ id: this.count++, inputtypeid: s });
      this.selects.forEach(res => {
        let ass = res.inputtypeid;
        
        let obj = {
          
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addNumber() {
      let s = "Number";
      this.number.push({ id: this.count++, inputtypeid: s });
      this.number.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: this.aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addRating() {
      let s = "Rating";
      this.rating.push({ id: this.count++, inputtypeid: s });
      this.rating.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: this.aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addLink() {
      let s = "Links";
      this.links.push({ id: this.count++, inputtypeid: s });
      this.links.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: this.aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addOption() {
      let s = "MultiChoice";
      let aan=[]
      let  ico=null
        console.log('ssas',s)
      this.options.push({ id: this.count++, inputtypeid: s });
      this.options.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: aan,
          icon:ico
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addEmail() {
      let s = "Email";
      this.emails.push({ id: this.count++, inputtypeid: s });
      this.emails.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: this.aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addBooking() {
      let s = "Appointment";
      this.booking.push({ id: this.count++, inputtypeid: s });
      this.booking.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: this.aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addList() {
      let s = "List";
      this.list.push({ id: this.count++, inputtypeid: s });
      this.list.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: this.aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addRange() {
      let s = "Range";
      this.range.push({ id: this.count++, inputtypeid: s });
      this.range.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: this.aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addScale() {
      let s = "OpinionScale";
      this.scale.push({ id: this.count++, inputtypeid: s });
      this.scale.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: this.aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addFile() {
      let s = "FileUpload";
      this.file.push({ id: this.count++, inputtypeid: s });
      this.file.forEach(res => {
        let ass = res.inputtypeid;
        let obj = {
          inputtypeid: ass,
          placeholder: this.field2,
          position: this.field3,
          eoc: this.field4,
          bot: this.bot,
          user: this.user,
          is_subquestion: this.field7,
          subquestion: this.aan
        };
        console.log("s", obj);
        this.axios
          .post("http://192.168.100.144:8001/api/script/", obj, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Content-Type": "application/json"
            }
          })
          .then(function(data) {
            console.log(data.data);
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      });
    },
    addSel() {
      this.sel.push({});
    },
    addMcho() {
      this.mcho.push({});
    },
    deleteMcho(mcho) {
      this.mcho.splice(mcho, 1);
    },
    deleteSel(link) {
      this.sel.splice(link, 1);
    },
    deleteRow: function(input, index) {
      if (this.inputs[index] === input) {
        console.log(this.inputs.splice(index, 1));
      } else {
        let found = this.inputs.indexOf(input);
        this.inputs.splice(found, 1);
      }
    },
    deleteText(index2) {
      this.texts.splice(index2, 1);
    },
    deleteDate(index3) {
      this.dates.splice(index3, 1);
    },
    deleteSelect(index4) {
      this.selects.splice(index4, 1);
    },
    deleteNumber(index5) {
      this.number.splice(index5, 1);
    },
    deleteRating(index6) {
      this.rating.splice(index6, 1);
    },
    deleteLink(index7) {
      this.links.splice(index7, 1);
    },
    deleteOption(index8) {
      this.options.splice(index8, 1);
    },
    deleteEmail(index9) {
      this.emails.splice(index9, 1);
    },
    deleteBooking(index10) {
      this.booking.splice(index10, 1);
    },
    deleteList(index11) {
      this.list.splice(index11, 1);
    },
    deleteRange(index12) {
      this.range.splice(index12, 1);
    },
    deleteScale(index13) {
      this.scale.splice(index13, 1);
    },
    deleteFile(index14) {
      this.file.splice(index14, 1);
    }
  }
};
</script>
<style scoped>
.form-builder {
  background-color: #f4f4f4;
}
.form-builder .form-builder-toolbar {
  width: 100%;
  text-align: center;
  transition: top 0.5s ease;
  float: left;
}
.form-builder .form-builder-toolbar h4 {
  margin-top: 0;
  text-align: center;
}
.form-builder .form-builder-toolbar ul {
  padding: 0;
  text-align: left;
}
.form-builder .form-builder-toolbar ul li {
  cursor: pointer;
  float: left;
  width: 100%;
  margin: 1%;
  list-style: none;
  padding: 10px 5px;
  background: #fff;
  border-radius: 3px;
  margin-bottom: 5%;
}

.form-builder .card-shadow:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  background-color: rgb(212, 211, 212);
}
.form-builder .form-builder-preview {
  position: relative;
  width: 120%;
  border-radius: 3px;
  background: #fff;
  padding: 10px;
  min-height: 650px;
  float: right;
  margin-top: 11px;
  overflow: auto;
  margin-bottom: 10px;
}

.form-builder .card-shadow {
  transition: box-shadow 0.3s;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: rgb(212, 211, 212);
  float: left;
}
.item-question {
  clear: both;
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  border-radius: 1.3em;
  font-size: 15px;
  margin-top: 5px;
}
.showme {
  display: none;
  float: right;
}
.showhim:hover .showme {
  display: block;
}
.showhim:hover {
  background: white;
}
.row-cols {
  margin-top: 30px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  float: left;
  left: 50%;

  width: 50%;
  height: 100%;
  background-color: #f4f4f4;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.done {
  float: right;
}
.modal-dialog {
  width: 100%;
  height: 100%;
  max-width: none;
}
.modal-content {
  height: 100%;
}
.modal-header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: none;
  border-top-left-radius: none;
  border-top-right-radius: none;
}
.btn-blue {
  background-color: #0647a5;
  border-color: #0647a5;
  color: #fff;
}
.btn-blue:hover {
  color: #fff;
}
.main {
  width: 85%;
  padding-left: 2%;
}
.change {
  padding-left: 0px !important;
}
.delete {
  padding-right: unset;
}
</style>