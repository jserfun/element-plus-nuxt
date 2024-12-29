<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main p="x4 y10" text="center teal-700 dark:gray-200">
    <div text-4xl>
      <div i-ep-warning inline-block />
    </div>
    <div>Not found</div>
    <div>
      <button text-sm btn m="3 t8" @click="router.back()">
        Back
      </button>
      <button text-sm btn m="3 t8" @click="router.push('/login')">
        to login(push)
      </button>
      <button text-sm btn m="3 t8" @click="router.replace('/login')">
        to login(replace)
      </button>
    </div>
  </main>
</template>
