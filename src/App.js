import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Start from './components/Start';
import Tasks from './components/tasks';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Start} />
        <Route path='/tasks/:level' component={Tasks} />
        <Route path='/' render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  )
}