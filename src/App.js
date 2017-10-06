import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { Provider } from "react-redux";

import Header from './components/Header';
import Posts from './containers/Posts';

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />

            <Route exact path="/" component={Posts} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
