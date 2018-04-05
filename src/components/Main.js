import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Persona from './Persona'

// The Main component renders one of the provided components.
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/persona' component={Persona}/>
    </Switch>
  </main>
)

export default Main
