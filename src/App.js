import React from "react";
import { connect } from "react-redux";

import Party from "./components/Party";
// import BestGame from "./components/BestGame";
import PartySelection from "./components/PartySelection";

import Footer from "./components/Footer";
import Games from "./components/Games";
import ModalGame from "./components/ModalGame";
import Players from "./components/Players";
import WishedGames from "./components/WishedGames";

import { addPlayerToStore } from "./action";

import { ModalContext } from "./contexts/modal-context.js";
import { Page } from "./constants/pages";

import { name, version } from "../package.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setModalGame = id => {
      console.log("App.setModalGame:", id);
      this.setState({
        ...this.state,
        modalGameId: id
      });
    };

    this.state = {
      modalGameId: "0",
      setModalGame: this.setModalGame,
      page: Page.Home
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

  handlePageChange = (event, page) => {
    if (this.state.page !== page) {
      this.setState({
        page: page
      });
    }
  };

  render() {
    const { page } = this.state;

    return (
      <ModalContext.Provider value={this.state}>
        <ModalGame />

        <div className="bgg-app">
          <header className="w3-container w3-theme-d5 bgg-header">
            {name} - {version}
          </header>

          <div className="w3-row bgg-body">
            {page === Page.Home && (
              <div className="w3-col l8 w3-container ">Home</div>
            )}

            {page === Page.Owners && (
              <div className="w3-col l8 w3-container ">
                <button
                  className="w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom"
                  onClick={this.addPlayer}
                >
                  <span>Add owner</span>
                </button>

                <Players />
              </div>
            )}

            {page === Page.Games && (
              <>
                <div className="w3-col l8">
                  <span>TODO if more than one owner add a filter</span>
                </div>
                <div className="w3-col l8">
                  <span>tab for owned and wished games</span>
                </div>

                <div className="w3-col l8">
                  <Games />
                </div>

                <div className="w3-col l8">
                  <WishedGames />
                </div>
              </>
            )}

            {page === Page.Party && (
              <div className="w3-col l8">
                <Party />
                {/* <BestGame /> */}
                <PartySelection />
              </div>
            )}
          </div>

          <Footer page={this.state.page} onClick={this.handlePageChange} />
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

export default connect(null, mapDispatchToProps)(App);
