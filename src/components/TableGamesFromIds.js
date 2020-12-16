import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import TableRowGameFromId from "../components/TableRowGameFromId";

const useStyles = makeStyles((theme) =>
  createStyles({
    tableHead: {
      backgroundColor: theme.palette.primary.main,
    },
    tableHeadRowCell: {
      color: "white",
    },
  })
);

function TableGamesFromIds({ gameIds }) {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.tableHeadRowCell}>
              <Typography variant="h6">Name ({gameIds.length})</Typography>
            </TableCell>
            <TableCell className={classes.tableHeadRowCell} align="right">
              Age
            </TableCell>
            <TableCell className={classes.tableHeadRowCell} align="right">
              min
            </TableCell>
            <TableCell className={classes.tableHeadRowCell} align="right">
              max
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gameIds.map((gameId, index) => (
            <TableRowGameFromId key={gameId} id={gameId} odd={index & 1} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableGamesFromIds;
