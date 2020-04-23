Vue.component('contador',{
  template: `
    <div>
      <h1>{{contador}}</h1>
      <button @click="contador++">+</button>
    </div>
  `, 
  data(){
    return {
      contador: 0
    }
  }
})
