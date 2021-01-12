<template>
  <ConfiguratorComp />
</template>

<script lang="ts">
import ConfiguratorComp from "@/components/ConfiguratorComp.vue"; // @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    ConfiguratorComp
  }
})
export default class ConfiguratorView extends Vue {}
</script>
