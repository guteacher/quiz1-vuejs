import { mount } from '@vue/test-utils'
import Component from '@/components/CoffeeSlottedCardComponent.vue'
import View from '@/views/HomeView.vue'

const testProps = {
  name: "Some Test Coffee",
  image: "coffee3.png",
  rating: 3.2,
  count: "12k"
}

describe('CoffeeSlottedCardComponent.vue', () => {
  it('is the slotted card showing name, rating, count and image?', () => {
    const wrapper = mount(Component, {
      props: testProps
    })
    expect(wrapper.text()).toContain(testProps.name)
    expect(wrapper.text()).toContain(testProps.rating.toString())
    expect(wrapper.text()).toContain(testProps.count)
    expect(wrapper.find('img').exists()).toBe(true)
  })
})

describe('CoffeeSlottedCardComponent.vue', () => {
  it('is the slotted card showing top and bottom slot contents?', () => {
    const wrapper = mount(Component, {
      props: testProps,
      slots: {
        top: '<h1 class="slot-test">Hello</h1>',
        bottom: '<p class="slot-test">Goodbye</p>'
      }
    })
    console.log(wrapper.html())
    expect(wrapper.findAll(".slot-test").length).toBe(2)
  })
})

describe('HomeView.vue', () => {
  it('is the view showing multiple slotted cards?', () => {
    const wrapper = mount(View)
    const cards = wrapper.findAllComponents(Component)
    expect(cards.length > 1).toBe(true)
    console.log(wrapper.vm)
  })
})
