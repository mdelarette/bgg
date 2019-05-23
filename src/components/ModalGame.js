import React from "react";

import { ModalContext } from "../contexts/modal-context.js";

import Game from "./Game";

const ModalGame = () => {
  return (
    <ModalContext.Consumer>
      {({ modalGameId, setModalGame }) => (
        <div className="w3-modal" style={{ display: modalGameId === "0" ? "none" : "block" }}>
          <div className="w3-modal-content">
            <header className="w3-container w3-teal">
              <span
                onClick={() => {
                  console.log("setModalGame:", modalGameId);
                  console.log("reset");
                  setModalGame("0");
                }}
                className="w3-button w3-display-topright"
              >
                &times;
              </span>
              <h2>Modal Header</h2>
            </header>
            <Game id={modalGameId} />

            <footer className="w3-container w3-teal">
              <p>Modal Footer</p>
            </footer>
          </div>
        </div>
      )}
    </ModalContext.Consumer>
  );
};

export default ModalGame;
