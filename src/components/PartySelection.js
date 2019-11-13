import React from "react";
import { connect } from "react-redux";
import { getPartySelectionGameIds } from "../selectors";

import GamesFromIds from "../components/GamesFromIds";

function PartySelection({ gameIds }) {
  return <GamesFromIds gameIds={gameIds} />;
}

const mapStateToProps = (state, ownProps) => {
  return { gameIds: getPartySelectionGameIds(state) };
};

export default connect(mapStateToProps, null)(PartySelection);
