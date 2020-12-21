import produce from "immer";

import {
  ADD_PLAYER,
  DELETE_PLAYER,
  UPDATE_PLAYER,
  FETCH_PLAYER_GAMES,
  UPDATE_PARTY,
  UPDATE_GAMES_FILTER,
} from "../action";

const initialState = {
  players: [
    {
      id: 1,
      bggName: "Bratac",
      email: "bratac@free.fr",
    },
    {
      id: 2,
      bggName: "Wallice35",
      email: "wallice35@free.fr",
    },
  ],
  ownership: [],
  games: [],

  party: {
    nbPlayers: 2,
    minAge: 8,
  },

  gamesFilter: {
    selectedPlayerId: "0",
    filterStatus: "-1",
  },
};

export default (state = initialState, action) => {
  // console.log("action.type=", action.type);
  // console.log("action.payload=", action.payload);

  switch (action.type) {
    case ADD_PLAYER:
      return produce(state, (draft) => {
        draft.players.push(action.payload.player);
      });

    case DELETE_PLAYER:
      return produce(state, (draft) => {
        draft.players = draft.players.filter(
          (x) => x.id !== action.payload.playerId
        );
      });

    case UPDATE_PLAYER:
      return produce(state, (draft) => {
        draft.players = draft.players.map((x) =>
          x.id !== action.payload.playerId
            ? x
            : { ...x, ...action.payload.playerData }
        );
      });

    case UPDATE_PARTY:
      return produce(state, (draft) => {
        draft.party = action.payload.party;
      });

    case UPDATE_GAMES_FILTER:
      return produce(state, (draft) => {
        draft.gamesFilter = action.payload.gamesFilter;
      });

    case FETCH_PLAYER_GAMES:
      return produce(state, (draft) => {
        draft.games = draft.games.concat(action.payload.games);

        draft.ownership = draft.ownership
          .filter((x) => x.playerId !== action.payload.playerId)
          .concat(action.payload.ownership);
      });

    default:
      return state;
  }
};
