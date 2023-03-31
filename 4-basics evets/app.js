const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
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
  },
});

app.mount("#events");
