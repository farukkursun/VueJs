<template>
  <div class="home">
    <input type="text" v-model="search">
    <div v-for="day in findet" :key='day'>
      {{day}}

    </div>
  
    
  </div>
</template>

<script>
import {ref, computed} from 'vue';


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
   return {days, findet, search}
    
    }
    
  }

</script>
