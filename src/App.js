import React, { Component } from "react";
import { connect } from "react-redux";

import Players from "./components/Players";
import Games from "./components/Games";
import WishedGames from "./components/WishedGames";
import BestGame from "./components/BestGame";
import Game from "./components/Game";

import { addPlayerToStore } from "./action";

const ninjaModeOn = "w3-hide-small w3-hide-medium w3-hide-large";
const ninjaModeOff = "";

const ninjaMode = ninjaModeOff;

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
        <p className="w3-hide-medium w3-hide-large">small</p>
        <p className="w3-hide-small w3-hide-large">medium</p>
        <p className="w3-hide-small w3-hide-medium">large</p>

        <div className={"w3-third w3-container " + ninjaMode}>
          <BestGame />
        </div>

        <div className="w3-third w3-container">
          <button
            className="w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom"
            onClick={this.addPlayer}
          >
            <span className={ninjaMode}>Add player</span>
          </button>

          <Players />
        </div>

        <div className={"w3-third w3-container " + ninjaMode}>
          <Game id={"42"} />
        </div>

        <div className={"w3-third" + ninjaMode}>
          <Games />
        </div>

        <div className={"w3-third" + ninjaMode}>
          <WishedGames />
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
