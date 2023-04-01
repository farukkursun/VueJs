const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmname: '',
    };
  },
  methods: {
    add() {
      this.counter++;
    },
    remove(num) {
      // this.counter = this.counter-1
      this.counter = this.counter - num;
    },
    setName(event,lastName) {
      this.name = event.target.value + ' ' + lastName ;
    },
    submitForm() {
      // event.preventDefault() bunun yerine HtMl de modifiler kullanilabilir V-On:submit.prevent
      alert('submitted!')
    }, 
    confirmInput() {
      this.confirmname = this.name
    }
  },
});

app.mount("#events");
