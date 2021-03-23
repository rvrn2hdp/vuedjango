<template>
  <div>
    <b-navbar type="dark" variant="dark" class="mb-3">
      <b-navbar-brand> Elements </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Types" right>
          <b-dropdown-item
            v-for="t in types"
            v-bind:key="t.id"
            :to="'/type/' + t.id + '/elements'"
            >{{ t.title }}
            </b-dropdown-item>
          <router-link></router-link>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Categories" right>
          <b-dropdown-item
            v-for="c in categories"
            v-bind:key="c.id"
            :to="'/category/' + c.id + '/elements'"
            >{{ c.title }}
            </b-dropdown-item>
          <router-link></router-link>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  created() {
    this.findAllTypes(); // cuando la app es creada, se llama al metodo findAllTypes
    this.findAllCategory();
  },
  data() {
    return {
      types: [], // se define la propiedad o variable que vamos a utilizar
      categories: [],
    };
  },
  methods: {
    findAllTypes: function () {
      fetch("http://127.0.0.1:8000/api/types/?format=json") // se hace la peticion a la REST Api
        .then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.types = res)); // se imprime en consola
    },
    findAllCategory: function () {
      fetch("http://127.0.0.1:8000/api/category/?format=json") // se hace la peticion a la REST Api
        .then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.categories = res)); // se imprime en consola
    },
  },
};
</script>