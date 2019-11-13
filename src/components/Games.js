import React from "react";
import { connect } from "react-redux";
import { getGameIds } from "../selectors";

import GamesFromIds from "../components/GamesFromIds";

function Games({ gameIds }) {
  return <GamesFromIds gameIds={gameIds} />;
}

const mapStateToProps = (state, ownProps) => {
  return { gameIds: getGameIds(state) };
};

export default connect(mapStateToProps, null)(Games);
