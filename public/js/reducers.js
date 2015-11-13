'use strict'

import { ACTION } from './actions'
import { combineReducers } from 'redux'

const initialState = {
    foo: 1
}

function foo(state = 1, action) {
  switch (action.type) {
    case ACTION:
      console.log('action!')
      return action.text
    default:
      return state
  }
}

export default combineReducers({
  foo
})
