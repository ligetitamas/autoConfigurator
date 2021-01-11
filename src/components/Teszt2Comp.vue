<template>
  <div class="car">
    <h1>{{ this.$store.getters.model.name }}</h1>
    <form action="post">
      <h3>Színek</h3>
      <div v-for="color in this.$store.getters.model.colors" :key="color" class="colors">
        <input :id="color.name" type="radio" name="color" :value="color" />
        <label :style="{ color: color.hex }" :for="color.name">
          {{ color.name }}
        </label>
      </div>
      <h3>Extrák</h3>
      <div v-for="extras in this.$store.getters.model.options" :key="extras" class="extras">
        <h3>{{ extras.name }}</h3>
        <div v-if="extras.multipleChoices">
          <div v-for="option in extras.options" :key="option">
            <input :id="option.key" :name="option.key" :value="option.value" type="checkbox" />
            <label :for="option.key">{{ option.key }}</label>
          </div>
        </div>
        <div v-else>
          <div v-for="option in extras.options" :key="option">
            <input :id="option.key" :value="option.value" type="radio" :name="extras.name" />
            <label :for="option.key">{{ option.key }}</label>
          </div>
        </div>
      </div>
      <input type="button" value="Mentés" @click="submit($event.target.form)" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Teszt2Comp extends Vue {
  id: string;
  data() {
    return {
      id: ""
    };
  }
  created() {
    this.id = this.$route.params.id;
    this.$store.dispatch("getModel", this.id);
  }
  //public mounted() {
  //this.$store.dispatch("getCars", this.id);
  //}
  public submit(asd: any) {
    console.log([...asd].filter(x => x.checked));
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
