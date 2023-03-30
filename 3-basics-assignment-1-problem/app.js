const app = Vue.createApp({
  data() {
    return {
      meinName: "Faruk",
      meinAge: 45,
      imageUrl:'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
     
    };
  },
  methods:{
    meinagearti(){
       return this.meinAge+5
    },
    randomNumber() {
      return  Math.random()

    }
  }
});

app.mount("#assignment");
