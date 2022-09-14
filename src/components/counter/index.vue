<template>
  <div>
    <button @click="handleClick" class="block rounded-lg text-#fff bg-black-1">
      计数器
    </button>
    <span block text-center>{{ store.count }}</span>
    <span block text-center>{{ store.doubleCount }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/stores/counter"
const store = useCounterStore()
const handleClick = () => {
  store.changeCount(5).then(() => {
    console.log("ok")
  })
}
</script>
