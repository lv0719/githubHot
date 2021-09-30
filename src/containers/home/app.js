import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Battle from './battle.js'
import Popular from './popular.js'
import './styles/app.css'

function App() {
  return (
    <div className='App'>
      <div className='banner'>
        <span className='toPopular'>
          <NavLink to='/'>Popular</NavLink>
        </span>
        <span className='toBattle'>
          <NavLink to='/battle'>Battle</NavLink>
        </span>
      </div>
      <Switch>
        <Route path='/battle' component={Battle} />
        <Route exact path='/' component={Popular} />
      </Switch>
      <div className='bottom'>@版权所有 liwei</div>
    </div>
  )
}

export default App
