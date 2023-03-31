import { mount } from '@vue/test-utils'
import Component from '@/components/CoffeeCardComponent.vue'
import View from '@/views/HomeView.vue'

const testProps = {
  name: "Some Test Coffee",
  image: "coffee3.png",
  rating: 3.2,
  count: "12k"
}

describe('CoffeeCardComponent.vue', () => {
  it('is the card showing name, rating, count and image?', () => {
    const wrapper = mount(Component, {
      props: testProps
    })
    expect(wrapper.text()).toContain(testProps.name)
    expect(wrapper.text()).toContain(testProps.rating.toString())
    expect(wrapper.text()).toContain(testProps.count)
    expect(wrapper.find('img').exists()).toBe(true)
  })
})

describe('HomeView.vue', () => {
  it('is the view showing multiple cards?', () => {
    const wrapper = mount(View)
    const cards = wrapper.findAllComponents(Component)
    expect(cards.length > 1).toBe(true)
    console.log(wrapper.vm)
  })
})
