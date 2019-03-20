import React from "react";
import { connect } from "react-redux";

import Player from "./Player";

const Players = props => {
  return (
    <React.Fragment>
      <div>
        {props.players.map((player, index) => (
          <Player key={player.id} player={player} />
        ))}
      </div>
    </React.Fragment>
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
