<template>
  <div>
    <ListDefault :elements-list="elements" />
  </div>
</template>

<script>
import ListDefault from "../partials/_ListDefault";

export default {
  components: {
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
      fetch(
        "http://127.0.0.1:8000/api/category/" +
          this.$route.params.id +
          "/elements/?format=json"
      ) // se hace la peticion a la REST Api
        .then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.elements = res)); // se imprime en consola
    },
  },
  watch: {
    "$route.params.id": function () {
      console.log("listado de categorias");
      this.findAll();
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