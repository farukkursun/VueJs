<template>
  <div class="home">
  <p> {{name}} - {{job}} </p>
  <p ref="info">Deneme</p>
  <button @click="clicked"> click</button>
    
  </div>
</template>

<script>
import {ref} from 'vue';


export default {
  name: 'HomeView',
  components: {
    
  },

  setup() {
    const name ='faruk';
    const job = 'developer';

    const info = ref(null)

    const clicked = ()=>{
      // console.log('tiklandi');
      console.log(info, info.value);
    }
    return { name, job, clicked, info}
  }
}
</script>
