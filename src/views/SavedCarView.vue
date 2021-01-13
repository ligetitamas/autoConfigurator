<template>
  <SavedCarComp />
</template>

<script lang="ts">
import SavedCarComp from "@/components/SavedCarComp.vue"; // @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    SavedCarComp
  }
})
export default class SavedCarView extends Vue {}
</script>
