<template>
  <form @submit.prevent="sentData">
    <input type="text" v-model="text">
    <p> {{text}} </p>
    <select v-model="framework">
        <option>Vue</option>
        <option>React</option>
        <option>Svelte</option>
    </select>
    <p> {{framework}} </p>
    <hr>
    <input type="checkbox" id="checkbox1" v-model="checked">
    <label for="checkbox1">Onay</label>
    <p>Sonuc: {{checked ? 'Onayliyorum' : 'Onaylamiyorum'}} </p>
    <br>
    <div>
    <input type="checkbox" id="Vue" value="Vue" v-model="frameworks">
    <label for="Vue">Vue</label> 
    </div>
    <div>
    <input type="checkbox" id="React" value="React" v-model="frameworks">
    <label for="React">React</label> 
    </div>
    <div>
    <input type="checkbox" id="Svelte" value="Svelte" v-model="frameworks">
    <label for="Svelte">Svelte</label> 
    </div>
    <p>Secilen frameworkler: {{frameworks}} </p>
    <hr>
    <h3>Ögrenciler</h3>
    <input type="text" v-model="student" @keyup.alt="addStudent">
    <div v-for="student in students" :key="student">
        <span @click="deleteStudents(student)"> {{student}} </span>
    </div>
    <br>
    <button  >Gönder</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            text:'Bir metin yazin',
            framework:'Framework secin',
            checked:false,
            frameworks: [],
            student: '',
            students: []
        }
    },
    methods: {
        addStudent(e){
            if(e.key==',' && this.student){
                if(!this.students.includes(this.student)){
                    this.students.push(this.student)

                }
                this.student=''
            }

        },
        deleteStudents(student){
            this.students= this.students.filter((item)=>student !== item)


        },
        sentData(){
            console.log('veriler gönderildi');
        }

    },

}
</script>

<style>

</style>