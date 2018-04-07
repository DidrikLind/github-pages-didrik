import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import Persona from './Persona'

// The Main component renders one of the provided components.
const Main = () => (
  <main>
    <Route exact={true} path='/' component={Home}/>
    <Route path='/persona' component={Persona}/>
  </main>
)

export default Main
