import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import "./App.css";

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
      <div className="w3-row w3-light-blue">
        <div className="w3-third w3-container">
          <button className="w3-margin w3-button w3-teal" onClick={this.addPlayer}>
            Add player
          </button>

          <Players />
        </div>

        <div className="w3-third w3-container">
          <Game />
        </div>

        <div className="w3-third w3-container">
          <Games />
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
