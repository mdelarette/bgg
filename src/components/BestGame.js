import React from "react";
import { connect } from "react-redux";

import Game from "../components/Game";

const selectGameId = (games, nbPlayers) => {
  var filteredGames = games.filter(x => x.min <= nbPlayers && nbPlayers <= x.max);
  return filteredGames.length === 0 ? undefined : filteredGames[0].id;
};

const BestGame = props => {
  const gameId = React.useMemo(
    () => selectGameId(props.games, props.nbPlayers),
    [props.nbPlayers, props.games.length] // update this hook only if nbPlayers changed
  );

  if (!gameId) {
    return (
      <div className="w3-margin w3-card w3-yellow">
        <h3>no game :(</h3>
      </div>
    );
  }

  return <Game id={gameId} />;
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
)(BestGame);
