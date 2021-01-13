<template>
  <b-card> </b-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class SavedCarComp extends Vue {
  carId: string;
  data() {
    return {
      carId: ""
    };
  }
  created() {
    this.carId = this.$route.params.carId;
    this.$store.dispatch("getSavedCar", this.carId);
    console.log(this.$store.getters.savedCar.owner);
  }
}
</script>

<style scoped></style>
