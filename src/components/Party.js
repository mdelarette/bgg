import React from "react";
import { connect } from "react-redux";

import { updatePartyToStore } from "../action";

// Style input range : https://www.cssportal.com/style-input-range/

const Party = ({ party, updatePartyToStore }) => {
  const [nbPlayers, setNbPlayers] = React.useState(party.nbPlayers);
  const [minAge, setMinAge] = React.useState(party.minAge);

  const firstUpdate = React.useRef(true);

  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    } else {
      updatePartyToStore({ nbPlayers: nbPlayers, minAge: minAge });
      return;
    }
  }, [nbPlayers, minAge, updatePartyToStore]);

  return (
    <div className="w3-margin-bottom">
      <React.Fragment>
        <div className="w3-container w3-orange">
          <p>
            <label>Number of players</label>
            <input
              className="w3-input"
              type="number"
              min="1"
              name="nbPlayers"
              value={nbPlayers}
              onChange={e => setNbPlayers(e.target.value)}
            />
          </p>

          <p>
            <label>Age</label>
            <input
              className="w3-input"
              type="number"
              name="age"
              value={minAge}
              onChange={e => setMinAge(e.target.value)}
            />
          </p>
        </div>
      </React.Fragment>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    party: state.bgg.party
  };
};

const mapDispatchToProps = {
  updatePartyToStore
};

export default connect(mapStateToProps, mapDispatchToProps)(Party);
