<template>
  <div>
    <h3> {{ titleText }} </h3>
    <h4> {{ text }} </h4>
  </div>
</template>

<script>
export default {
  props:['titleText','text'],
    data() {
        return {
           
        }
    },

}
</script>

<style scoped>
h3{
  color:red;
  font-size: 56px;
}

</style>