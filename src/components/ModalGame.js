import React from "react";

import { ModalContext } from "../contexts/modal-context.js";

import GameInModal from "./GameInModal";

const ModalGame = () => {
  return (
    <ModalContext.Consumer>
      {({ modalGameId, setModalGame }) => (
        <div className="w3-modal" style={{ display: modalGameId === "0" ? "none" : "block" }}>
          <div className="w3-modal-content">
            <GameInModal id={modalGameId} setModalGame={setModalGame} />
          </div>
        </div>
      )}
    </ModalContext.Consumer>
  );
};

export default ModalGame;
