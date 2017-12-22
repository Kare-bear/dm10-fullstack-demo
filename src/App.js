import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

// import routes

import routes from "./router";

// import everything for testing redux connection.

import { connect } from "react-redux";
import { testAction } from "./ducks/reducer";

class App extends Component {
  componentDidMount() {
    // add axios to packages
    // axios.get("/api/test").then(response => {
    //   // confirm you can get data back in the response
    //   // Now would be a good time to set up redux since we
    //   // know our app works front to back.
    //   console.log(response);
    // });

    // Finally, test your component to make sure everything is connected.
    // if there's something not working, Debug
    this.props.testAction();

    // once we know our app is connected we should see the updated props in the console.
    // we can map over our dummy data to make sure it renders.
    // Once we get content on the screen we can remove the test connections
    // and build knowing that everything flows appropriately.
    // At this point we can add our router, or could have brought in our router at
    // Any time.
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {routes}
        <div />
      </div>
    );
  }
}
// put your redux store on props in the connected component
// You'll follow this same pattern for every connected component

const mapStateToProps = state => state;

export default connect(mapStateToProps, { testAction })(App);

// That's the basic setup of everything from

// We've covered
// MASSIVE
// REACT
//REACT-ROUTER
// REDUX
// EXPRESS
// NODE
// MIDDLEWARE
// CONNECTING IT ALL TOGETHER
// Let me know if there's any questions!
