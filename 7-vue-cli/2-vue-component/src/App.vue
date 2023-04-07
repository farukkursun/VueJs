<template>
  <div>
    <Title :titleText="text" :text="text2"/>
    <h3>App Vue Baslik</h3>
  </div>
</template>

<script>

import Title from './components/Title-Vue'
export default {
  name: 'App',
  components:{
    Title
  },
  data() {
    return {
      text:'Vue 3 giris',
      text2:'Vue text deneme'
    }
  },
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
