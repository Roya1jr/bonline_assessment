<template>
  <div class="grid-container">
    <component :is="true ? SideBar : Tabs" />
    <div class="content">
      <div class="title-text">
        <div class="display-2">Billing</div>
        <br />
        <div>Overview of your accounts</div>
      </div>
      <div class="item3">Cards</div>
      <div class="item4">Details</div>
      <div class="item5">Products</div>
      <div class="item6">History</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideBar from "@/components/SideBar.vue";
import Tabs from "@/components/Tabs.vue";

let width: number = window.innerWidth;
let height: number = window.innerHeight;

function reportWindow() {
  width = window.innerWidth;
  height = window.innerHeight;
  console.log("resize");
}

window.addEventListener("resize", reportWindow);
</script>

<style scoped>
* {
  font-family: "Poppins", Arial sans-serif;
}
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr 6fr;
}
.title-text {
  color: var(--va-b_black);
  margin-top: 1em;
  margin-left: 2em;
}
</style>