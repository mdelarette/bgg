import React from "react";

import { Paper, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Paper>
      <Container>
        <Typography variant="h6">Introduction</Typography>
        <Typography variant="body1">
          Starting during a course, learning react
        </Typography>

        <Typography variant="h6">Players page</Typography>
        <Typography variant="body1">Explanation tbd</Typography>

        <Typography variant="h6">Game page</Typography>
        <Typography variant="body1">Explanation tbd</Typography>

        <Typography variant="h6">Party page</Typography>
        <Typography variant="body1">Explanation tbd</Typography>
      </Container>
    </Paper>
  );
};

export default Home;
