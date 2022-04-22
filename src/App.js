import React from "react";

import { useQuery } from "react-query";

import { connect } from "react-redux";

import { useState } from "react";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";

import Fab from "@mui/material/Fab";

import IconButton from "@mui/material/IconButton";

import HomeIcon from "@mui/icons-material/Home";
import OwnersIcon from "@mui/icons-material/People";
import GamesIcon from "@mui/icons-material/Casino";
import PartyIcon from "@mui/icons-material/SupervisedUserCircle";
import AddIcon from "@mui/icons-material/Add";

import Home from "./components/Home";
import Party from "./components/Party";
// import BestGame from "./components/BestGame";
import PartySelection from "./components/PartySelection";

import PageGames from "./components/PageGames";

import ModalGame from "./components/ModalGame";
import Players from "./components/Players";

import { addPlayerToStore } from "./action";

import { ModalContext } from "./contexts/modal-context.js";
import { Page } from "./constants/pages";

// import { name, version } from "../package.json";
import packageInfo from "../package.json";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },

    appBar: {
      top: "auto",
      bottom: 0,
      "& > div": { alignItems: "flex-start" },
    },
    grow: {
      flexGrow: 1,
    },

    canvasesContainer: {
      position: "absolute",
    },

    fab: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      top: "auto",
      left: "auto",
      position: "fixed",
      zIndex: 1500,
    },
  })
);

const App = ({ addPlayerToStore }) => {
  const classes = useStyles();

  const [modalGameId, setModalGameId] = useState("0");
  const [page, setPage] = useState(Page.Home);

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
    <ModalContext.Provider value={{ modalGameId, setModalGameId }}>
      <ModalGame />

      <>
        <AppBar id={"topBar"} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {`${packageInfo.name} - ${packageInfo.version}`}
            </Typography>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth="sm"
          style={{
            // backgroundColor: "#aefefe",
            paddingBottom: "64px",
          }}
          disableGutters
        >
          {page === Page.Home && (
            <div style={{ paddingTop: "8px" }}>
              <Home />
            </div>
          )}

          {page === Page.Owners && (
            <Container>
              <Fab
                color="secondary"
                aria-label="add"
                onClick={addPlayer}
                className={classes.fab}
                disabled={isFetching}
              >
                <AddIcon />
              </Fab>

              <Players />
            </Container>
          )}

          {page === Page.Games && <PageGames />}

          {page === Page.Party && (
            <>
              <Party />
              {/* <BestGame /> */}
              <PartySelection />
            </>
          )}
        </Container>

        <AppBar
          id={"bottomBar"}
          position="fixed"
          color="primary"
          className={classes.appBar}
        >
          <Toolbar>
            <div className={classes.grow} />
            <IconButton
              color={page === Page.Home ? "secondary" : "inherit"}
              onClick={() => setPage(Page.Home)}
              size="large">
              <HomeIcon />
            </IconButton>
            <IconButton
              color={page === Page.Owners ? "secondary" : "inherit"}
              onClick={() => setPage(Page.Owners)}
              size="large">
              <OwnersIcon />
            </IconButton>
            <IconButton
              color={page === Page.Games ? "secondary" : "inherit"}
              onClick={() => setPage(Page.Games)}
              size="large">
              <GamesIcon />
            </IconButton>
            <IconButton
              color={page === Page.Party ? "secondary" : "inherit"}
              onClick={() => setPage(Page.Party)}
              size="large">
              <PartyIcon />
            </IconButton>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </>
    </ModalContext.Provider>
  );
};

const mapDispatchToProps = {
  addPlayerToStore,
};

export default connect(null, mapDispatchToProps)(App);
