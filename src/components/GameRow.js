import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGameRowData } from "../selectors";

GameRow.propTypes = {
  id: PropTypes.string.isRequired
};

function GameRow({ game, odd }) {
  if (!game) {
    return null;
  }

  let backgroundColor = "w3-white";
  if (odd) {
    backgroundColor = "w3-orange";
  }

  return (
    <React.Fragment>
      <div
        className={"w3-bar " + backgroundColor}
        style={{ display: "flex", flexDirection: "row", minHeight: "100px" }}
      >
        <div className="w3-padding-small" style={{ flex: "0 1 100px" }} onClick={() => {}}>
          <img alt="thumbnail" src={game.thumbnail} className="w3-circle" style={{ width: "100px", height: "75px" }} />
        </div>

        <div className="                 w3-large w3-margin-top" style={{ flex: "1 1 auto" }}>
          {game.name}
        </div>

        <div className="w3-padding-small w3-large w3-margin-top w3-center" style={{ flex: "0 1 55px" }}>
          {game.min}
        </div>

        <div className="w3-padding-small w3-large w3-margin-top w3-center" style={{ flex: "0 1 55px" }}>
          {game.max}
        </div>
      </div>

      {game.extensions &&
        game.extensions.map((extension, index) => {
          let elem = (
            <div
              key={index}
              className={"w3-bar " + backgroundColor}
              style={{ display: "flex", flexDirection: "row", minHeight: "75px" }}
            >
              <div className="w3-padding-small" style={{ flex: "0 1 116px" }} onClick={() => {}}>
                {/* <i class="fas fa-caret-right" /> */}

                <img
                  alt="thumbnail"
                  src={extension.thumbnail}
                  className="w3-circle"
                  style={{ width: "50px", height: "37px", alignSelf: "center" }}
                />
              </div>
              <div className="                 w3-large w3-margin-top" style={{ flex: "1 1 auto" }}>
                <i className="fas fa-level-up-alt fa-rotate-90" /> {extension.name}
              </div>

              <div className="w3-padding-small w3-small w3-margin-top w3-center" style={{ flex: "0 1 55px" }}>
                {extension.min}
              </div>

              <div className="w3-padding-small w3-small w3-margin-top w3-center" style={{ flex: "0 1 55px" }}>
                {extension.max}
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
