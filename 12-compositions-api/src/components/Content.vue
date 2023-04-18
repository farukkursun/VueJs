<template>
<div>
     <div v-for="con in content" :key="con.id">
        {{con.title}}

  </div>
</div>
 
</template>

<script>
export default {
    props: ['content'],
    setup(props) {
        console.log(props.content);
        
    }

}
</script>

<style>

</style>