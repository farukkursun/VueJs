<template>
<div>
   <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <!-- yukarida reuterin path ile kullanimi var name ile de kullanilabilir index.js de her iki örnege yer verilmis asagida name ile örnrk yapacagiz -->
      <router-link :to="{name:'home'}">Home</router-link> | 
      <router-link :to="{name:'about'}">About</router-link> |
      <router-link :to="{name:'students'}">Students</router-link>
      <!-- baskayol -->
      <!-- <router-link :to="{path:'/'}">Home</router-link> |
      <router-link :to="{path:'/about'}">About</router-link> -->
  </nav>
  <div>
    <span @click="anasayfa">Anasayfa</span>
    <span @click="geri">Geri</span>
    <span @click="ileri"> Ileri</span>
  </div>
  <router-view/>
</div>
 
</template>

<script>
  export default {
    methods: {
      anasayfa(){
        this.$router.push({name:'home'})

      },
      geri(){
        this.$router.go(-1)
      },
      ileri(){
        this.$router.go(1)
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
span{
  padding: 20px 10px;
  cursor: pointer;
}
</style>
