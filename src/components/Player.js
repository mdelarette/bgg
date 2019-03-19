// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Button, ButtonGroup, Card } from "@blueprintjs/core";

import { updatePlayerToStore, deletePlayerFromStore, fetchPlayerGames } from "../action";

const Player = ({ player, updatePlayerToStore, deletePlayerFromStore, fetchPlayerGames }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [name, setName] = React.useState(player.name);
  const [bggName, setBggName] = React.useState(player.bggName);
  // const [age, setAge] = React.useState(player.age);

  const valid = () => {
    console.log("valid");
    updatePlayerToStore(player.id, name, bggName);
    setEditMode(false);
  };

  return (
    <Card style={{ margin: 8, minWidth: 300 }}>
      {editMode && (
        <React.Fragment>
          <div style={{ margin: 8 }}>
            Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div style={{ margin: 8 }}>
            BGG: <input type="text" name="bggName" value={bggName} onChange={e => setBggName(e.target.value)} />
          </div>
          <div style={{ margin: 8, minWidth: 300, backgroundColor: "white" }}>
            <ButtonGroup>
              <Button intent="primary" text="Valid" onClick={valid} />
              <Button intent="none" text="Cancel" onClick={() => setEditMode(false)} />
            </ButtonGroup>
          </div>
        </React.Fragment>
      )}

      {!editMode && (
        <React.Fragment>
          <p>{player.name}</p>
          <p>{player.bggName}</p>
          <div style={{ margin: 8, minWidth: 300, backgroundColor: "white" }}>
            <ButtonGroup>
              <Button intent="primary" text="Edit" onClick={() => setEditMode(true)} />
              <Button intent="danger" text="Remove" onClick={() => deletePlayerFromStore(player.id)} />
              <Button intent="none" text="Fetch" onClick={() => fetchPlayerGames(player)} disabled={!player.bggName} />
            </ButtonGroup>
          </div>
        </React.Fragment>
      )}
    </Card>
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
