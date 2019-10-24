import React from 'react';
import './App.css';
import Tasks from './components/tasks';

function App() {
  return (
    <div>
      <div className="container container-main">
        <div className="row">
          <div className="col-12">
            <Tasks />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
