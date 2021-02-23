import { connect } from "react-redux";
import { getPartySelectionGameIds } from "../selectors";

import TableGamesFromIds from "../components/TableGamesFromIds";

function PartySelection({ gameIds }) {
  return <TableGamesFromIds gameIds={gameIds} />;
}

const mapStateToProps = (state, ownProps) => {
  return { gameIds: getPartySelectionGameIds(state) };
};

export default connect(mapStateToProps, null)(PartySelection);
