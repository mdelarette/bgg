import React from "react";
import { connect } from "react-redux";
import { getWishedGameIds } from "../selectors";

import GameRow from "../components/GameRow";

function WishedGames({ gameIds }) {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="w3-teal" style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ flex: "1 1 80%" }}>name</p>
          <p style={{ flex: "0 1 10%" }}>min</p>
          <p style={{ flex: "0 1 10%" }}>max</p>
        </div>

        {gameIds.map(id => (
          <GameRow key={id} id={id} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { gameIds: getWishedGameIds(state) };
};

export default connect(
  mapStateToProps,
  null
)(WishedGames);
