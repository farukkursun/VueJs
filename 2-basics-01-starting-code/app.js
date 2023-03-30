const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "nndndnhdndh",
      courseGoalB: 'nnnnnnnnnnnnnnnn',
    //   courseGoalB: '<h2>nnnnnnnnnnnnnnnn</h2>',
      vueLink: "https://vuejs.org",
    };
  },
  methods:{
    outputGoal() {
        const randomNumber = Math.random()
        // if(randomNumber<0.5){
        //     return 'Learn Vue';
        // }else {
        //     return 'master Vue'
        // }
        if (randomNumber<0.5){
            return this.courseGoalA
        }else{
            return this.courseGoalB
        }

    }
  }
});

app.mount("#user-goal");
