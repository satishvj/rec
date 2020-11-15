import React from "react";
import ReactDOM from "react-dom";
import './style.css';
import Recipes from './Recipes'
import { Route, Router } from 'react-router-dom'
import history from "./history";
import Pay from './Pay'

const Index = () => {
  return(
  <Router history={history}>
  <Route path='/' exact strict render={() => {
      return <Recipes />;
  }}>
  </Route>

  <Route path='/pay' exact strict render={() => {
      return <Pay/>;
  }}>
  </Route>
  </Router>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
