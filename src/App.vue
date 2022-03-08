<template>
  <Header />
  <SideBar />
  <div id="nav"></div>
  <router-view />
</template>

<style>
</style>

<script>
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    Header,
    SideBar,
  },
};
</script>