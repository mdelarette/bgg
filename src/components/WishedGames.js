import React from "react";
import { connect } from "react-redux";
import { getWishedGameIds } from "../selectors";

import GameRow from "../components/GameRow";

function WishedGames({ gameIds }) {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="w3-bar w3-teal" style={{ display: "flex", flexDirection: "row" }}>
          <div className="w3-padding-small w3-large" style={{ flex: "1 1 auto" }}>
            name ({gameIds.length})
          </div>

          <div className="w3-padding-small w3-large w3-center" style={{ flex: "0 1 55px" }}>
            min
          </div>

          <div className="w3-padding-small w3-large w3-center" style={{ flex: "0 1 55px" }}>
            max
          </div>
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
