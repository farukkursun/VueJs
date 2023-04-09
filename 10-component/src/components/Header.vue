// slot ile header componentine gönderilecek verileri props ile almadan alabiliyoruz. Bunun icin gönderilen yede kompenent etiket olarak yaziliyor arasina yazilan her sey slot ile aliniyor
<template>
  <div>
    <slot></slot>

    <!-- <h1> {{content}} </h1> -->
  </div>
</template>

<script>
export default {
    // props:['content']

}
</script>

<style>

</style>