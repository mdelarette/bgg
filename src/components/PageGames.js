import React from "react";
import { connect } from "react-redux";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import WishedGames from "./WishedGames";
import Games from "./Games";
import FilteredGames from "./FilteredGames";

import { TextField, MenuItem } from "@material-ui/core";

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

const PageGames = ({ players }) => {
  const classes = useStyles();

  const [selectedPlayerId, setSelectedPlayerId] = React.useState("0");
  const [filterStatus, setFilterStatus] = React.useState("-1");

  return (
    <>
      {players.length > 1 && (
        <>
          <TextField
            select
            label="Owner"
            value={selectedPlayerId}
            onChange={(e) => {
              setSelectedPlayerId(e.target.value);
            }}
            helperText="Please select your owner"
            variant="outlined"
            fullWidth
            color="secondary"
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
            label="Status"
            value={filterStatus}
            onChange={(e) => {
              setFilterStatus(e.target.value);
            }}
            helperText="Please select games status"
            variant="outlined"
            fullWidth
            color="secondary"
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
  };
};

export default connect(mapStateToProps, null)(PageGames);
