import React from 'react'
import { shallow } from 'enzyme/build/index'
import {activities} from '../../../../___mocks___/activities'
import ChartView from '../ChartView'

describe('Test ChartView component', () => {

  it('Test shallow render ChartView component', () => {

    const wrapper = shallow(
      <ChartView activities={activities} />
    )

    expect(wrapper).toMatchSnapshot()
  })

})