import React from "react";
import { connect } from "react-redux";
import { getGameData } from "../selectors";

import { get_gravatar } from "../utils/Gravatar";

import { Avatar, IconButton, Typography } from "@material-ui/core";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import CloseIcon from "@material-ui/icons/Close";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const useStyles = makeStyles((theme) =>
  createStyles({
    closeButton: {
      color: theme.palette.secondary.main,
    },
    dialogTitleRoot: {
      backgroundColor: theme.palette.primary.main,
    },

    dialogContent: {
      backgroundColor: theme.palette.primary.light,
    },

    dialogActions: {
      backgroundColor: theme.palette.primary.main,
    },

    dialogTitle: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color: "white",
    },

    dialogTitleName: {
      flexGrow: 1,
      paddingLeft: theme.spacing(1),
    },
  })
);

const GameInModal = ({ id, game, setModalGameId }) => {
  const classes = useStyles();

  if (!game) {
    return null;
    // return (
    //   <div className="w3-margin w3-card w3-yellow">
    //     <h3>no game :(</h3>
    //   </div>
    // );
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
    <>
      <DialogTitle className={classes.dialogTitleRoot}>
        <div className={classes.dialogTitle}>
          <Avatar src={game.thumbnail} variant="rounded" />
          <Typography variant="h6" className={classes.dialogTitleName}>
            {game.name}
          </Typography>
          <IconButton
            className={classes.closeButton}
            onClick={() => {
              setModalGameId("0");
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">
          <NbPlayers />
        </Typography>
        <Typography variant="h6">Minimum age: {game.minage}</Typography>

        <Owners />

        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
          {game.description}
        </Typography>
      </DialogContent>

      <DialogActions className={classes.dialogActions}>
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
      </DialogActions>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { game: getGameData(state, ownProps) };
};

export default connect(mapStateToProps, null)(GameInModal);
