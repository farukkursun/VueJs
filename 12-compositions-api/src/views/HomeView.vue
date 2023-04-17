<template>
  <div class="home">
  <p> {{name}} </p>
  <p >Deneme</p>
  <button @click="clicked" ref="info"> click</button>
  <input type="text" v-model="name">
    
  </div>
</template>

<script>
import {ref} from 'vue';


export default {
  name: 'HomeView',
  components: {
    
  },

  setup() {
    const name =ref('faruk');
   

    

    const clicked = ()=>{
      name.value='Fatma'
      console.log(name, name.value);
      
    }
    return { name,  clicked}
  }
}
</script>
