// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updatePlayerToStore, deletePlayerFromStore, fetchPlayerGames } from "../action";

const Player = ({ player, updatePlayerToStore, deletePlayerFromStore, fetchPlayerGames }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [name, setName] = React.useState(player.name);
  const [bggName, setBggName] = React.useState(player.bggName);
  // const [age, setAge] = React.useState(player.age);

  const valid = () => {
    updatePlayerToStore(player.id, name, bggName);
    setEditMode(false);
  };

  return (
    <div className="w3-margin-bottom">
      {editMode && (
        <div>
          <div>
            Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            BGG: <input type="text" name="bggName" value={bggName} onChange={e => setBggName(e.target.value)} />
          </div>
          <div class="w3-bar">
            <button class="w3-button w3-blue" onClick={valid}>
              Valid
            </button>
            <button class="w3-button w3-light-grey" onClick={() => setEditMode(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {!editMode && (
        <div>
          <p>{player.name}</p>
          <p>{player.bggName}</p>

          <div class="w3-bar">
            <button class="w3-button w3-blue" onClick={() => setEditMode(true)}>
              Edit
            </button>
            <button class="w3-button w3-red" onClick={() => deletePlayerFromStore(player.id)}>
              Remove
            </button>
            <button class="w3-button w3-light-grey" onClick={() => fetchPlayerGames(player)} disabled={!player.bggName}>
              Fetch
            </button>
          </div>
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
