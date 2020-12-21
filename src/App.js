import React from "react";
import { connect } from "react-redux";

import { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";

import Fab from "@material-ui/core/Fab";

import IconButton from "@material-ui/core/IconButton";

import HomeIcon from "@material-ui/icons/Home";
import OwnersIcon from "@material-ui/icons/People";
import GamesIcon from "@material-ui/icons/Casino";
import PartyIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from "@material-ui/icons/Add";

import Home from "./components/Home";
import Party from "./components/Party";
// import BestGame from "./components/BestGame";
import PartySelection from "./components/PartySelection";

import Footer from "./components/Footer";
import PageGames from "./components/PageGames";

import ModalGame from "./components/ModalGame";
import Players from "./components/Players";

import { addPlayerToStore } from "./action";

import { ModalContext } from "./contexts/modal-context.js";
import { Page } from "./constants/pages";

import { name, version } from "../package.json";

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

  const addPlayer = () => {
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
          fetched: false,
          email: "",
          thumbnail: testNewPlayer.picture.thumbnail,
        };
        addPlayerToStore(newPlayer);
      });
  };

  return (
    <ModalContext.Provider value={{ modalGameId, setModalGameId }}>
      <ModalGame />

      <>
        <AppBar id={"topBar"} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {`${name} - ${version}`}
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
            >
              <HomeIcon />
            </IconButton>
            <IconButton
              color={page === Page.Owners ? "secondary" : "inherit"}
              onClick={() => setPage(Page.Owners)}
            >
              <OwnersIcon />
            </IconButton>
            <IconButton
              color={page === Page.Games ? "secondary" : "inherit"}
              onClick={() => setPage(Page.Games)}
            >
              <GamesIcon />
            </IconButton>
            <IconButton
              color={page === Page.Party ? "secondary" : "inherit"}
              onClick={() => setPage(Page.Party)}
            >
              <PartyIcon />
            </IconButton>
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>
      </>
    </ModalContext.Provider>
  );
};

// class AppBak extends React.Component {
//   constructor(props) {
//     super(props);

//     this.setModalGame = (id) => {
//       console.log("App.setModalGame:", id);
//       this.setState({
//         ...this.state,
//         modalGameId: id,
//       });
//     };

//     this.state = {
//       modalGameId: "0",
//       setModalGame: this.setModalGame,
//       page: Page.Home,
//     };
//   }

//   addPlayer = () => {
//     fetch("https://randomuser.me/api/")
//       .then((results) => results.json())
//       .then((data) => {
//         let testNewPlayer = data.results[0];
//         // console.log("addPlayer testNewPlayer", JSON.stringify(testNewPlayer, null, 2));

//         let newPlayer = {
//           id: testNewPlayer.login.uuid,
//           name: testNewPlayer.name.first,
//           bggName: "",
//           age: testNewPlayer.dob.age,
//           color: "blue",
//           fetched: false,
//           email: "",
//           thumbnail: testNewPlayer.picture.thumbnail,
//         };
//         this.props.addPlayerToStore(newPlayer);
//       });
//   };

//   handlePageChange = (event, page) => {
//     if (this.state.page !== page) {
//       this.setState({
//         page: page,
//       });
//     }
//   };

//   render() {
//     const { page } = this.state;

//     return (
//       <ModalContext.Provider value={this.state}>
//         <ModalGame />

//         <>
//           <AppBar id={"topBar"} position="static">
//             <Toolbar>
//               <Typography variant="h6" className={classes.title}>
//                 {`${name} - ${version}`}
//               </Typography>
//             </Toolbar>
//           </AppBar>
//         </>

//         <div className="bgg-app">
//           <header className="w3-container w3-theme-d5 bgg-header">
//             {name} - {version}
//           </header>

//           <div className="w3-row bgg-body">
//             {page === Page.Home && (
//               <div className="w3-col l8 w3-container ">Home</div>
//             )}

//             {page === Page.Owners && (
//               <div className="w3-col l8 w3-container ">
//                 <button
//                   className="w3-button w3-block w3-ripple w3-teal w3-round-xxlarge w3-xlarge w3-margin-top w3-margin-bottom"
//                   onClick={this.addPlayer}
//                 >
//                   <span>Add owner</span>
//                 </button>

//                 <Players />
//               </div>
//             )}

//             {page === Page.Games && (
//               <>
//                 <div className="w3-col l8">
//                   <span>TODO if more than one owner add a filter</span>
//                 </div>
//                 <div className="w3-col l8">
//                   <span>tab for owned and wished games</span>
//                 </div>

//                 <div className="w3-col l8">
//                   <Games />
//                 </div>

//                 <div className="w3-col l8">
//                   <WishedGames />
//                 </div>
//               </>
//             )}

//             {page === Page.Party && (
//               <div className="w3-col l8">
//                 <Party />
//                 {/* <BestGame /> */}
//                 <PartySelection />
//               </div>
//             )}
//           </div>

//           <Footer page={this.state.page} onClick={this.handlePageChange} />
//         </div>
//       </ModalContext.Provider>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   return {
//     dataVersion: state.dataVersion
//   };
// };

const mapDispatchToProps = {
  addPlayerToStore,
};

export default connect(null, mapDispatchToProps)(App);
