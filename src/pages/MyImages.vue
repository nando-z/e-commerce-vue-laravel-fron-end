<template>

    <DefaultLayout>
        <div class="mb-6 mt-6  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="image in images" :key="image.id" class="relative">
                <img :src="image.url" class="w-full h-full object-cover" alt="">
                <div class="absolute top-0 left-0 p-2 bg-black bg-opacity-50 text-white">
                    {{ image.label }}
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>

const images = [
    { id: 1, url: `https://picsum.photos/512/100`, label: "image 1" },
    { id: 2, url: `https://picsum.photos/512/100`, label: "image 1" },
]

</script>
