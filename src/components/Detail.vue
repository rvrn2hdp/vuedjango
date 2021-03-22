<template>
  <div class="container">
    <!--div v-for="e in elements" v-bind:key="e.id" -->
      <!-- utilizar siempre : antes de utilizar data dinamica (propiedad) -->
      <b-card
        :title="element.title"
      >

      <b-card-text>
        {{ element.description }}
      </b-card-text>

      </b-card>
    <!-- div class="box" v-for="e in elements" v-bind:key="e.id" >
      {{ e.title }}
    </div-->
  </div>

</template>

<script>
export default {
  created() {
    this.find(); // cuando la app es creada, se llama al metodo findAll
    console.log(this.$route.params.id);
  },
  data() {
    return {
        element: Object
      // elements: [], // se define la propiedad o variable que vamos a utilizar
    };
  },
  methods: {
    find: function () {
      fetch("http://127.0.0.1:8000/api/element/1/?format=json") // se hace la peticion a la REST Api
        .then((res) => res.json()) // si se recibe algo, se guarda en un json
        .then((res) => (this.element = res)); // se imprime en consola
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