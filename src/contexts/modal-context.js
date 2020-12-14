import React from "react";

export const ModalContext = React.createContext({
  modalGameId: "0",
  setModalGameId: () => {},
});

// https://reactjs.org/docs/context.html#when-to-use-context
