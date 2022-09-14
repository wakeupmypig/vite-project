// 这里可以编写我们的测试用例

// 组件库，框架，类库可能会涉及到单元测试。 核心的api 或者功能我们会进行测试

// 测试的好处 可以保证核心功能能正常运行，可以生成使用的用法， 缺点就是得写，

import Todo from "@/components/todo/index.vue"

// vitest 测试框架 === jest
// @vue/test-utils 提升测试编写的速度 js -> jq
import { shallowMount, mount } from "@vue/test-utils"

// 用户在输入框中输入内容 会影响数据的变化
// 用户点击按钮 新增一条数据 , 但是新增的内容不能为空
// 如果点击添加那么 新增的内容和输入框中填入的应该是一样的
// 分组
describe("测试todo组件功能是否正常", () => {
  // 某一个用例
  it("用户在输入框中输入内容 会影响数据的变化", () => {
    const wrapper = shallowMount(Todo) // $
    const input = wrapper.find("input")
    input.setValue("hello")
    expect(wrapper.vm.todo).toBe("hello")
  })
  it("用户点击按钮 新增一条数据 , 但是新增的内容不能为空", async () => {
    const wrapper = mount(Todo)
    const input = wrapper.find("input")
    input.setValue("")
    const button = wrapper.find("button")
    await button.trigger("click")
    expect(wrapper.findAll("li").length).toBe(0)
    input.setValue("hello")
    await button.trigger("click")
    expect(wrapper.findAll("li").length).toBe(1)
  })
  it("用户点击按钮 新增一条数据 , 但是新增的内容不能为空", async () => {
    const wrapper = mount(Todo)
    const input = wrapper.find("input")
    const button = wrapper.find("button")
    input.setValue("hello")
    await button.trigger("click")
    expect(wrapper.find("li").text()).toBe("hello")
  })
})
