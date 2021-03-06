import React from "react";
import { connect } from "react-redux";
import { getWishedGameIds } from "../selectors";

import GamesFromIds from "../components/GamesFromIds";

function WishedGames({ gameIds }) {
  return <GamesFromIds gameIds={gameIds} />;
}

const mapStateToProps = (state, ownProps) => {
  return { gameIds: getWishedGameIds(state) };
};

export default connect(mapStateToProps, null)(WishedGames);
