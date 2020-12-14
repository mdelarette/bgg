import React from "react";
import { connect } from "react-redux";
import { getGameData } from "../selectors";

import { get_gravatar } from "../utils/Gravatar";

const GameInModal = ({ id, game, setModalGameId }) => {
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
    return game.owners
      ? game.owners.map((owner, index) => <Owner key={index} owner={owner} />)
      : "";
  };

  const Owner = ({ owner }) => {
    var gravatar = owner.email ? get_gravatar(owner.email, 30) : null;

    if (gravatar) {
      return (
        <img
          alt="gravatar"
          src={gravatar}
          className="w3-bar-item w3-circle"
          style={{ width: "30px" }}
        />
      );
    }

    if (!gravatar && owner.thumbnail) {
      return (
        <img
          alt="thumbnail"
          src={owner.thumbnail}
          className="w3-bar-item w3-circle"
          style={{ width: "30px" }}
        />
      );
    }

    return "";
  };

  return (
    <React.Fragment>
      <header className="w3-container w3-green">
        <span
          onClick={() => {
            setModalGameId("0");
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
          <a href={"https://boardgamegeek.com/boardgame/" + id}>
            View on boardgamegeek.com
          </a>
        </p>

        <p>
          <a href={"https://melodice.org/playlist/" + game.name}>
            Melodice.org
          </a>
        </p>
      </footer>
    </React.Fragment>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { game: getGameData(state, ownProps) };
};

export default connect(mapStateToProps, null)(GameInModal);
