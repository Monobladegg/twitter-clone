<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-gray-900">
      <div class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
        >
          <!-- Left sidebar -->

          <div class="hidden md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>

          <!-- Main content -->
          <main class="col-span-12 marker:md:col-span-8 xl:col-span-6">
            <router-view />
          </main>

          <!-- Right sidebar -->

          <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
            <div class="sticky top-0">
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { HomeIcon } from "@heroicons/vue/solid";
import { useHead } from "#imports";

useHead({
  title: "Twitter clone",
  meta: [
    { name: "description", content: "Twitter clone made by Ivan Kondrich" },
    { name: "keywords", content: "Twitter, clone, monoblade" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "author", content: "Monoblade" },
  ],
});

const darkMode = ref(true);
</script>
