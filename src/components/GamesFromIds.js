import React from "react";

import GameRow from "../components/GameRow";

function GamesFromIds({ gameIds }) {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="w3-bar bgg-table-header"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div
            className="w3-padding-small w3-large"
            style={{ flex: "1 1 auto" }}
          >
            name ({gameIds.length})
          </div>

          <div
            className="w3-padding-small w3-large w3-center"
            style={{ flex: "0 1 55px" }}
          >
            min
          </div>

          <div
            className="w3-padding-small w3-large w3-center"
            style={{ flex: "0 1 55px" }}
          >
            max
          </div>
        </div>

        {gameIds.map((id, index) => (
          <GameRow key={id} id={id} odd={index & 1} />
        ))}
      </div>
    </div>
  );
}

export default GamesFromIds;
