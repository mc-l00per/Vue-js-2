const app = new Vue({
  el: '#app',
  data: {
    message: 'hola soy McMayXIII',
    contador: 0
  },
  methods: {
    
  },
  computed: {
    invertido(){
      return this.message.split('').reverse().join('')
    },
    color(){
      return {
        'bg-success' : this.contador < 33,
        'bg-warning' : this.contador > 33 && this.contador < 66,
        'bg-danger' : this.contador > 66
      }
    }
  },
})