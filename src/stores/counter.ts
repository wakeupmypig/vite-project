export const useCounterStore = defineStore("counter", () => {
  const count = ref(0)
  const doubleCount = computed(() => {
    return count.value * 2
  })

  const changeCount = (payload: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        count.value += payload
        resolve()
      }, 1000)
    })
  }
  return { count, doubleCount, changeCount }
})
