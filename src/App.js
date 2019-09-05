import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';

import React from 'react';
import { Provider } from 'react-redux';
import MainPage from './components/MainPage';
import {store} from './store/index'
import './App.css';


export default function App() {
  return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
  );
}
