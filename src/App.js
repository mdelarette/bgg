import React, { Component } from "react";
import { connect } from "react-redux";

import Players from "./components/Players";
import Games from "./components/Games";
import WishedGames from "./components/WishedGames";
import BestGame from "./components/BestGame";
import Game from "./components/Game";

import { addPlayerToStore } from "./action";

class App extends Component {
  addPlayer = () => {
    fetch("https://randomuser.me/api/")
      .then(results => results.json())
      .then(data => {
        let testNewPlayer = data.results[0];
        // console.log("addPlayer testNewPlayer", JSON.stringify(testNewPlayer, null, 2));

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
  };

  render() {
    return (
      <div className="w3-row w3-light-blue">
        <div className="w3-third w3-container ">
          <BestGame />
        </div>

        <div className="w3-third w3-container">
          <button
            className="w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom"
            onClick={this.addPlayer}
          >
            <span>Add player</span>
          </button>

          <Players />
        </div>

        <div className="w3-third">
          <Games />
        </div>

        <div className="w3-third">
          <WishedGames />
        </div>

        <div className="w3-third w3-container">
          <Game id={"42"} />
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
