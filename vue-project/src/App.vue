<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <about props="Props"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld/HelloWorld.vue'
import about from './components/about/about.vue'


export default {
  name: 'app',
  components: {
    HelloWorld,
    about
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


img {
  width: 100px;
}
</style>
