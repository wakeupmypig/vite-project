<template>
  <div>
    <h1 text-center text-red>
      <div class="i-ep-aim"></div>
      Todo List
      <div class="i-zf-circle"></div>
    </h1>
    <div flex items-center justify-center>
      <input
        type="text"
        v-model="todo"
        h-25px
        shadow
        shadow-inset
        shadow-green-5
      />
      <button
        @click="addTodo"
        class="py-2 px-3 inline-block bg-blue-100 rounded-lg text-#ccc"
      >
        添加内容
      </button>
    </div>
    <TodoList :todos="todos"></TodoList>
  </div>
</template>

<script setup lang="ts">
import TodoList from "./todo-list"
const todo = ref("")
const todos = ref<string[]>([])

const addTodo = () => {
  if (!todo.value) return
  todos.value.push(todo.value)
}
</script>
