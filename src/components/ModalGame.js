import React from "react";

import { ModalContext } from "../contexts/modal-context.js";

import Game from "./Game";

const ModalGame = () => {
  return (
    <ModalContext.Consumer>
      {({ modalGameId, setModalGame }) => (
        <div className="w3-modal" style={{ display: modalGameId === "0" ? "none" : "block" }}>
          <div className="w3-modal-content">
            <div className="w3-container">
              <span onClick={() => setModalGame("0")} className="w3-button w3-display-topright">
                &times;
              </span>
              <Game id={modalGameId} />
            </div>
          </div>
        </div>
      )}
    </ModalContext.Consumer>
  );
};

export default ModalGame;
