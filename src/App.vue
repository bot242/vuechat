<template>
  <div id="app">
    
<Nave/>
<Tab/>
  </div>
</template>

<script>
import Nave from './components/Nave'
import Tab from './components/Tab'
export default {
  name: 'App',
  components:{
    Nave,
    Tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}
</style>
