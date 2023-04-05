const app = Vue.createApp({
//   template: `
//   <ul>
//   <li v-for='gun in günler'> {{gun}}  </li>
//   </ul>
//     `,
template: `
<ul>
<li v-for='person in persons'>Calisan:{{person.isim}} - Maas:{{person.maas}}  </li>
</ul>
  `,
    data() {
        return{
            // günler:['pazartesi', 'sali', 'carsamba','persembe','cuma', 'cumartesi', 'pazar']
            persons:[
                {isim:'ali', maas:5000},
                {isim:'veli', maas:9000},
                {isim:'deli', maas:20000}

            ]
            

        }
    },
    methods: {
        
        

    }
    
});

app.mount("#app");
