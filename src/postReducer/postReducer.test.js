import React from 'react'
import { shallow } from 'enzyme'

import postReducer from './postReducer.js'

it('renders without props', () => {
  shallow(<postReducer />)
})
