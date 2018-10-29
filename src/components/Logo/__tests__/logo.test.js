import React from 'react'
import TestRenderer from 'react-test-renderer';
import Logo from '../index'

describe('Test Logo component', () => {

  it('Test render Logo component', () => {

    const instance = TestRenderer.create(
      <Logo/>
    )
    expect(instance.toJSON()).toMatchSnapshot()
  })
})