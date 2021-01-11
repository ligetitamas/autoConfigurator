<template>
  <div class="teszt">
    <Teszt2Comp />
  </div>
</template>

<script lang="ts">
import Teszt2Comp from "@/components/Teszt2Comp.vue"; // @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Teszt2Comp
  }
})
export default class Teszt2View extends Vue {}
</script>
