import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MiscPage from './pages/MiscPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <header className="App-header"></header> */}
        <div>
          {/* <Switch> */}
          <Route path="/" exact component={LandingPage} />
          <Route exact path="/misc" component={MiscPage} />
          {/* </Switch> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
