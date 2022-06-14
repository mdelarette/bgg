import React from "react";

// import { Helmet } from 'react-helmet';

// import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';

import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Owners from "./components/Players";
import PageGames from "./components/PageGames";
import PartyPage from "./components/PartyPage";

import PageTest from "./components/PageTest";

const App = () => {

  return (
    <React.StrictMode>
        <CssBaseline />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>

                    <Route exact path="/bgg" element={<Home />} />

                    <Route exact path="/" element={<Home />} />

                    <Route exact path="/owners" element={<Owners />} />
                    <Route exact path="/owners/:id" element={<Owners />} />

                    <Route exact path="/games" element={<PageGames />} />
                    <Route exact path="/games/:id" element={<PageGames />} />

                    <Route exact path="/party" element={<PartyPage />} />

                    {/* <Route exact path="/404" element={<Page404 />} /> */}

                    <Route exact path="/theme" element={<PageTest />} />

                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>



    // <ModalContext.Provider value={{ modalGameId, setModalGameId }}>
    //   <ModalGame />

    //   <>
    //     <AppBar id={"topBar"} position="static">
    //       <Toolbar>
    //         <Typography variant="h6" className={classes.title}>
    //           {`${packageInfo.name} - ${packageInfo.version}`}
    //         </Typography>
    //       </Toolbar>
    //     </AppBar>

    //     <Container
    //       maxWidth="sm"
    //       style={{
    //         // backgroundColor: "#aefefe",
    //         paddingBottom: "64px",
    //       }}
    //       disableGutters
    //     >
    //       {page === Page.Home && (
    //         <div style={{ paddingTop: "8px" }}>
    //           <Home />
    //         </div>
    //       )}

    //       {page === Page.Owners && (
    //         <Container>
    //           <Fab
    //             color="secondary"
    //             aria-label="add"
    //             onClick={addPlayer}
    //             className={classes.fab}
    //             disabled={isFetching}
    //           >
    //             <AddIcon />
    //           </Fab>

    //           <Players />
    //         </Container>
    //       )}

    //       {page === Page.Games && <PageGames />}

    //       {page === Page.Party && (
    //         <>
    //           <Party />
    //           {/* <BestGame /> */}
    //           <PartySelection />
    //         </>
    //       )}
    //     </Container>

    //     <AppBar
    //       id={"bottomBar"}
    //       position="fixed"
    //       color="primary"
    //       className={classes.appBar}
    //     >
    //       <Toolbar>
    //         <div className={classes.grow} />
    //         <IconButton
    //           color={page === Page.Home ? "secondary" : "inherit"}
    //           onClick={() => setPage(Page.Home)}
    //           size="large">
    //           <HomeIcon />
    //         </IconButton>
    //         <IconButton
    //           color={page === Page.Owners ? "secondary" : "inherit"}
    //           onClick={() => setPage(Page.Owners)}
    //           size="large">
    //           <OwnersIcon />
    //         </IconButton>
    //         <IconButton
    //           color={page === Page.Games ? "secondary" : "inherit"}
    //           onClick={() => setPage(Page.Games)}
    //           size="large">
    //           <GamesIcon />
    //         </IconButton>
    //         <IconButton
    //           color={page === Page.Party ? "secondary" : "inherit"}
    //           onClick={() => setPage(Page.Party)}
    //           size="large">
    //           <PartyIcon />
    //         </IconButton>
    //         <div className={classes.grow} />
    //       </Toolbar>
    //     </AppBar>
    //   </>
    // </ModalContext.Provider>
  );
};

// const mapDispatchToProps = {
//   addPlayerToStore,
// };

// export default connect(null, mapDispatchToProps)(App);
export default App;
