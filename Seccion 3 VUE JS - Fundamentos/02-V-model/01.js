const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Hola mundo con Vue',
    frutas: [
      {nombre:'Pera', cantidad:10},
      {nombre:'Manzana', cantidad:0},
      {nombre:'Platanos', cantidad:11}
    ],
    newItem: ''
  },
  methods:{
    addItem(){
      this.frutas.push({
        nombre: this.newItem,
        cantidad: 0
      })
    }
  }
})