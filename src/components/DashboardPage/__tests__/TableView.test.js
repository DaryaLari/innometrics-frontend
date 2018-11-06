import React from 'react'
import { Provider } from 'react-redux'
import {activities} from '../../../../___mocks___/activities'
import TableView from '../TableView'
import { shallow } from 'enzyme/build/index'
import createStore from 'redux-mock-store'

describe('Test TableView component', () => {

  it('Test shallow render TableView component', () => {

    const mockStore = createStore([]);
    const store = mockStore({})

    const wrapper = shallow(
      <Provider store={store}>
        <TableView activities={activities} />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })

})