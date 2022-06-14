import React from "react";
import { connect } from "react-redux";
import { useQuery } from "react-query";

import Player from "./Player";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { addPlayerToStore } from "../action";

const Players = ({addPlayerToStore, players}) => {

  const fetchRandomUser = () => {
    fetch("https://randomuser.me/api/")
    .then((results) => results.json())
    .then((data) => {
        let testNewPlayer = data.results[0];
        console.log("addPlayer testNewPlayer", testNewPlayer);

        let newPlayer = {
        id: testNewPlayer.login.uuid,
        name: testNewPlayer.name.first,
        bggName: "",
        age: testNewPlayer.dob.age,
        color: "blue",
        // fetched: false,
        lastFetch: null,
        email: "",
        thumbnail: testNewPlayer.picture.thumbnail,
        };
        addPlayerToStore(newPlayer);
    });
  };

    const {
      // isLoading,
      // error,
      // data,
      isFetching,
      refetch,
  } = useQuery("addingPlayer", fetchRandomUser, { enabled: false });

  const addPlayer = () => {
      refetch();
  };


  return (
    <>
    
      <div>
        {players.map((player) => (
          <div key={player.id}>
            <Player player={player} />
          </div>
        ))}
      </div>
    
    
      <Fab
              color="secondary"
              aria-label="add"
              onClick={addPlayer}
              disabled={isFetching}
              sx={{ position: 'absolute', bottom: 32, right: 16, zIndex: 1500 }}
          >
              <AddIcon />
      </Fab>
    </>


  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    players: state.bgg.players,
  };
};

const mapDispatchToProps = {
  addPlayerToStore,
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
