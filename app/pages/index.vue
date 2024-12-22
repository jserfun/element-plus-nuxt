<script setup lang="ts">
import { ElButton } from 'element-plus';

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div class="page-index">
    aaa
    <ElButton type="primary">button</ElButton>
    <br />
    <el-button @click="ElMessage('hello')">button2</el-button>
    <br />
    <a>a标签</a>
    <TheLogos></TheLogos>
    <TheExamples></TheExamples>
  </div>
</template>

<style>
.page-index {
  padding-top: 60px;
  text-align: center;
}
</style>
