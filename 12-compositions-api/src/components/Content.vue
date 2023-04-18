<template>
<div>
     <div v-for="content in contents" :key="content.id">
        {{content.title}}
       </div>
   <div v-if="err">
            {{err}}
        </div>
</div>
 
</template>

<script>
import {ref} from 'vue'
export default {
    // props: ['content'],
    setup() {
        const contents =ref([])
        const err = ref(null)
        const getcontents = async ()=> {
            try {
             const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            contents.value = await data.json()
            console.log(data.ok);

            if(!data.ok){
                throw new Error("Verilere Erisilemedi");
            }   
            } catch (error) {
                err.value = error.message
                console.log(error.message);
                
            }
            
        }
        getcontents()
        return { contents,err}
       
        
    }

}
</script>

<style>

</style>