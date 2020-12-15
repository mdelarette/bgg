import React from "react";
import { connect } from "react-redux";
import { getGameIds } from "../selectors";

import GamesFromIds from "../components/GamesFromIds";

function FilteredGames({ gameIds }) {
  return <GamesFromIds gameIds={gameIds} />;
}

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps);

  return { gameIds: getGameIds(state) };
};

export default connect(mapStateToProps, null)(FilteredGames);
