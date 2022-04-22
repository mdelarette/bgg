import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

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

  // const theme = useTheme();

  // console.log(theme);
  // console.log("theme.palette.primary.main", theme.palette.primary.main);
  

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
