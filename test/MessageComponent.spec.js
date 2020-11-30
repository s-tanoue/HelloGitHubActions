
import { mount } from '@vue/test-utils'
import MessageComponent from '@/components/Logo.vue'

describe('メッセージを表示するコンポーネントのテスト', () => {
  test('Hello Worldとメッセージを表示する', () => {
        const wrapper = mount(MessageComponent, {
            propsData: {
            msg: 'Hello world'
            }
        })
    expect(wrapper.text()).toContain('Hello world')
  })
})
