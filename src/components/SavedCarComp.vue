<template>
  <b-card>
    <div class="owner">
      <h1>{{ this.$store.getters.savedCar.owner }} kocsija</h1>
      <!-- <h2>{{ this.$store.getters.savedCar.name }}</h2> -->
    </div>
    <div class="props">
      <table class="table table-bordered table-sm bg-danger text-white">
        <tr v-for="(extra, index) in this.$store.getters.savedCar.values" :key="index">
          <td>{{ extra.key }}</td>
          <td>{{ extra.value.key }}</td>
        </tr>
      </table>
    </div>
    <!-- <div class="color">
      <p>Szín: {{ this.$store.getters.savedCar.color.name }}</p>
    </div>
    <div v-for="(extra, index) in this.$store.getters.savedCar.values" :key="index">       
      <h3>{{ extra.key }}</h3>
      <p>{{ extra.value.key }}</p>
    </div> -->
  </b-card>
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
