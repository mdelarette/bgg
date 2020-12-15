import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGameRowData } from "../selectors";
import { getNbPlayers } from "../selectors";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import { ModalContext } from "../contexts/modal-context.js";

TableRowGameFromId.propTypes = {
  id: PropTypes.string.isRequired,
};

function TableRowGameFromId({ id, game, odd, nbPlayers }) {
  if (!game) {
    return null;
  }

  let backgroundColor = "bgg-even";
  if (odd) {
    backgroundColor = "bgg-odd";
  }

  let min = parseInt(game.min);
  let max = parseInt(game.max);

  let minClass = "w3-blue";
  let maxClass = "w3-blue";

  if (nbPlayers === min && nbPlayers === max) {
    minClass = maxClass = "w3-green";
  }

  if (nbPlayers < min || nbPlayers > max) {
    minClass = maxClass = "w3-red";
  }

  return (
    <ModalContext.Consumer>
      {({ modalGameId, setModalGameId }) => (
        <React.Fragment>
          <TableRow key={id}>
            <TableCell component="th" scope="row">
              {game.name}
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
