<template>
  <IndexComp />
</template>

<script lang="ts">
import IndexComp from "@/components/IndexComp.vue"; // @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    IndexComp
  }
})
export default class IndexView extends Vue {}
</script>
