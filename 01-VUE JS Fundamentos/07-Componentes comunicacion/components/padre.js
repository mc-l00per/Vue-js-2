Vue.component('padre',{
  template:`
    <div class="p-5 bg-dark text-white mt-5">
      <h2>Componente Padre: {{numeroPadre}}</h2>
      <button class="btn btn-danger m-5" @click="numeroPadre++">+</button>
      {{nombrePadre}}
      <hijo :numero="numeroPadre" class="m-2" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
  `,
  data() {
    return {
      numeroPadre: 0,
      nombrePadre: ''
    }
  },
})