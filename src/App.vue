<template>
  <div id="nav">
    <Header />
    <div class="main-content"></div>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
</script>