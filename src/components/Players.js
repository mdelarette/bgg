import React from "react";
import { connect } from "react-redux";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Player from "./Player";

const useStyles = makeStyles((theme) =>
  createStyles({
    player: {
      marginBottom: theme.spacing(2),
    },
    players: {
      "&:last-child": {
        // Pas terrible ! mais ça marche
        marginTop: theme.spacing(2),
      },
    },
  })
);

const Players = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.players}>
      {props.players.map((player) => (
        <div key={player.id} className={classes.player}>
          <Player player={player} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    players: state.bgg.players,
  };
};

export default connect(mapStateToProps, null)(Players);
