<template>
  <Header />
  <SideBar />
  <div id="nav"></div>
  <router-view />
</template>

<style>
</style>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";

let width: number = window.innerWidth;
let height: number = window.innerHeight;

function reportWindow() {
  width = window.innerWidth;
  height = window.innerHeight;
  console.log("resize");
}

window.addEventListener("resize", reportWindow);
</script>