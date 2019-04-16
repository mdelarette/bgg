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
export const updatePlayerToStore = (playerId, playerData) => {
  console.log("updatePlayerToStore", playerId, JSON.stringify(playerData, null, 2));
  return {
    type: UPDATE_PLAYER,
    payload: {
      playerId,
      playerData
    }
  };
};

// https://boardgamegeek.com/wiki/page/BGG_XML_API2

export const FETCH_PLAYER_GAMES = "FETCH_PLAYER_GAMES";

const setPlayerGames = (playerId, games) => ({ type: "FETCH_PLAYER_GAMES", payload: { playerId, games } });

export const fetchPlayerGames = player => async (dispatch, getState) => {
  // Appel à l'api
  console.log("fetchPlayerGames", player.id, player.bggName);

  var games;
  var uniques = [];

  // TODO check how we can get rid of "Access-Control-Allow-Origin" at https://www.html5rocks.com/en/tutorials/cors/

  try {
    const response = await axios.get(`https://www.boardgamegeek.com/xmlapi2/collection?username=${player.bggName}`);
    parseString(response.data, function(err, _games) {
      games = _games.items.item.map((x, index) => {
        console.log(`_games.items.item[${index}]=`, x);

        return { id: x.$.objectid, name: x.name[0]._ };
      });
    });
    uniques = games.filter(uniqueId);

    // TODO Remove games already known to limit the fetch !

    var ids = uniques.reduce((acc, game) => acc + `${game.id},`, "");
    ids = ids.slice(0, ids.length - 1);

    const responseGame = await axios.get(`https://www.boardgamegeek.com/xmlapi2/thing?id=${ids}`);
    parseString(responseGame.data, function(err, _games) {
      //   console.log("_games=", _games);
      // console.log("_games.items=", _games.items);

      // TODO check x.$.type === 'boardgameexpansion'

      games = _games.items.item.map((x, index) => {
        // if (index === 0) {
        console.log(`_games.items.item[${index}]=`, x);
        // }
        return {
          id: x.$.id,
          name: x.name[0].$.value,
          minage: x.minage[0].$.value,
          min: x.minplayers[0].$.value,
          max: x.maxplayers[0].$.value,
          minplaytime: x.minplaytime[0].$.value,
          maxplaytime: x.maxplaytime[0].$.value,
          playingtime: x.playingtime[0].$.value,
          thumbnail: x.thumbnail[0],
          description: x.description[0].replace(/&#10;/g, "\n")
        };
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

  dispatch(setPlayerGames(player.id, games));
};

function uniqueId(value, index, self) {
  return self.slice(index + 1).findIndex((currentValue, i, r) => currentValue.id === value.id) === -1;
}
