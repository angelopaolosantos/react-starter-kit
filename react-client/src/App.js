import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Route name='home' exact path='/' component={HomePage} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App
