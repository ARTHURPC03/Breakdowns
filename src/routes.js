import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Bus from './pages/Bus'
import Esquerda from './pages/Esquerda'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/bus" component={Bus} />
        <Route path="/esq" component={Esquerda} />
      </Switch>
    </BrowserRouter>
  )
}
