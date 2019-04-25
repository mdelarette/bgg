import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGameRowData } from "../selectors";

GameRow.propTypes = {
  id: PropTypes.string.isRequired
};

function GameRow({ game }) {
  if (!game) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="w3-bar w3-white" style={{ display: "flex", flexDirection: "row" }}>
        <div className="w3-bar-item w3-white" style={{ flex: "0 1 20%" }} onClick={() => {}}>
          <img
            alt="thumbnail"
            src={game.thumbnail}
            className="w3-circle w3-bar-item"
            style={{ width: "100px", height: "75px" }}
          />
        </div>

        <div className="w3-large w3-bar-item" style={{ flex: "1 1 60%" }}>
          {game.name}
        </div>

        <div className="w3-bar-item w3-large" style={{ flex: "0 1 10%" }}>
          {game.min}
        </div>

        <div className="w3-bar-item w3-large" style={{ flex: "0 1 10%" }}>
          {game.max}
        </div>
      </div>

      {game.extensions &&
        game.extensions.map(extension => {
          let elem = (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="w3-bar w3-white" style={{ flex: "1 1 80%" }} onClick={() => {}}>
                <div className="w3-bar-item" style={{ width: "100px", height: "75px", textAlign: "right" }}>
                  <img
                    alt="thumbnail"
                    src={extension.thumbnail}
                    className="w3-circle"
                    style={{ width: "50px", height: "37px", alignSelf: "center" }}
                  />
                </div>
                <div className="w3-bar-item">
                  <p>
                    <span className="w3-small">{extension.name}</span>
                  </p>
                </div>
              </div>

              <div className="w3-bar w3-white" style={{ flex: "0 1 10%" }}>
                <p>
                  <span className="w3-small">{extension.min}</span>
                </p>
              </div>

              <div className="w3-bar w3-white" style={{ flex: "0 1 10%" }}>
                <p>
                  <span className="w3-small">{extension.max}</span>
                </p>
              </div>
            </div>
          );

          return elem;
        })}
    </React.Fragment>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { game: getGameRowData(state, ownProps) };
};

// const mapDispatchToProps = dispatch => ({
//   fetchReclamation: id => dispatch(fetchReclamation(id)),
//   initDetailsReclamation: () => dispatch(initDetailsReclamation())
// });

export default connect(
  mapStateToProps,
  null
)(GameRow);
