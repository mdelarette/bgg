// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updatePlayerToStore, deletePlayerFromStore, fetchPlayerGames } from "../action";

import { get_gravatar } from "../utils/Gravatar";

const Player = ({ player, updatePlayerToStore, deletePlayerFromStore, fetchPlayerGames }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [name, setName] = React.useState(player.name);
  const [bggName, setBggName] = React.useState(player.bggName);
  const [age, setAge] = React.useState(player.age);
  const [email, setEmail] = React.useState(player.email);
  // const [thumbnail, setThumbnail] = React.useState(player.thumbnail);

  const gravatar = React.useMemo(() => (email ? get_gravatar(email, 85) : null), [email]);

  const valid = () => {
    updatePlayerToStore(player.id, { name, bggName, age, email });
    setEditMode(false);
  };

  // Check here
  // https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_lists_avatar

  return (
    <div className="w3-margin-bottom">
      {editMode && (
        <React.Fragment>
          <div className="w3-container w3-orange">
            <p>
              <label>Name</label>
              <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
            </p>

            <p>
              <label>BGG</label>
              <input type="text" name="bggName" value={bggName} onChange={e => setBggName(e.target.value)} />
            </p>

            <p>
              <label>Email</label>
              <input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            </p>

            <p>
              <label>Age</label>
              <input type="number" name="age" value={age} onChange={e => setAge(e.target.value)} />
            </p>
          </div>

          <div className="w3-bar">
            <button className="w3-button w3-blue" onClick={valid}>
              Valid
            </button>
            <button className="w3-button w3-light-grey" onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </div>
        </React.Fragment>
      )}

      {!editMode && (
        <div>
          <div className="w3-bar w3-white" onClick={() => setEditMode(true)}>
            <span
              onClick={() => deletePlayerFromStore(player.id)}
              className="w3-bar-item w3-button w3-white w3-xlarge w3-right"
            >
              ×
            </span>

            {gravatar && (
              <img alt="gravatar" src={gravatar} className="w3-bar-item w3-circle" style={{ width: "85px" }} />
            )}
            {!gravatar && player.thumbnail && (
              <img alt="thumbnail" src={player.thumbnail} className="w3-bar-item w3-circle" style={{ width: "85px" }} />
            )}

            <div className="w3-bar-item">
              <p>
                <span className="w3-large">{player.name} </span>
                <span className="w3-badge w3-green">{player.age}</span>
              </p>
              <p>{player.bggName ? player.bggName : "\u00A0"}</p>
            </div>
          </div>

          {player.bggName && (
            <div className="w3-bar">
              <button className="w3-button w3-light-grey" onClick={() => fetchPlayerGames(player)}>
                Fetch
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

const mapDispatchToProps = {
  updatePlayerToStore,
  deletePlayerFromStore,
  fetchPlayerGames
};

export default connect(
  null,
  mapDispatchToProps
)(Player);
