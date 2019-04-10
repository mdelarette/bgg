import React from "react";
import { connect } from "react-redux";

const Game = ({ id, game }) => {
  console.log("id", id);
  console.log("game", game);

  if (!game) {
    return (
      <div className="w3-margin w3-card w3-yellow">
        <h3>no game :(</h3>
      </div>
    );
  }

  return (
    <div className="w3-panel w3-pale-green w3-bottombar w3-border-green w3-border">
      <h1>{game.name}</h1>
      <h2>{`min: ${game.min} | max: ${game.max}`}</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log("ownProps.id", ownProps.id);
  // console.log("state.bgg.games", JSON.stringify(state.bgg.games, null, 2));
  return {
    game: state.bgg.games.find(x => x.id === ownProps.id)
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchReclamation: id => dispatch(fetchReclamation(id)),
//   initDetailsReclamation: () => dispatch(initDetailsReclamation())
// });

export default connect(
  mapStateToProps,
  null
)(Game);
