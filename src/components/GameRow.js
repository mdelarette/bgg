import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

GameRow.propTypes = {
  id: PropTypes.string.isRequired
};

function GameRow({ game }) {
  if (!game) {
    return null;
  }

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="w3-bar w3-white" style={{ flex: "1 1 80%" }} onClick={() => {}}>
          <img
            alt="thumbnail"
            src={game.thumbnail}
            className="w3-bar-item w3-circle w3-small"
            style={{ width: "100px", height: "75px" }}
          />
          <div className="w3-bar-item">
            <p>
              <span className="w3-large">{game.name} </span>
            </p>
          </div>
        </div>

        <div className="w3-bar w3-white" style={{ flex: "0 1 10%" }}>
          {game.min}
        </div>

        <div className="w3-bar w3-white" style={{ flex: "0 1 10%" }}>
          {game.max}
        </div>
      </div>
    </React.Fragment>
  );
}

// https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/

// const selectSomeData = state => state.someData;

// const selectFilteredSortedTransformedData = createSelector(
//     selectSomeData,
//     (someData) => {
//          const filteredData = expensiveFiltering(someData);
//          const sortedData = expensiveSorting(filteredData);
//          const transformedData = expensiveTransformation(sortedData);

//          return transformedData;
//     }
// )

const mapStateToProps = (state, ownProps) => {
  // const transformedData = selectFilteredSortedTransformedData (state);

  // return {data : transformedData};

  return {
    game: state.bgg.games.find(x => x.id === ownProps.id)
  };
};

// const mapDispatchToProps = dispatch => ({
//   fetchReclamation: id => dispatch(fetchReclamation(id)),
//   initDetailsReclamation: () => dispatch(initDetailsReclamation())
// });

export default connect(
  mapStateToProps,
  null
)(GameRow);
