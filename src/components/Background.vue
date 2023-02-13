<template>
    <div class="overflow-hidden absolute w-screen h-screen -z-10 bg-primary-darkest">
        <div class="absolute z-10 w-full h-full">
            <div class="w-full h-full cover-gradient">
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

.cover-gradient {
    background: linear-gradient(#1C2124 80%, transparent);
}
</style>