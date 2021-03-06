import React from "react";
import { connect } from "react-redux";
import { getOwnedGames } from "../selectors";

import Game from "../components/Game";

const selectGameId = (games, nbPlayers) => {
  var filteredGames = games.filter(x => x.min <= nbPlayers && nbPlayers <= x.max);
  return filteredGames.length === 0 ? undefined : filteredGames[0].id;
};

const BestGame = props => {
  const gameId = React.useMemo(
    () => selectGameId(props.games, props.nbPlayers),
    [props.nbPlayers, props.games] // update this hook only if nbPlayers changed or games have changed
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
  // TODO use a selector

  return {
    games: getOwnedGames(state),
    nbPlayers: state.bgg.party.nbPlayers
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
