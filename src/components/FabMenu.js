import React, { Fragment } from 'react'
import { Button, withStyles, Icon } from 'material-ui'
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
    const { classes, items } = this.props
    const { open, displayMenuItems } = this.state

    if (!open && !displayMenuItems) {
      return (
        <div className={classes.fakeBtnGrid}>
          {items.map(({ color }, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className={classes.fakeBtn}
            />
          ))}
        </div>
      )
    } else if (open) {
      return <Icon className={classes.closeIcon}>close</Icon>
    } else {
      return ''
    }
  }

  renderMenuItem = (row, col, { color, icon, iconColor, onClick }) => {
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
          opacity: spring(
            open ? 1 : 0,
            open ? presets.gentle : presets.noWobble
          ),
          x: spring(
            open ? 30 - (3 - col) * 75 : 0,
            open ? presets.gentle : presets.noWobble
          ),
          y: spring(
            open ? 30 - (3 - row) * 75 : 0,
            open ? presets.gentle : presets.noWobble
          ),
          size: spring(open ? 56 : 5, open ? presets.gentle : presets.noWobble),
        }}
      >
        {({ x, y, size, opacity }) => {
          if (!open && size < 5.2) {
            this.onRest()
          }

          return (
            <Button
              variant="fab"
              className={classes.menuItem}
              style={{
                backgroundColor: color,
                transform: `translate(${x}px, ${y}px)`,
                height: size,
                width: size,
                right: 20 + (3 - col) * 10,
                bottom: 20 + (3 - row) * 10,
              }}
              onClick={e => {
                this.onClick()
                onClick && onClick(e)
              }}
            >
              <Icon style={{ opacity, color: iconColor }}>{icon}</Icon>
            </Button>
          )
        }}
      </Motion>
    )
  }

  renderMenuItems = () => {
    const { items } = this.props
    const { displayMenuItems } = this.state

    if (!displayMenuItems) {
      return false
    }

    return (
      <Fragment>
        {items.map(({ color, icon, iconColor, onClick }, index) =>
          this.renderMenuItem(Math.floor(index / 3), index % 3, {
            color,
            icon,
            iconColor,
            onClick,
          })
        )}
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
