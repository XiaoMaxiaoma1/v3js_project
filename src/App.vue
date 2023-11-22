<template>
  <h1>当前count为: {{ counterStore.count }}</h1>
  <h1>双倍count为: {{ counterStore.doubleCount }}</h1>
  <el-button type="primary" icon="Plus" @click="counterStore.increment"></el-button>
  <el-button type="primary" icon="Minus" @click="counterStore.decrement"></el-button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'
const counterStore = useCounterStore()
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 10px;
}
</style>
