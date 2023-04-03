const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullname() {
      console.log("merhabalar");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Kursun";
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullname() {
      console.log("merhabalar");

      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Kursun";
    },
  },
});

app.mount("#events");
