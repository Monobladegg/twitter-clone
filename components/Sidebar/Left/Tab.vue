<template>
  <nuxt-link
    to="#"
    class="flex items-center p-3 rounded-full w-min text-black dark:hover:bg-white/20 dark:hover:bg-dim-200 dark:text-white"
    :class="defaultTransition"
  >
    <div class="w-6 h-6 text-dark">
      <slot name="icon"></slot>
    </div>
    <div class="ml-4 text-xl hidden xl:block" :class="textClasses">
      <slot name="name"></slot>
    </div>
  </nuxt-link>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();

const { active } = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textClasses = computed(() => (active ? "font-semibold" : "font-normal"));
</script>
