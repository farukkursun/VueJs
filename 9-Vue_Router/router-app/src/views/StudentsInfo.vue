<template>
  <div>
    <h3>
        Ögrenci Bilgi Sayfasi
    </h3>
    <!-- <p>Ögrenci ID {{studentsID}}</p> -->
    <p> Ögrenci ID: {{id}} </p>
  </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         studentsID:this.$route.params.id
    //     }
    // },
    // id alma altarnatif yolu
    props:['id']

}
</script>

<style>

</style>