import React from "react";
import { connect } from "react-redux";

import { Card } from "@blueprintjs/core";

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
      <Card style={{ margin: 16 }}>
        <h3 className="bp3-heading">no game :(</h3>
      </Card>
    );
  }

  return (
    <Card style={{ margin: 16 }}>
      <h1 className="bp3-heading">{game.name}</h1>
      <h2 className="bp3-heading">{`min: ${game.min} | max: ${game.max}`}</h2>
    </Card>
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
