import React from 'react';
import './App.css';
import Tasks from './components/tasks';

function App() {
  return (
    <div>
      <div className="container my-5">
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
