<template>
  <div>
    <h5>Categories</h5>
    <b-list-group>
        <b-list-group-item button v-for="c in categories" v-bind:key="c.id">
          <router-link :to="'/category/' + c.id + '/elements'">
            <!-- utilizar siempre : antes de utilizar data dinamica (propiedad) -->
            {{ c.title }}
          </router-link>
        </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  created() {
    this.findAll(); // cuando la app es creada, se llama al metodo findAll
  },
  data() {
    return {
      categories: [], // se define la propiedad o variable que vamos a utilizar
    };
  },
  methods: {
    findAll: function () {
      fetch("http://127.0.0.1:8000/api/category/?format=json") // se hace la peticion a la REST Api
        .then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.categories = res)); // se imprime en consola
    },
  },
};
</script>