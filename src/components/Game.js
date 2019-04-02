import React from "react";
import { connect } from "react-redux";

const selectGame = (games, nbPlayers) => {
  var filteredGames = games.filter(x => x.min <= nbPlayers && nbPlayers <= x.max);
  return filteredGames.length === 0 ? undefined : filteredGames[0];
};

const Game = props => {
  const game = React.useMemo(
    () => selectGame(props.games, props.nbPlayers),
    [props.nbPlayers, props.games.length] // update this hook only if nbPlayers changed
  );

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
  return {
    games: state.bgg.games,
    nbPlayers: state.bgg.players.length
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
