// import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { getGameRowData } from "../selectors";
// import { getNbPlayers } from "../selectors";

// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// import TableCell from "@material-ui/core/TableCell";
// import TableRow from "@material-ui/core/TableRow";
// import Avatar from "@material-ui/core/Avatar";
// import AvatarGroup from "@material-ui/lab/AvatarGroup";
// import Typography from "@material-ui/core/Typography";

// import { ModalContext } from "../contexts/modal-context.js";

// TableRowGameFromId.propTypes = {
//   id: PropTypes.string.isRequired,
// };

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     avatarCell: {
//       display: "flex",
//       alignItems: "center",
//     },
//     gameName: {
//       paddingLeft: theme.spacing(1),
//     },
//   })
// );

// function TableRowGameFromId({ id, game, odd, nbPlayers }) {
//   const classes = useStyles();

//   if (!game) {
//     return null;
//   }

//   let backgroundColor = "bgg-even";
//   if (odd) {
//     backgroundColor = "bgg-odd";
//   }

//   let min = parseInt(game.min);
//   let max = parseInt(game.max);

//   let minClass = "w3-blue";
//   let maxClass = "w3-blue";

//   if (nbPlayers === min && nbPlayers === max) {
//     minClass = maxClass = "w3-green";
//   }

//   if (nbPlayers < min || nbPlayers > max) {
//     minClass = maxClass = "w3-red";
//   }

//   return (
//     <ModalContext.Consumer>
//       {({ modalGameId, setModalGameId }) => (
//         <React.Fragment>
//           <TableRow key={id}>
//             <TableCell
//               component="th"
//               scope="row"
//               className={classes.avatarCell}
//             >
//               <Avatar
//                 src={game.thumbnail}
//                 variant="rounded"
//                 onClick={() => {
//                   setModalGameId(id);
//                 }}
//               />

//               {game.extensions && game.extensions.length > 0 && (
//                 <AvatarGroup>
//                   {game.extensions.map((extension, index) => {
//                     var elem = (
//                       <Avatar
//                         alt={extension.name}
//                         src={extension.thumbnail}
//                         onClick={() => {
//                           setModalGameId(extension.id);
//                         }}
//                       />
//                     );
//                     return elem;
//                   })}
//                 </AvatarGroup>
//               )}

//               <Typography variant="h6" className={classes.gameName}>
//                 {game.name}
//               </Typography>
//             </TableCell>
//             <TableCell align="right">{game.minAge}</TableCell>
//             <TableCell align="right">{game.min}</TableCell>
//             <TableCell align="right">{game.max}</TableCell>
//           </TableRow>
//         </React.Fragment>
//       )}
//     </ModalContext.Consumer>
//   );
// }

// const mapStateToProps = (state, ownProps) => {
//   return {
//     game: getGameRowData(state, ownProps),
//     nbPlayers: getNbPlayers(state, ownProps),
//   };
// };

// export default connect(mapStateToProps, null)(TableRowGameFromId);
