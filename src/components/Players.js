import React from "react";
import { connect } from "react-redux";

import Player from "./Player";

const Players = props => {
  return (
    <div>
      {props.players.map((player, index) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    players: state.bgg.players
  };
};

export default connect(
  mapStateToProps,
  null
)(Players);
