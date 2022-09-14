import { PropType } from "vue"

export default defineComponent({
  props: {
    todos: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  },
  render() {
    return (
      <ul class="bg-gray-3 w-50% m-auto mt-5">
        {this.todos.map((todo, index) => {
          return <li key={index}>{todo}</li>
        })}
      </ul>
    )
  }
})
