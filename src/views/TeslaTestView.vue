<template>
  <div class="home">
    <TeslaTestComp />
  </div>
</template>

<script lang="ts">
import TeslaTestComp from "@/components/TeslaTestComp.vue"; // @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    TeslaTestComp
  }
})
export default class TeslaTestView extends Vue {}
</script>
