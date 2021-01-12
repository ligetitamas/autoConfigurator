<template>
  <div class="car">
    <h1>{{ this.$store.getters.model.name }}</h1>
    <form action="post">
      <h3>Vásárló neve</h3>
      <input id="nameInput" type="text" />
      <h3>Színek</h3>
      <div v-for="color in this.$store.getters.model.colors" :key="color" class="colors">
        <input :id="color.name" type="radio" name="color" :value="[color.name + ';' + color.hex]" />
        <label :style="{ color: color.hex }" :for="color.name">{{ color.name }}</label>
      </div>
      <h3>Extrák</h3>
      <div v-for="extras in this.$store.getters.model.options" :key="extras" class="extras">
        <h3>{{ extras.name }}</h3>
        <div v-if="extras.multipleChoices">
          <div v-for="option in extras.options" :key="option">
            <input :id="option.key" :name="extras.name" :value="option.value" type="checkbox" />
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
export default class ConfiguratorComp extends Vue {
  id: string;
  data() {
    return {
      id: ""
    };
  }
  created() {
    this.id = this.$route.params.id;
    this.$store.dispatch("getModel", this.id);
    this.$store.dispatch("getID", this.id);
  }
  //public mounted() {
  //this.$store.dispatch("getCars", this.id);
  //}
  public submit(formInput: any) {
    let form: any = {
      owner: "",
      color: { name: "", hex: "" },
      car: "",
      values: []
    };
    let extras: any = [];
    form.car = this.$store.getters.carId;
    form.owner = (document.getElementById("nameInput") as HTMLInputElement).value;
    //console.log([...asd].filter(x => x.checked));
    extras = [...formInput].filter(x => x.checked);
    extras.forEach((element: any) => {
      if (element.name == "color") {
        let colorString: string = element.value;
        let color: string[];
        color = colorString.split(";");
        form.color.name = color[0];
        form.color.hex = color[1];
      } else {
        let extra: any = { key: element.name, value: element.value };
        //{"key":"${element.name}","value":"${element.value}}"`;
        form.values.push(extra);
      }
    });
    console.log(form);
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
