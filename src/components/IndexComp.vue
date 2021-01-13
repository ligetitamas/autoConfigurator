<template>
  <div class="main">
    <b-card class="index w-75">
      <b-row class="welcome">
        <b-col class="md">
          <h1 class="display-2 text-center text-danger">Build your own Tesla</h1>
        </b-col>
      </b-row>
      <b-row class="about">
        <b-col class="md">
          <h1 class="display-4 py-5">Legyen öné álmai Teslája még ma!</h1>
          <p class="h4">Válogasson kedvére a készleten álló Tesla modelljeink között, és válassza ki az Önnek legmegfelelőbb típust.</p>
          <p class="h4 pb-5">Nézze meg ismerősei előre konfigurált autóit az alábbi gombbal:</p>
        </b-col>
      </b-row>
      <b-row class="otherTeslas">
        <b-col class="md">
          <h3 class="h3 text-center giveid">Adja meg ismerősei ID-jét:</h3>
          <input id="idInput" name="idInput" type="text" @change="Change()" />
          <router-link tag="button" :to="{ name: 'savedCar', params: { carId: `${carid}` } }" class="btn btn-danger" @on="Search()"
            >Keresés</router-link
          >
        </b-col>
      </b-row>
      <b-row class="sticky-bottom authors">
        <b-col class="md">
          <h3>Tóth Balázs</h3>
          <p>Backend</p>
          <img src="https://via.placeholder.com/160x164" alt="tb" />
        </b-col>
        <b-col class="md">
          <h3>Ligeti Tamás</h3>
          <p>Frontend funkcionalitás</p>
          <img src="../views/kepek/lt.jpg" alt="lt" />
        </b-col>
        <b-col class="md">
          <h3>Gaál Bence</h3>
          <p>Frontend design</p>
          <img src="https://via.placeholder.com/160x164" alt="gb" />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class IndexComp extends Vue {
  carid: any = "";
  public Change() {
    this.carid = (document.getElementById("idInput") as HTMLInputElement).value;
  }
}
</script>

<style scoped>
.authors {
  padding-top: 7rem;
}
.index {
  margin-left: 12.5%;
}
.main {
  background-color: rgb(139, 30, 43);
  height: 55.7rem;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
