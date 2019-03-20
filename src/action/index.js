import { parseString } from "xml2js";
import axios from "axios";

export const ADD_PLAYER = "ADD_PLAYER";
export const addPlayerToStore = player => {
  return {
    type: ADD_PLAYER,
    payload: {
      player
    }
  };
};

export const DELETE_PLAYER = "DELETE_PLAYER";
export const deletePlayerFromStore = playerId => {
  return {
    type: DELETE_PLAYER,
    payload: {
      playerId
    }
  };
};

export const UPDATE_PLAYER = "UPDATE_PLAYER";
export const updatePlayerToStore = (playerId, name, bggName) => {
  console.log("updatePlayerToStore", playerId, name, bggName);
  return {
    type: UPDATE_PLAYER,
    payload: {
      playerId,
      name,
      bggName
    }
  };
};

// https://boardgamegeek.com/wiki/page/BGG_XML_API2

export const FETCH_PLAYER_GAMES = "FETCH_PLAYER_GAMES";

const setPlayerGames = games => ({ type: "FETCH_PLAYER_GAMES", payload: games });

export const fetchPlayerGames = player => async (dispatch, getState) => {
  // Appel à l'api
  console.log("fetchPlayerGames", player.id, player.bggName);

  var games;
  var uniques = [];

  // TODO check how we can get rid of "Access-Control-Allow-Origin" at https://www.html5rocks.com/en/tutorials/cors/

  try {
    const response = await axios.get(`https://www.boardgamegeek.com/xmlapi2/collection?username=${player.bggName}`);
    parseString(response.data, function(err, _games) {
      games = _games.items.item.map(x => {
        return { id: x.$.objectid, name: x.name[0]._ };
      });
    });
    uniques = games.filter(uniqueId);

    var ids = uniques.reduce((acc, game) => acc + `${game.id},`, "");
    ids = ids.slice(0, ids.length - 1);

    const responseGame = await axios.get(`https://www.boardgamegeek.com/xmlapi2/thing?id=${ids}`);
    parseString(responseGame.data, function(err, _games) {
      //   console.log("_games=", _games);
      console.log("_games.items=", _games.items);

      games = _games.items.item.map(x => {
        return { id: x.$.id, name: x.name[0].$.value, min: x.minplayers[0].$.value, max: x.maxplayers[0].$.value };
      });

      //   game = _game.items.item[0];
      return;
      // games = _games.items.item.map(x => {
      //   return { id: x.$.objectid, name: x.name[0]._ };
      // });
    });
  } catch (error) {
    console.error(error);
  }

  dispatch(setPlayerGames(games));
};

function uniqueId(value, index, self) {
  return self.slice(index + 1).findIndex((currentValue, i, r) => currentValue.id === value.id) === -1;
}
