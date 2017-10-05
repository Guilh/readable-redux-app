import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Header from './components/Header';
import Posts from './containers/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />

            <Route exact path="/" component={Posts} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
