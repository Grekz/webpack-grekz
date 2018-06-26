import React from 'react'
import Icon from './Icon'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() })

describe('<Icon /> rendering', () => {
  it('should render Icon', () => {
    const wrapper = shallow(<Icon />)
    expect(wrapper).toHaveLength(1)
  })
  it('should contain 1 svg element', () => {
    const wrapper = shallow(<Icon />)
    expect(wrapper.find('svg')).toHaveLength(1)
  })
  it('mathces the snapshot', () => {
    const tree = shallow(<Icon />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
