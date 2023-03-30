Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ""
    };
  },
  methods: {
    addGoal() {
        this.goals.push(this.enteredValue)
        this.enteredValue =''
    }
  }
}).mount('#app');

// const buttenEl = document.querySelector("button");
// const inputEl = document.querySelector('input')
// const listEl = document.querySelector('ul')

// buttenEl.onclick = ()=>{
//     listEl.innerHTML+=`<li>${inputEl.value}</li>`
//     inputEl.value=''

// }
