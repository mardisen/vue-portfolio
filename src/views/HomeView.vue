<template>
  <div class="flex flex-row space-x-4">
    <!-- <div class="self-stretch basis-1 bg-primary-mid" /> -->
    <div class="flex flex-col p-4 space-y-8 text-left home">
      <div class="flex flex-col space-y-4 w-full">
        <div class="flex relative space-between">
          <code class="text-primary-accent">Better call</code>
          <div class="absolute -top-12 -right-24 w-48 h-32 dots-pattern bg-primary-light" />
        </div>

        <h1 class="text-6xl font-space-mono">
          Marino Didio
        </h1>
        <h2 class="text-6xl font-space-mono text-primary-mid">
          Software Developer.
        </h2>
        <div class="w-1/3 h-1 bg-primary-light-accent"></div>
      </div>
      <div class="w-full basis-2/3 grow text-primary-mid">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consectetur asperiores laboriosam quisquam expedita
        dolorum natus temporibus nihil velit delectus nesciunt, sit, obcaecati quaerat? Quam commodi deleniti doloribus
        laborum. Corrupti.
      </div>
    </div>
  </div>
</template>

<style>
.dots-pattern {
  mask-image: url("@assets/dots-pattern.svg");
}
</style>