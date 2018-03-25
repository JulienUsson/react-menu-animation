import React, { Component } from 'react'
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
        <FabMenu items={items} />
      </div>
    )
  }
}

export default App
