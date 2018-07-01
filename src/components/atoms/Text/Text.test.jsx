import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

import Text from './text.component'

configure({ adapter: new Adapter() })

describe('<Text /> rendering', () => {
  it('should render Text', () => {
    const wrapper = mount(<Text />)
    expect(wrapper).toHaveLength(1)
  })
  it('should contain 1 p element', () => {
    const wrapper = mount(<Text />)
    expect(wrapper.find('span')).toHaveLength(1)
  })
  it('mathces the snapshot', () => {
    const tree = mount(<Text />)
    expect(toJson(tree)).toMatchSnapshot()
  })
})
