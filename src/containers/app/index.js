import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Authenticate from '../authenticate'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/login">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/login" component={Authenticate} />
    </main>
  </div>
)

export default App
