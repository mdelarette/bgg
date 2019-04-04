import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";

import Players from "./components/Players";
import Games from "./components/Games";
import Game from "./components/Game";

import { addPlayerToStore } from "./action";

class App extends Component {
  addPlayer = () => {
    let testNewPlayer = {};

    fetch("https://randomuser.me/api/")
      .then(results => results.json())
      .then(data => {
        testNewPlayer = data.results[0];
        console.log("addPlayer testNewPlayer", JSON.stringify(testNewPlayer, null, 2));

        let newPlayer = {
          id: testNewPlayer.login.uuid,
          name: testNewPlayer.name.first,
          bggName: "",
          age: testNewPlayer.dob.age,
          color: "blue",
          fetched: false,
          email: "",
          thumbnail: testNewPlayer.picture.thumbnail
        };
        this.props.addPlayerToStore(newPlayer);
      });

    // let newPlayer = {
    //   id: uuid(),
    //   name: "rename me",
    //   bggName: "",
    //   age: 18,
    //   color: "blue",
    //   fetched: false,
    //   email: ""
    // };
    // this.props.addPlayerToStore(newPlayer);
  };

  render() {
    return (
      <div className="w3-row w3-light-blue">
        <div className="w3-third w3-container">
          <Game />
        </div>

        <div className="w3-third w3-container">
          <button
            className="w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom"
            onClick={this.addPlayer}
          >
            Add player
          </button>

          <Players />
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
