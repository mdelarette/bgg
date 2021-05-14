import React from "react";
import { connect } from "react-redux";

import { createStyles, makeStyles } from "@material-ui/core/styles";

import { updatePartyToStore } from "../action";

import { TextField, MenuItem, Paper } from "@material-ui/core";

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

const Party = ({ party, updatePartyToStore }) => {
  const classes = useStyles();

  const [nbPlayers, setNbPlayers] = React.useState(party.nbPlayers);
  const [minAge, setMinAge] = React.useState(party.minAge);

  const firstUpdate = React.useRef(true);

  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      updatePartyToStore({ nbPlayers: nbPlayers, minAge: minAge });
      return;
    }
  }, [nbPlayers, minAge, updatePartyToStore]);

  return (
    <>
      <Paper elevation={3} className={classes.form}>
        <TextField
          type="number"
          label="Number of players"
          value={nbPlayers}
          onChange={(e) => setNbPlayers(e.target.value)}
          helperText=""
          variant="outlined"
          fullWidth
          color="secondary"
          className={classes.formControl}
          inputProps={{ min: 1 }}
        />

        <TextField
          type="number"
          label="Age of youngest player"
          value={minAge}
          onChange={(e) => setMinAge(e.target.value)}
          helperText=""
          variant="outlined"
          fullWidth
          color="secondary"
          className={classes.formControl}
          inputProps={{ min: 0 }}
        />
      </Paper>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    party: state.bgg.party,
  };
};

const mapDispatchToProps = {
  updatePartyToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Party);
