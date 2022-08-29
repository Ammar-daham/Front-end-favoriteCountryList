import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'

const linkStyle = {
  background: 'blue',
}

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} style={linkStyle} />
    <Route exact path="/products/:id" component={Product} />
  </Switch>
)

export default Routes
