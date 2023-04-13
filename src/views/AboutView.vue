<template>
  <div class="flex flex-col justify-center items-center space-y-4">
    <div class="overflow-hidden relative w-52 h-52 rounded-full basis-52 shrink-0">
      <div
        class="absolute w-full h-full opacity-100 mix-blend-multiply transition-colors duration-500 bg-primary-accent hover:bg-transparent" />
      <img class="absolute -z-10"
        src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=" />
    </div>
    <div class="flex flex-row items-center space-x-4 w-full">
      <div class="h-0.5 grow bg-primary-light-accent" />
      <h2 class="text-2xl text-primary-lightest">About me</h2>
      <div class="h-0.5 grow bg-primary-light-accent" />
    </div>
    <code class="text-primary-accent !mt-0.5">01.</code>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim nam assumenda, ullam soluta facere facilis ad beatae
      perferendis rerum quos voluptatum vitae odio pariatur iure mollitia, dolore explicabo, fuga quidem.
    </p>
    <div class="flex flex-row items-stretch w-full text-left justify-stretch">
      <div class="grow">
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
          <li>sit</li>
        </ul>
      </div>
      <div class="grow">
        <ul>
          <li>Amet</li>
          <li>Consectetur</li>
          <li>Adipisicing</li>
          <li>Elit</li>
        </ul>
      </div>
    </div>
  </div>
</template>