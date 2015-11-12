'use strict'

import React from 'react'

export default class Layout extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <title>{this.props.title}</title>
        </head>
        <body>
          <div className="container-fluid content">
            {this.props.children}
          </div>

          <script src="app.js"></script>
        </body>
      </html>
    )
  }
}

