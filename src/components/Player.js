// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  updatePlayerToStore,
  deletePlayerFromStore,
  fetchPlayerGames,
} from "../action";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Avatar from "@material-ui/core/Avatar";

import { get_gravatar } from "../utils/Gravatar";

const Player = ({
  player,
  updatePlayerToStore,
  deletePlayerFromStore,
  fetchPlayerGames,
}) => {
  const [editMode, setEditMode] = React.useState(false);
  const [name, setName] = React.useState(player.name);
  const [bggName, setBggName] = React.useState(player.bggName);
  const [age, setAge] = React.useState(player.age);
  const [email, setEmail] = React.useState(player.email);
  // const [thumbnail, setThumbnail] = React.useState(player.thumbnail);

  const gravatar = React.useMemo(
    () => (email ? get_gravatar(email, 85) : null),
    [email]
  );

  const valid = () => {
    updatePlayerToStore(player.id, { name, bggName, age, email });
    setEditMode(false);
  };

  // Check here
  // https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_lists_avatar

  return (
    <>
      {!editMode && (
        <Card raised>
          <CardHeader
            title={
              player.bggName
                ? player.bggName
                : player.name
                ? player.name
                : "no name"
            }
            subheader={player.name ? player.name : ""}
            avatar={<Avatar src={gravatar ? gravatar : player.thumbnail} />}
            action={
              <Button
                size="small"
                onClick={() => deletePlayerFromStore(player.id)}
              >
                Delete
              </Button>
            }
          />
          <CardContent>{player.age && <p>Age : {player.age}</p>}</CardContent>
          <CardActions>
            <Button size="small" onClick={() => setEditMode(true)}>
              Edit
            </Button>
            <Button size="small" onClick={() => fetchPlayerGames(player)}>
              Fetch
            </Button>
          </CardActions>
        </Card>
      )}

      {editMode && (
        <>
          <div className="w3-container w3-orange">
            <p>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>

            <p>
              <label>BGG</label>
              <input
                type="text"
                name="bggName"
                value={bggName}
                onChange={(e) => setBggName(e.target.value)}
              />
            </p>

            <p>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>

            <p>
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </p>
          </div>

          <div className="w3-bar">
            <button className="w3-button w3-blue" onClick={valid}>
              Valid
            </button>
            <button
              className="w3-button w3-light-grey"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
};

const mapDispatchToProps = {
  updatePlayerToStore,
  deletePlayerFromStore,
  fetchPlayerGames,
};

export default connect(null, mapDispatchToProps)(Player);
