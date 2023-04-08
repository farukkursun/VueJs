<template>
  <div>
    <h3>
        Ögrenci Bilgi Sayfasi
    </h3>
    <p>Ögrenci ID {{srudentsID}}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            srudentsID:this.$route.params.id
        }
    },

}
</script>

<style>

</style>