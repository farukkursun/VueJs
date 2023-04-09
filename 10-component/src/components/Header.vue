// slot ile header componentine gönderilecek verileri props ile almadan alabiliyoruz. Bunun icin gönderilen yede kompenent etiket olarak yaziliyor arasina yazilan her sey slot ile aliniyor
<template>
  <div>
    <slot></slot>
    <!-- <h1> {{content}} </h1> -->
    <hr>
    <input type="text" v-model="name">
    <input type="text" v-model="surname">
    <p> {{nameSurname}} </p>
  </div>
</template>

<script>
export default {
    // props:['content']
    data() {
        return {
            name:'',
            surname:''
        }
    },
    computed: {
        nameSurname(){
            return this.name + ' ' + this.surname


        }
    },

}
</script>

<style>

</style>