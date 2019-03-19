import produce from "immer";

import { ADD_PLAYER, DELETE_PLAYER, UPDATE_PLAYER, FETCH_PLAYER_GAMES } from "../action";
// import { REHYDRATE } from "redux-persist/constants";

const initialState = {
  players: [
    // { id: 1, name: "Matthias", bggName: "BraTac", age: 42, color: "green", fetched: false }
    // { id: 2, name: "Bob", bggName: "", age: 42, color: "yellow", fetched: false },
    // { id: 3, name: "Tiago", bggName: "", age: 33, color: "red", fetched: true }
  ],

  games: [
    // { id: -1, playerId: 3, name: "Tarot", min: 3, max: 5 },
    // { id: -2, playerId: 3, name: "Belote", min: 4, max: 4 },
    // { id: -3, playerId: 3, name: "5-10", min: 5, max: 10 },
    // { id: -4, playerId: 3, name: "Dames", min: 2, max: 2 }
  ]
};

export default (state = initialState, action) => {
  console.log("action.type=", action.type);
  console.log("action.type=", action.payload);

  switch (action.type) {
    case ADD_PLAYER:
      return produce(state, draft => {
        draft.players.push(action.payload.player);
      });

    case DELETE_PLAYER:
      return produce(state, draft => {
        draft.players = draft.players.filter(x => x.id !== action.payload.playerId);
      });

    case UPDATE_PLAYER:
      return produce(state, draft => {
        draft.players = draft.players.map(x =>
          x.id !== action.payload.playerId ? x : { ...x, name: action.payload.name, bggName: action.payload.bggName }
        );
      });

    case FETCH_PLAYER_GAMES:
      return produce(state, draft => {
        draft.games = action.payload;
      });

    // case REHYDRATE:
    //   console.log("REHYDRATE");
    //   // retrive stored data for reducer callApi
    //   const savedData = action.payload.callApi || initialState;
    //   return {
    //     ...state,
    //     ...savedData
    //   };

    default:
      return state;
  }
};
