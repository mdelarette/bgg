import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Game = ({ game, setModalGame }) => {
  if (!game) {
    return (
      <div className="w3-margin w3-card w3-yellow">
        <h3>no game :(</h3>
      </div>
    );
  }

  return (
    <React.Fragment>
      <header className="w3-container w3-teal">
        <span
          onClick={() => {
            setModalGame("0");
          }}
          className="w3-button w3-display-topright"
        >
          &times;
        </span>
        <h2>{game.name}</h2>
      </header>

      <div className="w3-panel w3-pale-green w3-bottombar w3-border-green w3-border">
        <h2>{`min: ${game.min} | max: ${game.max}`}</h2>
        <p style={{ whiteSpace: "pre-line" }}>{game.description}</p>
      </div>

      <footer className="w3-container w3-teal">
        <a href={"https://boardgamegeek.com/boardgame/" + game.id}>View on boardgamegeek.com</a>{" "}
      </footer>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  // TODO use selector

  return {
    game: state.bgg.games ? state.bgg.games.find(x => x.id === ownProps.id) : null
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchReclamation: id => dispatch(fetchReclamation(id)),
//   initDetailsReclamation: () => dispatch(initDetailsReclamation())
// });

Game.propTypes = {
  id: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  null
)(Game);
