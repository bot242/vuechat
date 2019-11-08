<template>
  <div class="row">
    <div class="col-3">
      <h3>Draggable 1</h3>
      <!-- <draggable
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @change="log"
      > -->
      <button @click="simple1"> Add</button>
      <button @click="simple2"> Add</button>
      <button @click="simple3"> Add</button>
      <button @click="simple4"> Add</button>
      <button @click="simple5"> Add</button>


        <div
          class="card-shadow question-list s"
          v-for="element in list1"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      <!-- </draggable> -->
    </div>

    <div class="col-3">
      <h3>Draggable 2</h3>
      <!-- <draggable
        class="dragArea list-group"
        :list="list2"
        group="people"
        @change="log"
      > -->
        <div class="list-group-item" v-for="element in list2" :key="element.name" >
          <div class="item">
                    <div class="item-question showhim">
                      <div class="toolbar-header showme">
                        <div class="toolbar-header-buttons">
                          <div
                            class="btn is-isolated btn-school hint--bottom change"
                            aria-label="Edit"
                          >
                            <i class="fas fa-pen" @click=" runMethod (s)"></i>
                          </div>
                          <div
                            class="btn is-isolated btn-school arrow-btn hint--bottom change"
                            aria-label="Drag to Move"
                          >
                             <i :class="value"></i>                            
                          </div>
                          <div
                            class="btn is-isolated btn-school hint--bottom change delete"
                            aria-label="Delete"
                          >
                            <i class="fas fa-trash-alt"></i>
                          </div>
                        </div>
                      </div>
                      <i class="fas fa-quote-left"></i>
                    </div>
                  </div>
          {{ element.name }}
        </div>
        <div v-if="showModal">
                  <div class="modal-mask">
                    <div class="edit-form">
                      <button
                        class="pull-right btn btn-success float-right"
                        @click="showModal=false"
                        style="margin-top: 15px;margin-right: 15px;"
                      >Done</button>
                      <Ranging />
                    </div>
                  </div>
                </div>
        

      <!-- </draggable> -->
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />

    <rawDisplayer class="col-3" :value="list2" title="List 2" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "clone",
  display: "Clone",
  order: 2,
  components: {
    draggable
  },
  data() {
    return {
      count:0,
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
      ],
      showModal: false,
      value:'',
      s:"showModal"
    };
  },
  created(){
let a= "fas fa-expand-arrows-alt"
this.value=a

  },
  methods: {
    
runMethod (method) {
  this[method]()
},

    log: function(evt) {
      window.console.log(evt);
    },
 
  simple1() {
    let a = this.count ++
    console.log('***',a)
    let main ={ name:'jon',id: a ,icon:this.s}
    this.list2.push(main)
  },
  simple2() {
    let a = this.count ++
    console.log('***',a)
    let main ={ name:'sam',id: a}
    this.list2.push(main)
  },
  simple3() {
    let a = this.count ++
    console.log('***',a)
    let main ={ name:'don',id: a}
    this.list2.push(main)
    console.log("####",this.list2)
  },
  simple4() {
    let a = this.count ++
    console.log('***',a)
    let main ={ name:'fun',id: a}
    this.list2.push(main)
  },
  simple5() {
    let a = this.count ++
    console.log('***',a)
    let main ={ name:'bun',id: a}
    this.list2.push(main)
  },
   }
};
</script>
<style scoped> 
.s{
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

</style>
