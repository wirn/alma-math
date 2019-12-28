import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Start from './components/Start/LevelLinks';
import Tasks from './components/tasks';
import UserContextProvider from './context/UserContext';
import NameChanger from './components/Start/NameChanger';
import Start from "./components/Start/Start";

export default function App() {
  return (
    <div>
      <UserContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Start} />
            <Route path='/tasks/:level' component={Tasks} />
            <Route path='/' render={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  )
}