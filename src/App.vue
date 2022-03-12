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
</script>