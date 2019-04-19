import produce from "immer";

import { ADD_PLAYER, DELETE_PLAYER, UPDATE_PLAYER, FETCH_PLAYER_GAMES } from "../action";

const initialState = {
  players: [],
  ownership: [],
  games: []
};

export default (state = initialState, action) => {
  console.log("action.type=", action.type);
  console.log("action.payload=", action.payload);

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
          x.id !== action.payload.playerId ? x : { ...x, ...action.payload.playerData }
        );
      });

    case FETCH_PLAYER_GAMES:
      return produce(state, draft => {
        draft.games = action.payload.games;
        // TODO Limit to game id
        // draft.owners[action.payload.playerId] = action.payload.games;

        draft.ownership = action.payload.ownership;
      });

    default:
      return state;
  }
};
