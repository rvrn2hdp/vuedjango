<template>
  <div>
    <!--div v-for="e in elements" v-bind:key="e.id" -->
    <!-- utilizar siempre : antes de utilizar data dinamica (propiedad) -->
    <b-card>
      <h1>{{ element.title }}</h1>
      <div class="p-3" v-if="element.category">
        <router-link
          class="btn btn-danger btn-sm"
          :to="{ name: 'list-category', params: { id: element.category } }"
          >{{ category.title }}</router-link
        >
        <router-link
          class="ml-2 btn btn-danger btn-sm"
          :to="{ name: 'list-types', params: { id: element.types } }"
          >{{ types.title }}</router-link
        >

        <b-card-text>
          {{ element.description }}
        </b-card-text>
      </div>
    </b-card>
    <!-- div class="box" v-for="e in elements" v-bind:key="e.id" >
      {{ e.title }}
    </div-->
  </div>
</template>

<script>
const axios = require("axios");

export default {
  created() {
    this.find(); // cuando la app es creada, se llama al metodo findAll
    console.log(this.$route.params.id);
  },
  data() {
    return {
      element: Object,
      category: Object,
      types: Object,
      // elements: [], // se define la propiedad o variable que vamos a utilizar
    };
  },
  methods: {
    find: function () {
      fetch(
        "http://127.0.0.1:8000/api/element/" +
          this.$route.params.id +
          "/?format=json"
      ) // se hace la peticion a la REST Api
        .then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => {
          this.element = res;
          this.findCategory(this.element.category);
          this.findTypes(this.element.types);
        });
    },
    findCategory: function (id) {
      axios
        .get("http://127.0.0.1:8000/api/category/" + id + "/?format=json") // se hace la peticion a la REST Api
        //.then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.category = res.data));
    },
    findTypes: function (id) {
      axios
        .get("http://127.0.0.1:8000/api/types/" + id + "/?format=json") // se hace la peticion a la REST Api
        //.then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.types = res.data));
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