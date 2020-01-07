import React from 'react'
import { shallow } from 'enzyme'

import Post from './post.js'

it('renders without props', () => {
  shallow(<Post />)
})
