import React from 'react'
import Img from './img.component'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<Img /> rendering', () => {
  it('should render Img', () => {
    const wrapper = mount(<Img />)
    expect(wrapper).toHaveLength(1)
  })
  it('should contain 1 img element', () => {
    const wrapper = mount(<Img />)
    expect(wrapper.find('img')).toHaveLength(1)
  })
  it('mathces the snapshot', () => {
    const tree = mount(<Img />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
