<template>
  <div>
    <div v-for="e in elements" v-bind:key="e.id">
      <router-link :to="'/detail/' + e.id">
        <b-card :title="e.title">
          <b-card-text> {{ e.description }}</b-card-text>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import ListDefault from "../partials/_ListDefault.vue";

export default {
  component: {
    ListDefault,
  },
  created() {
    this.findAll(); // cuando la app es creada, se llama al metodo findAll
  },
  data() {
    return {
      elements: [], // se define la propiedad o variable que vamos a utilizar
    };
  },
  methods: {
    findAll: function () {
      fetch("http://localhost:8000/api/element/?format=json") // se hace la peticion a la REST Api
        //fetch("http://127.0.0.1:8000/api/element/"+this.$route.params.id+"/?format=json")
        .then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.elements = res)); // y este se guarda en la propiedad mencionada
    },
  },
};
</script>

<style>
.box {
  border: 3px solid #ccc;
  margin: 5px 0 0 0;
}
</style>