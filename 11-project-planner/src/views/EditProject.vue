<template>
   <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required>
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
    props:['id'],
    data() {
        return {
            title:'',
            details:'',
            url:'http://localhost:3000/projects/'+ this.id
        }
    },
    mounted() {
        fetch(this.url).then((res)=>res.json()).then((data)=>{
            this.title=data.title
            this.details=data.details
        })
    },
    methods: {
      handleSubmit(){
        fetch(this.url,{
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title:this.title, details:this.details})
        }).then(()=>this.$router.push('/')).then((err)=>console.log(err))

      }

    },

}
</script>

<style>
form{
  background: #fff;
  padding: 20px;
  border-radius: 10px;
}
label{
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input{
  padding: 10px;
  border: 0;
  border-bottom: 2px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea{
  border: 2px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button{
  display: block;
  margin: 20px auto 0;
  background: #09c018;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
}
</style>