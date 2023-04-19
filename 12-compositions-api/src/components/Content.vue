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
import  getContentsFetch  from "../composables/getContentsFetch";
import {useRoute, useRouter} from 'vue-router'
export default {
    // props: ['content'],
    setup() {
        // const contents =ref([])
        // const err = ref(null)
        // const getContents = async ()=> {
        //     try {
        //      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        //     contents.value = await data.json()
        //     console.log(data.ok);

        //     if(!data.ok){
        //         throw new Error("Verilere Erisilemedi");
        //     }   
        //     } catch (error) {
        //         err.value = error.message
        //         console.log(error.message);
                
        //     }
            
        // }

        const route = useRoute()
        const router = useRouter()
        console.log('route',route);
        console.log('router', router);
        const {contents, err, getContents} = getContentsFetch();
        getContents()
        return { contents,err}
       
        
    }

}
</script>

<style>

</style>