<template>
  <div class="flex flex-row space-x-4">
    <div class="flex flex-col p-4 space-y-8 text-left home">
      <div class="flex flex-col space-y-4 w-full">
        <div class="flex relative space-between">
          <code class="text-primary-accent">Better call</code>
          <div class="absolute -top-12 -right-24 w-48 h-32 dots-pattern bg-primary-lightest" />
          <div class="absolute -top-8 -right-20 w-48 h-32 mix-blend-exclusion dots-pattern bg-primary-darkest" />
        </div>

        <h1 class="text-6xl font-space-mono">
          Marino Didio
        </h1>
        <h2 class="text-6xl font-space-mono text-primary-mid">
          Software Developer
        </h2>
        <div class="!mt-8 w-2/3 h-1 bg-primary-light-accent"></div>
      </div>
      <div class="w-4/5 basis-2/3 grow text-primary-mid">
        Self-taught Software (Web) Developer, currently focusing on frontend technologies and frameworks. Coding and
        designing with passion, while finding my place in the world.<br><br>
        Currently seeking employement to relocate within the EU (mainly: Netherlands, Germany, Denmark, France)
      </div>
    </div>
  </div>
</template>

<style>
.dots-pattern {
  mask-image: url("@assets/dots-pattern.svg");
}
</style>