import React from 'react'
import ReactDOM from 'react-dom'
import { create } from 'jss'
import jssPreset from 'jss-preset-default'
import { JssProvider } from 'react-jss'
import { CssBaseline, MuiThemeProvider } from 'material-ui'
import theme from './theme'
import App from './App'

const jss = create(jssPreset())

ReactDOM.render(
  <JssProvider jss={jss}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('root')
)
