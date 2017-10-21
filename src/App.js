import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { Provider } from "react-redux";

import Header from './components/Header';
import Posts from './containers/Posts';
import CreatePost from './containers/CreatePost';
import PostDetail from './containers/PostDetail';

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts/:id" component={PostDetail} />
            <Route path="/create-post" component={CreatePost} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
