import React from "react";
import { connect } from "react-redux";
import useLocalStorage from "../hooks/use-local-storage";

import Player from "./Player";

const Players = props => {
  const [name, setName] = useLocalStorage("name", "Bob");

  return (
    <React.Fragment>
      {/* <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} /> */}

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

// const mapDispatchToProps = dispatch => ({
//   fetchReclamation: id => dispatch(fetchReclamation(id)),
//   initDetailsReclamation: () => dispatch(initDetailsReclamation())
// });

export default connect(
  mapStateToProps,
  null
)(Players);
