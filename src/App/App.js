import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App-container'>
        <nav className='nav-bar'>
          <ul>
            <li>Services</li>
            <li>Insights</li>
            <li>Contact</li>
          </ul>
        </nav>
        <section>
          <p>
            We team up to create solutions that make organizations, society,
            services and products better.
          </p>
        </section>
      </div>
    )
  }
}

export default App
