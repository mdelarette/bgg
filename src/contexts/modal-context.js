import React from "react";

export const ModalContext = React.createContext({
  modalGameId: "0",
  setModalGame: () => {}
});

// https://reactjs.org/docs/context.html#when-to-use-context
