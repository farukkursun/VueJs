<template>
  <div class="home">
  <p> {{name}} - {{job.name}} </p>
  <p >Deneme</p>
  <button @click="clicked" ref="info"> click</button>
  <input type="text" v-model="name">
    
  </div>
</template>

<script>
import {ref, reactive} from 'vue';


export default {
  name: 'HomeView',
  components: {
    
  },

  setup() {
    const name =ref('faruk');
    const job = reactive({name:'developer'})
   

    

    const clicked = ()=>{
      name.value='Fatma'
      job.name='frontend developer'
      console.log(name, name.value);
      
    }
    return { name, job, clicked}
  }
}
</script>
