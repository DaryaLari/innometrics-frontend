import React from 'react'
import { shallow } from 'enzyme/build/index'
import {activities} from '../../../../___mocks___/activities'
import ChartView from '../ChartView'
import createStore from 'redux-mock-store'
import { Provider } from 'react-redux'

describe('Test ChartView component', () => {

  it('Test shallow render ChartView component', () => {

    const mockStore = createStore([]);
    const store = mockStore({})

    const wrapper = shallow(
      <Provider store={store}>
        <ChartView activities={activities} />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
  })

})