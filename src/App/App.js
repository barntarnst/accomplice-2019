import React, { Component } from 'react'
import './App.css'
import { CreateMarkup } from '../components'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <CreateMarkup html='<h1>accomplice-2019</h1>' />
        </header>
      </div>
    )
  }
}

export default App
