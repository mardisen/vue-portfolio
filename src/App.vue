<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Background from "@components/Background.vue";
</script>

<template>

  <Background />

  <header>
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink to="/"><code>00.</code> Home</RouterLink>
        <RouterLink to="/about"><code>01.</code> About</RouterLink>
        <RouterLink to="/projects"><code>02.</code> Projects</RouterLink>
        <RouterLink to="/credits"><code>03.</code> Credits</RouterLink>
      </nav>
    </div>
  </header>

  <div class="content">
    <RouterView />
  </div>
</template>