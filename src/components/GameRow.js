import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGameRowData } from "../selectors";
import { getNbPlayers } from "../selectors";

import { ModalContext } from "../contexts/modal-context.js";

GameRow.propTypes = {
  id: PropTypes.string.isRequired,
};

function GameRow({ id, game, odd, nbPlayers }) {
  if (!game) {
    return null;
  }

  let backgroundColor = "bgg-even";
  if (odd) {
    backgroundColor = "bgg-odd";
  }

  let min = parseInt(game.min);
  let max = parseInt(game.max);

  let minClass = "w3-blue";
  let maxClass = "w3-blue";

  if (nbPlayers === min && nbPlayers === max) {
    minClass = maxClass = "w3-green";
  }

  if (nbPlayers < min || nbPlayers > max) {
    minClass = maxClass = "w3-red";
  }

  return (
    <ModalContext.Consumer>
      {({ modalGameId, setModalGameId }) => (
        <React.Fragment>
          <div
            className={"w3-bar " + backgroundColor}
            style={{
              display: "flex",
              flexDirection: "row",
              minHeight: "100px",
            }}
          >
            <div
              className="w3-padding-small"
              style={{ flex: "0 1 100px" }}
              onClick={() => {
                console.log("GameRow setModalGameId:", id);
                setModalGameId(id);
              }}
            >
              <img
                alt="thumbnail"
                src={game.thumbnail}
                className="w3-circle"
                style={{ width: "100px", height: "75px" }}
              />
            </div>

            <div
              className="                 w3-large w3-margin-top"
              style={{ flex: "1 1 auto" }}
            >
              {game.name}
            </div>

            <div
              className="w3-padding-small w3-large w3-margin-top w3-center"
              style={{ flex: "0 1 55px" }}
            >
              <span>{game.minAge}</span>
            </div>

            <div
              className="w3-padding-small w3-large w3-margin-top w3-center"
              style={{ flex: "0 1 55px" }}
            >
              <span className={minClass}>{game.min}</span>
            </div>

            <div
              className="w3-padding-small w3-large w3-margin-top w3-center"
              style={{ flex: "0 1 55px" }}
            >
              <span className={maxClass}>{game.max}</span>
            </div>
          </div>

          {game.extensions &&
            game.extensions.map((extension, index) => {
              let extensionBackgroundFilter = "bgg-extension-even";
              if (index & 1) {
                extensionBackgroundFilter = "bgg-extension-odd";
              }
              let elem = (
                <div
                  key={index}
                  className={
                    "w3-bar " +
                    backgroundColor +
                    " " +
                    extensionBackgroundFilter
                  }
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minHeight: "75px",
                  }}
                >
                  <div
                    className="w3-padding-small"
                    style={{ flex: "0 1 116px" }}
                    onClick={() => {
                      console.log(
                        "GameRow extension setModalGame:",
                        extension.id
                      );
                      setModalGameId(extension.id);
                    }}
                  >
                    {/* <i class="fas fa-caret-right" /> */}

                    <img
                      alt="thumbnail"
                      src={extension.thumbnail}
                      className="w3-circle"
                      style={{
                        width: "50px",
                        height: "37px",
                        alignSelf: "center",
                      }}
                    />
                  </div>
                  <div
                    className="                 w3-large w3-margin-top"
                    style={{ flex: "1 1 auto" }}
                  >
                    <i className="fas fa-level-up-alt fa-rotate-90" />{" "}
                    {extension.name}
                  </div>

                  <div
                    className="w3-padding-small w3-small w3-margin-top w3-center"
                    style={{ flex: "0 1 55px" }}
                  ></div>

                  <div
                    className="w3-padding-small w3-small w3-margin-top w3-center"
                    style={{ flex: "0 1 55px" }}
                  >
                    {extension.min}
                  </div>

                  <div
                    className="w3-padding-small w3-small w3-margin-top w3-center"
                    style={{ flex: "0 1 55px" }}
                  >
                    {extension.max}
                  </div>
                </div>
              );

              return elem;
            })}
        </React.Fragment>
      )}
    </ModalContext.Consumer>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: getGameRowData(state, ownProps),
    nbPlayers: getNbPlayers(state, ownProps),
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchReclamation: id => dispatch(fetchReclamation(id)),
//   initDetailsReclamation: () => dispatch(initDetailsReclamation())
// });

export default connect(mapStateToProps, null)(GameRow);
