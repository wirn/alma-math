import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tasks from './components/tasks';
import UserContextProvider from './context/UserContext';
import Start from "./components/Start/Start";
import { UserContext } from './context/UserContext';

export default function App() {
  return (
    <div>
      <UserContextProvider>

        <UserContext.Consumer>
          {(context) => {
            const { name, currentLevel } = context;
            return (
              <div className="container my-5">
                <div className="text-center">
                  <h1>Almas matteland</h1>
                  <h2 className="mb-4">{name}
                    {currentLevel !== 0 &&
                      <i> Nivå {currentLevel}</i>
                    }
                  </h2>
                </div>

                <BrowserRouter>
                  <Switch>
                    <Route path='/' exact component={Start} />
                    <Route path='/tasks/:level' component={Tasks} />
                    <Route path='/' render={() => <div>404</div>} />
                  </Switch>
                </BrowserRouter>

              </div>
            )
          }}
        </UserContext.Consumer>

      </UserContextProvider>
    </div>
  )
}