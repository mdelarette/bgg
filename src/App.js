import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import "./App.css";

import { Button } from "@blueprintjs/core";

import Players from "./components/Players";
import Games from "./components/Games";
import Game from "./components/Game";

import { addPlayerToStore } from "./action";

class App extends Component {
  addPlayer = () => {
    let newPlayer = {
      id: uuid(),
      name: "rename me",
      bggName: "",
      age: 18,
      color: "blue",
      fetched: false
    };
    this.props.addPlayerToStore(newPlayer);
  };

  render() {
    return (
      <div className="App">
        <div className="AppElem">
          <Button intent="primary" text="Add player" onClick={this.addPlayer} style={{ padding: 16, margin: 16 }} />
          <Players />
        </div>

        <div className="AppElem">
          <Game />
        </div>

        <div className="AppElem">
          <Games className="AppElem" />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     dataVersion: state.dataVersion
//   };
// };

const mapDispatchToProps = {
  addPlayerToStore
};

export default connect(
  null,
  mapDispatchToProps
)(App);
