<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

   
    <about v-for='user in users'
      :name='user.name'
      :description='user.description'
      :key='user.name'
    />

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
  },
  data () {
    return {
      message: 'Hello',
      users: [
        {name: 'Camry', description: 'Welcome to business class. '},
        {name: 'Jack', description: 'This is our manager'},
        {name: 'John', description: 'This is our client'},
      ]
    }
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
