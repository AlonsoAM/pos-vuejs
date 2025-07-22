<script setup>
defineProps({
  to: String,
})
</script>

<template>
  <RouterLink
    class="rounded bg-green-400 hover:bg-green-500 text-white px-10 py-2 font-bold"
    :to="{name: to}"
  >
    <slot></slot>
  </RouterLink>
</template>
