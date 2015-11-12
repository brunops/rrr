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
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title}</title>

          <link type="text/css" rel="stylesheet" href="app.css" />
        </head>
        <body>
          <div className="content container-fluid">
            {this.props.children}
          </div>

          <script src="app.js"></script>
        </body>
      </html>
    )
  }
}

