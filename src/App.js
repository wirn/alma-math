import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tasks from './components/tasks';
import UserContextProvider from './context/UserContext';
import Start from "./components/Start/Start";
import { UserContext } from './context/UserContext';

import bronce from './assets/images/icons/medals/bronce.png';
import silver from './assets/images/icons/medals/silver.png';
import gold from './assets/images/icons/medals/gold.png';

export default function App() {
  return (
    <div>
      <UserContextProvider>

        <UserContext.Consumer>
          {(context) => {
            const { name, currentLevel, levelCompleted } = context;

            console.log('ett', levelCompleted.one);
            console.log('två', levelCompleted.two);
            console.log('tre', levelCompleted.three);
            // const lC = c.map((x) =>
            //   <li>{x}</li>
            // );

            return (
              <div className="container my-5">
                <div className="text-center">
                  <h1>Almas matteland</h1>

                  {Array.from(Array(levelCompleted.one), () => <img src={bronce} alt="bronce" />)}

                  {Array.from(Array(levelCompleted.two), () => <img src={silver} alt="silver" />)}

                  {Array.from(Array(levelCompleted.three), () => <img src={gold} alt="gold" />)}

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