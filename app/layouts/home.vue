<script lang="ts" setup>

</script>

<template>
  <main class="px-10 py-20 text-center">
    <h1>vue 3</h1>
    <RightTopMenu class="absolute top-4 right-4" />

    <slot />
    <div class="mx-auto mt-5 text-center text-sm opacity-25">
      [Home Layout]
    </div>
  </main>
</template>
