<template>
  <div class="home">
    <!-- <input type="text" v-model="search">
    <div v-for="day in findet" :key='day'>
      {{day}}

    </div>
    <button @click="stop">Stop</button> -->
    <Content :content="content"/>

  </div>
</template>

<script>
import {ref, computed, watch, watchEffect} from 'vue';
import Content from '../components/Content.vue'

export default {
  name: 'HomeView',
  components: {
    Content
    
  },

  setup() {
  //  const days = ref(['pazartesi', 'sali', 'carsamba', 'persembe', 'cuma']) 
  //  const search = ref('')
  //  const findet = computed(()=>{
  //   return days.value.filter((day)=> day.includes(search.value))
  //  })
  //  const watchs = watch(search, ()=>{
  //   console.log('watch calisti');
  //  })
  //  const watcheffects = watchEffect(()=>{
  //   console.log('wawatch effect calisti', days.value);
  //   console.log('watch effect yeniden calisti',search.value);
  //  })
  //  const stop = ()=>{
  //   watchs()
  //   watcheffects()
  //  }
   
  //  return {days, findet, search,stop}

  const content = ref([
    {id:1, title:'deneme 1', details:'detail 1'},
    {id:2, title:'deneme 2', details:'detail 2'},
    {id:3, title:'deneme 3', details:'detail 3'},
    {id:4, title:'deneme 4', details:'detail 4'}
    ])
    return {content}
    
    }
    
  }

</script>
