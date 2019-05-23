import React from "react";

import { ModalContext } from "../contexts/modal-context.js";

import Game from "./Game";

const ModalGame = () => {
  return (
    <ModalContext.Consumer>
      {({ modalGameId, setModalGame }) => (
        <div className="w3-modal" style={{ display: modalGameId === "0" ? "none" : "block" }}>
          <div className="w3-modal-content">
            <Game id={modalGameId} setModalGame={setModalGame} />
          </div>
        </div>
      )}
    </ModalContext.Consumer>
  );
};

export default ModalGame;
