import React, { Component } from 'react'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import FabMenu from './components/FabMenu'

const items = [
  { color: '#E91E63', icon: 'map' },
  { color: '#9C27B0', icon: 'my_location' },
  { color: '#F44336', icon: 'local_taxi' },
  { color: '#673AB7', icon: 'local_shipping' },
  { color: '#2196F3', icon: 'restaurant' },
  { color: '#3F51B5', icon: 'place' },
  { color: '#FF9800', icon: 'train' },
  { color: '#4CAF50', icon: 'tram' },
]

class App extends Component {
  render() {
    return (
      <div>
        <GitHubForkRibbon
          position="right"
          color="red"
          href="https://github.com/JulienUsson/react-menu-animation"
          target="_blank"
        >
          Fork me on GitHub
        </GitHubForkRibbon>

        <FabMenu items={items} />
      </div>
    )
  }
}

export default App
