<template>
  <div class="home">
    <input type="text" v-model="search">
    <div v-for="day in findet" :key='day'>
      {{day}}

    </div>
    <button @click="stop">Stop</button>
    
  </div>
</template>

<script>
import {ref, computed, watch, watchEffect} from 'vue';


export default {
  name: 'HomeView',
  components: {
    
  },

  setup() {
   const days = ref(['pazartesi', 'sali', 'carsamba', 'persembe', 'cuma']) 
   const search = ref('')
   const findet = computed(()=>{
    return days.value.filter((day)=> day.includes(search.value))
   })
   const watchs = watch(search, ()=>{
    console.log('watch calisti');
   })
   const watcheffects = watchEffect(()=>{
    console.log('wawatch effect calisti', days.value);
    console.log('watch effect yeniden calisti',search.value);
   })
   const stop = ()=>{
    watchs()
    watcheffects()
   }
   
   return {days, findet, search,stop}
    
    }
    
  }

</script>
