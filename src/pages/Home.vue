<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";
import { PhotoIcon, UserCircleIcon } from "@heroicons/vue/24/solid";

</script>
<template>
    <DefaultLayout>
        <div class="mb-4">
            <label for="cover-photo" class="block text-sm/2 font-medium text-gray-900 mb-4">Image</label>
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                    <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                    <div class="mt-4 flex text-sm/6 text-gray-600">
                        <label for="file-upload"
                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
            </div>
        </div>

        <!-- first Name -->


        <div class="col-span-full mb-4">
            <div class="sm:col-span-3 w-full">
                <label for="label" class="block text-sm/6 font-medium  text-gray-900">Label</label>
                <div class="mt-2">
                    <input type="text" name="label" id="label"
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
            </div>
        </div>
        <div class="mt-8 flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4">
            <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
            <button type="submit"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
    </DefaultLayout>
</template>
