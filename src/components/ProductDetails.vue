<template>
  <div class="product-text">
    <va-icon :name="mycon" color="primary" />
    {{ productprops.kind }} -
    {{ productprops.pId }}
    <va-divider />
  </div>
</template>

<script lang="ts" setup>
const productprops = defineProps({
  kind: String,
  pId: String,
});
let mycon: string;
if (productprops.kind === "VOIP") {
  mycon = "phone";
} else if (productprops.kind === "TELCO") {
  mycon = "share";
} else if (productprops.kind === "WEBSITE") {
  mycon = "computer";
}
</script>

<style scoped>
</style>