import React from 'react'
import createStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import AuthorizationPage from "../index"
import TestRenderer from 'react-test-renderer'

jest.mock('../LoginForm', () => ()=> <div>Login</div>)
jest.mock('../RegistrationForm', () => ()=> <div>Register</div>)

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

  it('Test renders \'Logout confirmation\' when user authenticated', () => {

    const mockStore = createStore([]);
    const initialStore = {
      user: {
        authorized: true
      },
      form: {}
    }
    const store = mockStore(initialStore)

    const instance = TestRenderer.create(
      <Provider store={store}>
        <AuthorizationPage />
      </Provider>
    )

    expect(!!instance.root.find(element => element.children && element.children.includes('Logout confirmation')))
      .toEqual(true)
    expect(instance.toJSON()).toMatchSnapshot()
  })

  it('Test renders LoginForm when user is not authenticated', () => {

    const mockStore = createStore([]);
    const initialStore = {
      user: {
        authorized: false
      },
      form: {}
    }
    const store = mockStore(initialStore)
    const props = {
      match: {
        path: '/login'
      }
    }

    const instance = TestRenderer.create(
      <Provider store={store}>
        <AuthorizationPage {...props} />
      </Provider>
    )

    expect(!!instance.root.find(element => element.children && element.children.includes('Login')))
      .toEqual(true)
    expect(instance.toJSON()).toMatchSnapshot()
  })

  it('Test renders RegistrationForm when user is not authenticated', () => {

    const mockStore = createStore([]);
    const initialStore = {
      user: {
        authorized: false
      },
      form: {}
    }
    const store = mockStore(initialStore)
    const props = {
      match: {
        path: '/register'
      }
    }

    const instance = TestRenderer.create(
      <Provider store={store}>
        <AuthorizationPage {...props} />
      </Provider>
    )

    expect(!!instance.root.find(element => element.children && element.children.includes('Register')))
      .toEqual(true)
    expect(instance.toJSON()).toMatchSnapshot()
  })

})