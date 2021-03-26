<template>
  <div class="mt-3 mt-md-0">
    <div v-for="e in elementsList" v-bind:key="e.id">
      <router-link class="card-link" :to="'/detail/' + e.id">
        <b-card :header="e.title"
        header-bg-variant="primary"
        header-text-variant="white">
          <b-card-text>
            {{ e.description }}
          </b-card-text>
        </b-card>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["elementsList"],
  data: function () {
    return {
      elements: this.elementsList, // se define la propiedad o variable que vamos a utilizar
    };
  },
  methods: {},
};
</script>

<style>
  a.card-link,
  a.card-link:hover {
    color: rgb(75, 74, 74);
    text-decoration: none;
  }

  a.card-link:hover .card-body{
    background:#f8f9fa;
  }
</style>