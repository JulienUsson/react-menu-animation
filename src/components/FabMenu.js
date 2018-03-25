import React, { Fragment } from 'react'
import { Button, withStyles } from 'material-ui'
import CloseIcon from 'material-ui-icons/Close'
import { Motion, spring, presets } from 'react-motion'

const styles = theme => ({
  btn: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  fakeBtnGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gridColumnGap: '5px',
    gridRowGap: '5px',
  },
  fakeBtn: {
    backgroundColor: theme.palette.primary.main,
    height: 5,
    width: 5,
    borderRadius: '50%',
  },
  '@keyframes test': {
    from: {
      opacity: 0,
      transform: 'rotate(90deg)',
    },
    to: {
      opacity: 1,
      transform: 'rotate(0deg)',
    },
  },
  closeIcon: {
    animationName: 'test',
    animationDuration: '350ms',
  },
  menu: {
    position: 'absolute',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    gridColumnGap: '30px',
    gridRowGap: '30px',
    right: 90,
    bottom: 90,
  },
  menuItem: {
    position: 'absolute',
    minHeight: 'auto',
    boxShadow: 'none',
  },
})

const FabMenu = class extends React.Component {
  state = {
    open: false,
    displayMenuItems: false,
  }

  onClick = () => {
    this.setState(({ open, displayMenuItems, displayFakeItems }) => ({
      open: !open,
      displayMenuItems: !open ? true : displayMenuItems,
    }))
  }

  onRest = () => {
    this.setState(({ open, displayMenuItems, displayFakeItems }) => ({
      displayMenuItems: !open ? false : displayMenuItems,
    }))
  }

  renderContent = () => {
    const { classes } = this.props
    const { open, displayMenuItems } = this.state

    if (!open && !displayMenuItems) {
      return (
        <div className={classes.fakeBtnGrid}>
          <div className={classes.fakeBtn} />
          <div className={classes.fakeBtn} />
          <div className={classes.fakeBtn} />
          <div className={classes.fakeBtn} />
          <div className={classes.fakeBtn} />
          <div className={classes.fakeBtn} />
          <div className={classes.fakeBtn} />
          <div className={classes.fakeBtn} />
          <div className={classes.fakeBtn} />
        </div>
      )
    } else if (open) {
      return <CloseIcon className={classes.closeIcon} />
    } else {
      return ''
    }
  }

  renderMenuItem = (row, col) => {
    const { classes } = this.props
    const { open } = this.state

    return (
      <Motion
        defaultStyle={{
          opacity: open ? 0 : 1,
          x: open ? 0 : -75 - row * 75,
          y: open ? 0 : -75 - col * 75,
          size: open ? 5 : 56,
        }}
        style={{
          opacity: spring(open ? 1 : 0, presets.gentle),
          x: spring(open ? -75 - row * 75 : 0, presets.gentle),
          y: spring(open ? -75 - col * 75 : 0, presets.gentle),
          size: spring(open ? 56 : 5, presets.gentle),
        }}
        onRest={this.onRest}
      >
        {({ x, y, size, opacity }) => (
          <Button
            variant="fab"
            color="primary"
            className={classes.menuItem}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              height: size,
              width: size,
              right: 30 + row * 10,
              bottom: 30 + col * 10,
            }}
          >
            <CloseIcon style={{ opacity }} />
          </Button>
        )}
      </Motion>
    )
  }

  renderMenuItems = () => {
    const { displayMenuItems } = this.state

    if (!displayMenuItems) {
      return false
    }

    return (
      <Fragment>
        {this.renderMenuItem(0, 0)}
        {this.renderMenuItem(0, 1)}
        {this.renderMenuItem(0, 2)}
        {this.renderMenuItem(1, 0)}
        {this.renderMenuItem(1, 1)}
        {this.renderMenuItem(1, 2)}
        {this.renderMenuItem(2, 0)}
        {this.renderMenuItem(2, 1)}
        {this.renderMenuItem(2, 2)}
      </Fragment>
    )
  }

  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Button variant="fab" onClick={this.onClick} className={classes.btn}>
          {this.renderContent()}
        </Button>
        {this.renderMenuItems()}
      </Fragment>
    )
  }
}

export default withStyles(styles)(FabMenu)
