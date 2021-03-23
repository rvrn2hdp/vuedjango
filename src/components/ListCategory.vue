<template>
  <div class="container">
    Listado de Categorias
    <div v-for="e in elements" v-bind:key="e.id">
      <router-link :to=" '/detail/' + e.id ">
        <!-- utilizar siempre : antes de utilizar data dinamica (propiedad) -->
        <b-card :title="e.title">
          <b-card-text>
            {{ e.description }}
          </b-card-text>
        </b-card>
      </router-link>
    </div>
    <!-- div class="box" v-for="e in elements" v-bind:key="e.id" >
      {{ e.title }}
    </div-->
  </div>
</template>

<script>
export default {
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
      fetch("http://127.0.0.1:8000/api/category/"+this.$route.params.id+"/elements/?format=json") // se hace la peticion a la REST Api
        .then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.elements = res)); // se imprime en consola
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