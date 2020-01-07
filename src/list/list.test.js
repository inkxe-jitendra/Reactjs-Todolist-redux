import React from 'react'
import { shallow } from 'enzyme'

import List from './list.js'

it('renders without props', () => {
  shallow(<List />)
})
