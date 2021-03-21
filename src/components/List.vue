<template>
  <div>
    <div class="box" v-for="e in elements" v-bind:key="e">
      {{ e }}
    </div>

    <button v-on:click="findAll">Click</button>
    {{ msj }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msj: "... :(",
      elements: ["Uno", "Dos", "Tres"]
    };
  },
  methods: {
    findAll: function(){
      fetch('http://127.0.0.1:8000/api/element/?format=json') // se hace la peticion a la REST Api
      .then(res => res.json()) // si se recibe algo, se guarda en un json
      .then(res => console.log(res)) // se imprime en consola
    }
  },
};
</script>

<style>
  .box {
    border: 3px solid  #ccc;
    margin: 5px 0 0 0;
  }
</style>