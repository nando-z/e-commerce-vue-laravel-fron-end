<template>

    <DefaultLayout>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="image in 12" :key="image" class="relative">
                <img :src="`https://picsum.photos/512/${image + 100}`" class="w-full h-full object-cover" alt="">
                <div class="absolute top-0 left-0 p-2 bg-black bg-opacity-50 text-white">
                    Image {{ image }}
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>

</script>
