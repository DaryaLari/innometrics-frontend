import React from 'react'
import createStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import DashboardPage from '../index'

describe('Test DashboardPage component', () => {

  it('Test shallow render DashboardPage component', () => {

    const mockStore = createStore([])
    const store = mockStore({})

    const wrapper = shallow(
      <Provider store={store}>
        <DashboardPage />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })

})