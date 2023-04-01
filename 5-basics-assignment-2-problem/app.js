const app = Vue.createApp({
  data() {
    return {
      autput: "",
      enterautput: "",
    };
  },
  methods: {
    alertSet() {
      alert("merhaba");
    },
    setAutput(event) {
      this.autput = event.target.value;
    },
    setEnterAutput() {
      this.enterautput = this.autput;
    },
  },
});

app.mount("#assignment");
