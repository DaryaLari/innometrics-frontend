import React from 'react'
import createStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import AuthorizationPage from "../index"
describe('Test AuthorizationPage component', () => {

  it('Test shallow render AuthorizationPage component', () => {

    const mockStore = createStore([]);
    const store = mockStore({})

    const wrapper = shallow(
      <Provider store={store}>
        <AuthorizationPage />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })

})