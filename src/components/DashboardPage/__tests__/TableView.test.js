import React from 'react'
import TestRenderer from 'react-test-renderer'
import {activities} from '../../../../___mocks___/activities'
import TableView from '../TableView'

describe('Test TableView component', () => {

  it('Test render TableView component', () => {

    const instance = TestRenderer.create(
      <TableView activities={activities} />
    )

    expect(instance.toJSON()).toMatchSnapshot()
  })

})