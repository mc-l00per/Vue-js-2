const app = new Vue({
  el: '#app',
  data: {
    saludo: 'soy ciclo de vida de Vue'
  },
  methods: {
    destruir(){
      this.$destroy()
    }
  },
  computed: {

  },
  /**
   * Se ejecuta antes de crearse
   */
  beforeCreate() {
    console.log('beforeCreate')
  },
  /**
   * Se ejecuta al leer todo los metodos, eventos, observadores, pero no tiene acceso al DOM
   */
  created() {
    console.log('create')
  },
  /**
   * Se ejecuta justo antes de insertar el DOM
   */
  beforeMount() {
    console.log('beforeMount')
  },
  /**
   * Se ejecuata al inserta el DOM
   */
  mounted() {
    console.log('mounted')
  },
  /**
   * Al detectar un cambio
   */
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  /**
   * Al realizar los cambios
   */
  updated() {
    console.log('updated')
  },
  /**
   * 
   */
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  /**
   * 
   */
  destroyed() {
    console.log('destroyed')
  },
})