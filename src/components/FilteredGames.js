import { connect } from "react-redux";
import { getFilteredGameIds } from "../selectors";

import TableGamesFromIds from "../components/TableGamesFromIds";

function FilteredGames({ gameIds }) {
  return <TableGamesFromIds gameIds={gameIds} />;
}

const mapStateToProps = (state, ownProps) => {
  return { gameIds: getFilteredGameIds(state, ownProps) };
};

export default connect(mapStateToProps, null)(FilteredGames);
