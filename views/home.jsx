'use strict'

import React from 'react'
import Layout from './layout'

export default class Home extends Layout {
  constructor() {
    super()
  }

  render() {
    return (
      <Layout>
        <h1>Hello from Rendered React Home component</h1>
      </Layout>
    )
  }
}
