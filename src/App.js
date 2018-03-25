import React, { Component } from 'react'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import FabMenu from './components/FabMenu'

const items = [
  {
    color: '#E91E63',
    icon: 'map',
    iconColor: '#fff',
    onClick: () => alert('map'),
  },
  {
    color: '#9C27B0',
    icon: 'my_location',
    iconColor: '#fff',
    onClick: () => alert('my location'),
  },
  {
    color: '#F44336',
    icon: 'local_taxi',
    iconColor: '#fff',
    onClick: () => alert('local taxi'),
  },
  {
    color: '#673AB7',
    icon: 'local_shipping',
    iconColor: '#fff',
    onClick: () => alert('local shipping'),
  },
  {
    color: '#2196F3',
    icon: 'restaurant',
    iconColor: '#fff',
    onClick: () => alert('restaurant'),
  },
  {
    color: '#3F51B5',
    icon: 'place',
    iconColor: '#fff',
    onClick: () => alert('place'),
  },
  {
    color: '#FF9800',
    icon: 'train',
    iconColor: '#fff',
    onClick: () => alert('train'),
  },
  {
    color: '#4CAF50',
    icon: 'tram',
    iconColor: '#fff',
    onClick: () => alert('tram'),
  },
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
