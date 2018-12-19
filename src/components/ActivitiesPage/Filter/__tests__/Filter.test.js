import React from 'react'
import { Provider } from 'react-redux'
import createStore from 'redux-mock-store'
import { shallow } from 'enzyme/build/index'
import Filter from '../index'

describe('Test Filter component', () => {

  it('Test shallow render Filter component', () => {

    const mockStore = createStore([])
    const store = mockStore({})

    const wrapper = shallow(
      <Provider store={store}>
        <Filter />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })

})