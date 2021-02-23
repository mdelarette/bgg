import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createStyles, makeStyles } from "@material-ui/core/styles";

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
import TextField from "@material-ui/core/TextField";

import Avatar from "@material-ui/core/Avatar";

import { get_gravatar } from "../utils/Gravatar";

const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1),
    },
    formControl: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
};

const Player = ({
  player,
  updatePlayerToStore,
  deletePlayerFromStore,
  fetchPlayerGames,
}) => {
  const classes = useStyles();

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

  const cancel = () => {
    setName(player.name);
    setBggName(player.bggName);
    setAge(player.age);
    setEmail(player.email);
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
          <CardContent>
            {player.age && <p>Age : {player.age}</p>}{" "}
            {!!player.lastFetch && <p>Last fetch: {player.lastFetch}</p>}
            {!!player.lastFetch && (
              <p>
                Last fetch:{" "}
                {new Date(player.lastFetch).toLocaleDateString(
                  "fr-FR",
                  options
                )}
              </p>
            )}
          </CardContent>
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
          />
          <CardContent>
            <TextField
              type="text"
              label="BGG login"
              value={bggName}
              onChange={(e) => setBggName(e.target.value)}
              helperText=""
              variant="outlined"
              fullWidth
              color="secondary"
              className={classes.formControl}
              required
            />

            <TextField
              type="text"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              helperText=""
              variant="outlined"
              fullWidth
              color="secondary"
              className={classes.formControl}
            />

            <TextField
              type="text"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              helperText=""
              variant="outlined"
              fullWidth
              color="secondary"
              className={classes.formControl}
            />

            <TextField
              type="number"
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              helperText=""
              variant="outlined"
              fullWidth
              color="secondary"
              className={classes.formControl}
            />
          </CardContent>

          <CardActions>
            <Button
              size="small"
              color={"inherit"}
              onClick={cancel}
              style={{ marginLeft: "auto" }}
            >
              Cancel
            </Button>
            <Button
              size="small"
              color={"secondary"}
              variant={"contained"}
              onClick={valid}
            >
              Valid
            </Button>
          </CardActions>
        </Card>
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
