const app = Vue.createApp({
  template: `
    <h2>Baslik: {{baslik}} </h2>
    <h3>icerik: {{icerik}} </h3>
    <p> yorum sayisi: {{yorumSayisi}} </P>
    <button v-on:click='ekle()'> Ekle</button>
    <p> {{yazi}} </p>
    `,
    data() {
        return{
            baslik:'Vue dersleri',
            icerik: 'Vue 3 Konulari',
            yorumSayisi:0,
            yazi:'yorum eklemek icin tikla'

        }
    },
    methods: {
        ekle() {
            console.log('merhaba');
            this.yorumSayisi++
            this.yazi=` ${this.yorumSayisi} tane yorum girildi `
        }

    }
    
});

app.mount("#app");
