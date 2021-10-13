import React, { Suspense, lazy } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './styles/app.css'
import 'antd/dist/antd.css'
const Battle = lazy(() => import('./battle.js'))
const Popular = lazy(() => import('./popular'))

const aa = 22
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
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/battle' component={Battle} />
          <Route exact path='/' component={Popular} />
        </Switch>
      </Suspense>
      <div className='bottom'>@版权所有 liwei</div>
    </div>
  )
}

export default App
