<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Background from "@components/Background.vue";
import NavBar from "@components/Navbar.vue";
</script>

<template>
  <Background />

  <header>
    <NavBar />
  </header>

  <div class="content">
    <RouterView />
  </div>
</template>