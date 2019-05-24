import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGameData } from "../selectors";

const GameInModal = ({ id, game, setModalGame }) => {
  if (!game) {
    return (
      <div className="w3-margin w3-card w3-yellow">
        <h3>no game :(</h3>
      </div>
    );
  }

  console.log(JSON.stringify(game, null, 2));

  const NbPlayers = () => {
    if (game.min === game.max && game.min === "1") {
      return `Solo game`;
    }

    if (game.min === game.max && game.min === "2") {
      return `Duel game`;
    }

    if (game.min === game.max) {
      return `Exactly ${game.min} players`;
    }

    return `Number of players from ${game.min} to ${game.max}`;
  };

  const Owners = () => {
    return <div>owners</div>;
  };

  const Owner = () => {};

  return (
    <React.Fragment>
      <header className="w3-container w3-green">
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

      <div className="w3-padding w3-pale-green w3-bottombar w3-border-green w3-border">
        <h4>
          <NbPlayers />
        </h4>
        <h4>Minimum age: {game.minage}</h4>

        <Owners />

        <p style={{ whiteSpace: "pre-line" }}>{game.description}</p>
      </div>

      <footer className="w3-container w3-green">
        <p>
          <a href={"https://boardgamegeek.com/boardgame/" + id}>View on boardgamegeek.com</a>
        </p>
      </footer>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { game: getGameData(state, ownProps) };

  // return {
  //   game: state.bgg.games ? state.bgg.games.find(x => x.id === ownProps.id) : null
  // };
};

// const mapDispatchToProps = dispatch => ({
//   fetchReclamation: id => dispatch(fetchReclamation(id)),
//   initDetailsReclamation: () => dispatch(initDetailsReclamation())
// });

GameInModal.propTypes = {
  id: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  null
)(GameInModal);
