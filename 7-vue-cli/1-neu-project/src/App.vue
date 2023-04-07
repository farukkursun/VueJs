<template>
  <div>
    <h3> {{title}} </h3>
    <input type="text" ref="name">
    <br> <br>
    <input type="text" ref="password">
    <br> <br>
    <button @click="login">Giris</button>
    <br>
    <p v-if="isLogin"> Gris Basarili  </p>
    <p v-else> Gris Basarisiz  </p>
  </div>

  
</template>

<script>


export default {
  name: 'App',
  data() {
    return{
      title:'login',
      name:'Varol',
      password:'1234',
      isLogin:true

    }
  },
  methods: {
    login(){
      // console.log(this.$refs.password.value);
      return this.$refs.name.value === this.name && this.$refs.password.value === this.password ? this.isLogin = true : this.isLogin = false
      

    }
   

  }
 
  
  
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
