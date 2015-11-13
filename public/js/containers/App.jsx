'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { action } from '../actions'

export default class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { dispatch } = this.props

    return (
      <div>
        <p>hello from React App container</p>

        <a href="#" onClick={e => dispatch(action(5)) }>here</a>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  console.log(state)
  return {
    foo: state.foo
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)
