import React from "react";
import { connect } from "react-redux";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { updateGamesFilterToStore } from "../action";

import FilteredGames from "./FilteredGames";

import { TextField, MenuItem, Paper } from "@mui/material";

// Status :
// fortrade: "0"​​​​​
// lastmodified: "2019-03-15 08:43:31"​​​​​
// own: "1"​​​​​
// preordered: "0"​​​​​
// prevowned: "0"​​​​​
// want: "0"​​​​​
// wanttobuy: "0"​​​​​
// wanttoplay: "0"​​​​​
// wishlist: "0"

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

const PageGames = ({ players, gamesFilter, updateGamesFilterToStore }) => {
  const classes = useStyles();

  // const [selectedPlayerId, setSelectedPlayerId] = React.useState("0");
  // const [filterStatus, setFilterStatus] = React.useState("-1");

  const [selectedPlayerId, setSelectedPlayerId] = React.useState(
    gamesFilter.selectedPlayerId
  );
  const [filterStatus, setFilterStatus] = React.useState(
    gamesFilter.filterStatus
  );

  const firstUpdate = React.useRef(true);

  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      updateGamesFilterToStore({
        selectedPlayerId: selectedPlayerId,
        filterStatus: filterStatus,
      });
      return;
    }
  }, [selectedPlayerId, filterStatus, updateGamesFilterToStore]);

  return (
    <>
      <Paper elevation={3} className={classes.form}>
        {players.length > 1 && (
          <>
            <TextField
              select
              label="Owner"
              value={selectedPlayerId}
              onChange={(e) => {
                setSelectedPlayerId(e.target.value);
              }}
              helperText=""
              variant="outlined"
              fullWidth
              color="secondary"
              className={classes.formControl}
            >
              <MenuItem key={"0"} value={"0"}>
                {"All"}
              </MenuItem>
              {players.map((player) => (
                <MenuItem key={player.id} value={player.id}>
                  {player.name}
                </MenuItem>
              ))}
            </TextField>
          </>
        )}
        {players.length === 1 && <span>one owner no filter</span>}

        {players.length > 0 && (
          <>
            <TextField
              select
              label="Game status"
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
              }}
              helperText=""
              variant="outlined"
              fullWidth
              color="secondary"
              className={classes.formControl}
            >
              <MenuItem key={"-1"} value={"-1"}>
                {"All"}
              </MenuItem>
              <MenuItem key={"0"} value={"0"}>
                {"Owned"}
              </MenuItem>

              <MenuItem key={"1"} value={"1"}>
                {"Wished"}
              </MenuItem>
            </TextField>
          </>
        )}
      </Paper>

      {players.length > 0 && (
        <>
          <FilteredGames playerId={selectedPlayerId} status={filterStatus} />
          {/* <Games />
          <WishedGames /> */}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    players: state.bgg.players,
    gamesFilter: state.bgg.gamesFilter,
  };
};

const mapDispatchToProps = {
  updateGamesFilterToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageGames);
