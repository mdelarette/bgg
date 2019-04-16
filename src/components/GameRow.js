import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

GameRow.propTypes = {
  id: PropTypes.string.isRequired
};

function GameRow({ game }) {
  if (!game) {
    return null;
  }

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="w3-bar w3-white" style={{ flex: "1 1 80%" }} onClick={() => {}}>
          <img
            alt="thumbnail"
            src={game.thumbnail}
            className="w3-bar-item w3-circle"
            style={{ width: "120px", height: "120px" }}
          />
          <div className="w3-bar-item">
            <p>
              <span className="w3-large">{game.name} </span>
            </p>
          </div>
        </div>

        <div className="w3-bar w3-white" p style={{ flex: "0 1 10%" }}>
          {game.min}
        </div>

        <div className="w3-bar w3-white" style={{ flex: "0 1 10%" }}>
          {game.max}
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.bgg.games.find(x => x.id === ownProps.id)
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchReclamation: id => dispatch(fetchReclamation(id)),
//   initDetailsReclamation: () => dispatch(initDetailsReclamation())
// });

export default connect(
  mapStateToProps,
  null
)(GameRow);
