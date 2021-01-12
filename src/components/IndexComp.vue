<template>
  <div class="index">
    <div class="welcome">
      <h1>Build your Tesla!</h1>
    </div>
    <div class="otherTeslas">
      <h3>Adja meg ismerősei id-jét:</h3>
      <input name="idInput" type="text" />
      <button @click="Search()">Keresés</button>
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

<style scoped></style>
