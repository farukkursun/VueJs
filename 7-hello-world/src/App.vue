<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="merhaba">merhaba</div>
  <div style="color:#42b983;background:#2c3e50">merhaba</div>
  <h1> {{mesaj}} </h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      mesaj:'data mesaji'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
.merhaba{
  background-color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
