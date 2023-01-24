<template>
    <div class="overflow-hidden absolute w-screen h-screen -z-10 bg-primary-darkest">
        <div class="absolute z-10 w-full h-full">
            <div class="w-full h-2/3 bg-primary-darkest">
            </div>
            <div class="w-full h-full bg-gradient-to-b from-primary-darkest">
            </div>
        </div>
        <div class="absolute w-[120%] h-[120%] bg-primary-accent pattern animate-to-t">
        </div>
    </div>
</template>

<style scoped>
.pattern {
    mask-image: url("@assets/hideout.svg");
}
</style>