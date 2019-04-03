import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

Games.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired
};

function Games({ games }) {
  return (
    <div className="w3-white w3-margin-top w3-margin-bottom">
      <table className="w3-table w3-striped w3-bordered w3-hoverable">
        <thead>
          <tr className="w3-teal">
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
      </table>
    </div>
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
