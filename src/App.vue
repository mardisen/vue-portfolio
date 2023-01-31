<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Background from "@components/Background.vue";
</script>

<template>

  <Background />

  <header>
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
    </div>
  </header>

  <div class="content">
    <RouterView />
  </div>
</template>