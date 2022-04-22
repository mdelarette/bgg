import React from "react";

import { ModalContext } from "../contexts/modal-context.js";

import { Dialog } from "@mui/material";

import GameInModal from "./GameInModal";

const ModalGame = () => {
  return (
    <ModalContext.Consumer>
      {({ modalGameId, setModalGameId }) => (
        <Dialog open={modalGameId !== "0"}>
          <GameInModal id={modalGameId} setModalGameId={setModalGameId} />
        </Dialog>
      )}
    </ModalContext.Consumer>
  );
};

export default ModalGame;
