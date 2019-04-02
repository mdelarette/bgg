// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, ButtonGroup } from "@blueprintjs/core";

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
          <div>
            <ButtonGroup>
              <Button intent="primary" text="Valid" onClick={valid} />
              <Button intent="none" text="Cancel" onClick={() => setEditMode(false)} />
            </ButtonGroup>
          </div>
        </div>
      )}

      {!editMode && (
        <div>
          <p>{player.name}</p>
          <p>{player.bggName}</p>
          <div>
            <ButtonGroup>
              <Button intent="primary" text="Edit" onClick={() => setEditMode(true)} />
              <Button intent="danger" text="Remove" onClick={() => deletePlayerFromStore(player.id)} />
              <Button intent="none" text="Fetch" onClick={() => fetchPlayerGames(player)} disabled={!player.bggName} />
            </ButtonGroup>
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
