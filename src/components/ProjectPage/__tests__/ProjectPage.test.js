import React from 'react'
import ProjectPage from '../index'
import { shallow } from 'enzyme'
import { history } from '../../../helpers/history'
import { Router } from 'react-router-dom'

describe('Test ProjectPage component', () => {

  it('Test shallow render ProjectPage component', () => {
    const wrapper = shallow(
      <Router history={history}>
        <ProjectPage />
      </Router>
    )

    expect(wrapper).toMatchSnapshot()
  })

})