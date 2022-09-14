<template>
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于页面</router-link>

  <router-view></router-view>

  <Todo></Todo>
  <Counter></Counter>
</template>

<script lang="ts" setup>
import Todo from "@/components/todo/index.vue"
import Counter from "@/components/counter/index.vue"
</script>
