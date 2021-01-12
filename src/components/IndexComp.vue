<template>
  <div class="index canvas text-center m-auto">
    <div class="welcome row">
      <div class="col-md">
        <h1 class="display-2 py-5 text-center">Build your Tesla!</h1>
      </div>
    </div>
    <div class="otherTeslas row">
      <div class="col-md mb-5">
        <h3 class="h3 text-center giveid">Adja meg ismerősei id-jét:</h3>
        <input name="idInput" type="text" />
        <button @click="Search()">Keresés</button>
      </div>
    </div>
    <div class="row fixed-bottom pb-5 w-60">
      <div class="col-md">
        <h3>Tóth Balázs</h3>
        <p>Backend</p>
        <img src="https://via.placeholder.com/160x164" alt="tb" />
      </div>
      <div class="col-md">
        <h3>Ligeti Tamás</h3>
        <p>Frontend funkcionalitás</p>
        <img src="../views/kepek/lt.jpg" alt="lt" />
      </div>
      <div class="col-md">
        <h3>Gaál Bence</h3>
        <p>Frontend design</p>
        <img src="https://via.placeholder.com/160x164" alt="gb" />
      </div>
    </div>
  </div>
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
</style>
