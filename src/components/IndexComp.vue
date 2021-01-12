<template>
  <div class="index">
    <div class="welcome">
      <h1>Buld your Tesla!</h1>
    </div>
    <div class="otherTeslas">
      <h3>Adja meg ismerősei id-jét:</h3>
      <input name="idInput" type="text" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class IndexComp extends Vue {}
</script>

<style scoped></style>
