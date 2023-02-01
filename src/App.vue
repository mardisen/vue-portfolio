<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Background from "@components/Background.vue";
</script>

<template>

  <Background />

  <header>
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink to="/"><code>01.</code> Home</RouterLink>
        <RouterLink to="/about"><code>02.</code> About</RouterLink>
        <RouterLink to="/projects"><code>03.</code> Projects</RouterLink>
      </nav>
    </div>
  </header>

  <div class="content">
    <RouterView />
  </div>
</template>