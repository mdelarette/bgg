import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGameRowData } from "../selectors";
import { getNbPlayers } from "../selectors";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from "@mui/material/Typography";

import { ModalContext } from "../contexts/modal-context.js";

TableRowGameFromId.propTypes = {
  id: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) =>
  createStyles({
    avatarCell: {
      display: "flex",
      alignItems: "center",
    },
    gameName: {
      paddingLeft: theme.spacing(1),
    },
  })
);

function TableRowGameFromId({ id, game, odd, nbPlayers }) {
  const classes = useStyles();

  if (!game) {
    return null;
  }

  return (
    <ModalContext.Consumer>
      {({ modalGameId, setModalGameId }) => (
        <React.Fragment>
          <TableRow key={id}>
            <TableCell
              component="th"
              scope="row"
              className={classes.avatarCell}
            >
              <Avatar
                src={game.thumbnail}
                variant="rounded"
                onClick={() => {
                  setModalGameId(id);
                }}
              />

              {game.extensions && game.extensions.length > 0 && (
                <AvatarGroup>
                  {game.extensions.map((extension, index) => {
                    var elem = (
                      <Avatar
                        alt={extension.name}
                        src={extension.thumbnail}
                        onClick={() => {
                          setModalGameId(extension.id);
                        }}
                        key={extension.id}
                      />
                    );
                    return elem;
                  })}
                </AvatarGroup>
              )}

              <Typography variant="h6" className={classes.gameName}>
                {game.name}
              </Typography>
            </TableCell>
            <TableCell align="right">{game.minAge}</TableCell>
            <TableCell align="right">{game.min}</TableCell>
            <TableCell align="right">{game.max}</TableCell>
          </TableRow>
        </React.Fragment>
      )}
    </ModalContext.Consumer>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: getGameRowData(state, ownProps),
    nbPlayers: getNbPlayers(state, ownProps),
  };
};

export default connect(mapStateToProps, null)(TableRowGameFromId);
