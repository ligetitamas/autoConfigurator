<template>
  <!-- <div class="kocsik">
    <div class="asd">
      <div v-for="car in this.$store.getters.cars" :key="car.id" class="kocsi">
        <p>{{ car.name }}</p>
        <p>{{ car.description }}</p>
        <img :src="require('../views/kepek/' + car.url + '.png')" />
        <router-link tag="button" :to="{ name: 'configurator', params: { id: `${car.url}` } }">Vedd meg</router-link>
      </div>
    </div>
  </div> -->
  <div class="main">
    <b-card class="cars w-75">
      <b-row v-for="car in this.$store.getters.cars" :key="car.id" class="car">
        <b-col class="md">
          <img :src="require('../views/kepek/' + car.url + '.png')" class="img pl-5 ml-5" />
        </b-col>
        <b-col class="md">
          <p class="display-4 pt-5">{{ car.name }}</p>
          <p class="h4 pb-4">{{ car.description }}</p>
          <router-link tag="button" :to="{ name: 'configurator', params: { id: `${car.url}` } }" class="btn btn-danger">Konfigurálja meg</router-link>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class CarsComp extends Vue {
  created() {
    this.$store.dispatch("getCars");
  }
}
</script>

<style scoped>
.img {
  height: 20rem;
  width: auto;
}
.cars {
  margin-left: 12.5%;
}
.main {
  background-color: rgb(139, 30, 43);
  font-family: Arial, Helvetica, sans-serif;
  height: 150%;
}
body,
html {
  height: 100%;
}
</style>
