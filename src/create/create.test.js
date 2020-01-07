import React from 'react'
import { shallow } from 'enzyme'

import Create from './create.js'

it('renders without props', () => {
  shallow(<Create />)
})
