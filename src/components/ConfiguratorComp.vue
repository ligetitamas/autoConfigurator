<template>
  <div class="main">
    <b-card class="config w-75 h-75">
      <b-row class="title mb-5">
        <b-col class="md">
          <h1>{{ this.$store.getters.model.name }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="md">
          <img :src="pictureUrl" class="img pl-5 ml-5" />
        </b-col>
        <b-col class="md">
          <form action="post">
            <h3 class="pt-2">Vásárló név</h3>
            <input id="nameInput" type="text" />
            <h3 class="pt-2">Színek</h3>
            <div v-for="(color, index) in this.$store.getters.model.colors" :key="index" class="colors form-check form-check-inline">
              <input :id="color.name" type="radio" name="color" :value="[color.name + ';' + color.hex]" class="form-check-input" />
              <label class="form-check-label" :for="color.name">{{ color.name }} <i :style="{ color: color.hex }" class="fas fa-square"></i></label>
            </div>
            <div v-for="(extras, index) in this.$store.getters.model.options" :key="index" class="extras p-2">
              <h3>{{ extras.name }}</h3>
              <div v-if="extras.multipleChoices">
                <div v-for="(option, index) in extras.options" :key="index" class="form-check">
                  <input :id="option.key" :name="extras.name" :value="option.value" type="checkbox" class="form-check-input" />
                  <label :for="option.key" class="form-check-label">{{ option.key }}</label>
                </div>
              </div>
              <div v-else>
                <div v-for="(option, index) in extras.options" :key="index" class="form-check form-check-inline">
                  <input :id="option.key" :value="option.value" type="radio" :name="extras.name" class="form-check-input" />
                  <label :for="option.key" class="form-check-label">{{ option.key }}</label>
                </div>
              </div>
            </div>
            <input class="btn btn-danger" type="button" value="Mentés" @click="submit($event.target.form)" />
          </form>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class ConfiguratorComp extends Vue {
  id: string;
  pictureUrl: string;
  data() {
    return {
      id: "",
      pictureUrl: ""
    };
  }
  created() {
    this.id = this.$route.params.id;
    this.pictureUrl = this.$route.params.pictureUrl;
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
        let extra: any = { key: element.name, value: { key: element.id, value: element.value } };
        //{"key":"${element.name}","value":"${element.value}}"`;
        form.values.push(extra);
      }
    });
    console.log(form);
    this.$store.dispatch("saveConfig", form);
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
.img {
  height: 20rem;
  width: auto;
}
.config {
  margin-left: 12.5%;
}
.main {
  background-color: rgb(139, 30, 43);
  font-family: Arial, Helvetica, sans-serif;
  height: 55.7rem;
}
body,
html {
  height: 200%;
}
.title {
  background-color: #e3e3e3;
  margin: 0;
  padding: 0;
}
b-card {
  margin: 0;
  padding: 0;
}
.card-body {
  padding: 0;
  padding-bottom: 1.25rem;
}
</style>
