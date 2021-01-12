<template>
  <div class="home">
    <CarsComp />
  </div>
</template>

<script lang="ts">
import CarsComp from "@/components/CarsComp.vue"; // @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    CarsComp
  }
})
export default class CarsView extends Vue {}
</script>
