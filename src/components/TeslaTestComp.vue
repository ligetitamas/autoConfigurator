<template>
  <div class="kocsik">
    <div class="asd">
      <div v-for="car in this.$store.getters.cars" :key="car.id" class="kocsi">
        <p>{{ car.name }}</p>
        <p>{{ car.description }}</p>
        <router-link tag="button" :to="{ name: 'teszt2', params: { id: `${car.url}` } }">Vedd meg</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class TeslaTestComp extends Vue {
  created() {
    this.$store.dispatch("getCars");
  }
}
</script>

<style scoped>
.kocsi {
  border: 1px solid black;
}
ul {
  list-style-type: none;
}
</style>
