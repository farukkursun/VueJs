<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="merhaba">merhaba</div>
  <div style="color:#42b983;background:#2c3e50">merhaba</div>
  <h1> {{mesaj}} </h1>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
 <img v-bind:src='imgUrl' >
 <img :src="imgUrl">
  <div :class="test">Bind ile calss verme</div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      test:'bindclass',
      imgUrl:'http://espassanat.com/wp-content/uploads/2016/07/resim-kursu-bal%C3%A7ova.jpg',
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
  background-color:blue
}
.bindclass{
  background-color: yellow;
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
