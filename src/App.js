import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardDetails from "./components/card-details";
import Home from "./components/home";
import Results from "./components/results";
import {
  getCards,
} from './helpers'

export default class App extends React.Component {
  state = {
    annualIncome: 20000,
    employmentStatus: "Full Time Employed",
    cards: []
  };

  componentDidMount() {
    getCards().then(cards => {
      this.setState({ cards });
    });
  }

  handleSubmit = ({ annualIncome, employmentStatus }) => {
    this.setState({ annualIncome, employmentStatus });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={props => (
              <Home
                handleSubmit={this.handleSubmit}
                {...props}
                {...this.state}
              />
            )}
          />
          <Route
            exact
            path="/results"
            component={props => <Results {...props} {...this.state} />}
          />
          <Route
            exact
            path="/card-details/:id"
            component={props => <CardDetails {...props} {...this.state} />}
          />
        </Switch>
      </Router>
    );
  }
}
