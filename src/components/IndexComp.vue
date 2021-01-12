<template>
  <b-card class="index">
    <b-row class="welcome">
      <b-col class="md">
        <h1 class="display-2 text-center">Build your Tesla!</h1>
      </b-col>
    </b-row>
    <b-row class="otherTeslas">
      <b-col class="md">
        <h3 class="h3 text-center giveid">Adja meg ismerősei ID-jét:</h3>
        <input name="idInput" type="text" />
        <button @click="Search()">Keresés</button>
      </b-col>
    </b-row>
    <b-row class="sticky-bottom authors">
      <b-col class="md">
        <h3>Tóth Balázs</h3>
        <p>Backend</p>
        <img src="https://via.placeholder.com/160x164" alt="tb" />
      </b-col>
      <b-col class="md">
        <h3>Ligeti Tamás</h3>
        <p>Frontend funkcionalitás</p>
        <img src="../views/kepek/lt.jpg" alt="lt" />
      </b-col>
      <b-col class="md">
        <h3>Gaál Bence</h3>
        <p>Frontend design</p>
        <img src="https://via.placeholder.com/160x164" alt="gb" />
      </b-col>
    </b-row>
  </b-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class IndexComp extends Vue {
  public Search() {
    console.log("keres");
  }
}
</script>

<style scoped>
.giveid {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.authors {
  padding-top: 25rem;
}
</style>
