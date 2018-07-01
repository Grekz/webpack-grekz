import React from 'react'
import Button from './button.component'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<Button /> rendering', () => {
  it('should render Button', () => {
    const wrapper = mount(<Button />)
    expect(wrapper).toHaveLength(1)
  })
  it('should contain 1 button element', () => {
    const wrapper = mount(<Button />)
    expect(wrapper.find('button')).toHaveLength(1)
  })
  it('should contain 1 anchor element', () => {
    const wrapper = mount(<Button as="a" />)
    expect(wrapper.find('a')).toHaveLength(1)
  })
  it('mathces the snapshot', () => {
    const tree = mount(<Button />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
