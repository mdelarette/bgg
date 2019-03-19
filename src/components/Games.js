import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Card, HTMLTable } from "@blueprintjs/core";

Games.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

function Games({ games }) {
  return (
    <Card style={{ margin: 16 }}>
      <HTMLTable>
        <thead>
          <tr>
            <th>name</th>
            <th>min</th>
            <th>max</th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => (
            <tr key={game.id}>
              <td>{game.name}</td>
              <td>{game.min}</td>
              <td>{game.max}</td>
            </tr>
          ))}
        </tbody>
      </HTMLTable>
    </Card>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    games: state.bgg.games
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchReclamation: id => dispatch(fetchReclamation(id)),
//   initDetailsReclamation: () => dispatch(initDetailsReclamation())
// });

export default connect(
  mapStateToProps,
  null
)(Games);
