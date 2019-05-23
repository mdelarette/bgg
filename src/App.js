import React from "react";
import { connect } from "react-redux";

import Players from "./components/Players";
import Games from "./components/Games";
import WishedGames from "./components/WishedGames";
import BestGame from "./components/BestGame";
import Game from "./components/Game";
import ModalGame from "./components/ModalGame";

import { addPlayerToStore } from "./action";

import { ModalContext } from "./contexts/modal-context.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setModalGame = id => {
      this.setState(state => ({
        modalGameId: id
      }));
    };

    this.state = {
      modalGameId: "42",
      setModalGame: this.setModalGame
    };
  }

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
      <ModalContext.Provider value={this.state}>
        <ModalGame />

        <div className="w3-row bgg-app">
          <div className="w3-col l8 w3-container ">
            <BestGame />
          </div>

          <div className="w3-col l8 w3-container">
            <button
              className="w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom"
              onClick={this.addPlayer}
            >
              <span>Add player</span>
            </button>

            <Players />
          </div>

          <div className="w3-col l8">
            <Games />
          </div>

          <div className="w3-col l8">
            <WishedGames />
          </div>

          <div className="w3-col l8 w3-container">
            <Game id={"42"} />
          </div>
        </div>
      </ModalContext.Provider>
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
