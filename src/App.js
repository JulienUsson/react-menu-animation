import React, { Component } from 'react'
import { withStyles } from 'material-ui'
import FabMenu from './components/FabMenu'

const styles = theme => ({
  root: {},
})

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <FabMenu />
      </div>
    )
  }
}

export default withStyles(styles)(App)
