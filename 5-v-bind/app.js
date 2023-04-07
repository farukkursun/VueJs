const app = Vue.createApp({
template: `
<div :style='style'>Deneme Yazisi</div>

  `,
    data() {
        return{
            style:'color:green'
            
            

        }
    },
    methods: {
        
        

    }
    
});

app.mount("#app");
