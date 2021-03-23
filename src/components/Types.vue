<template>
  <div>
    <b-list-group>
      <div v-for="t in types" v-bind:key="t.id">
        <b-list-group-item button>
          <router-link :to="'/types/' + t.id + '/elements'">
            <!-- utilizar siempre : antes de utilizar data dinamica (propiedad) -->
            {{ t.title }}
          </router-link>
        </b-list-group-item>
      </div>
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
      types: [], // se define la propiedad o variable que vamos a utilizar
    };
  },
  methods: {
    findAll: function () {
      fetch("http://127.0.0.1:8000/api/types/?format=json") // se hace la peticion a la REST Api
        .then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.types = res)); // se imprime en consola
    },
  },
};
</script>