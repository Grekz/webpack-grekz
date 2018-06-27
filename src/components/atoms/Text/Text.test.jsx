import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import Text from './Text'

configure({ adapter: new Adapter() })

describe('<Text /> rendering', () => {
  it('should render Text', () => {
    const wrapper = mount(<Text />)
    expect(wrapper).toHaveLength(1)
  })
  it('should contain 1 p element', () => {
    const wrapper = mount(<Text />)
    expect(wrapper.find('p')).toHaveLength(1)
  })
  it('mathces the snapshot', () => {
    const tree = mount(<Text />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
