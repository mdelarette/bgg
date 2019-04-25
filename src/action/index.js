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

const setPlayerGames = (ownership, games) => ({ type: "FETCH_PLAYER_GAMES", payload: { ownership, games } });

export const fetchPlayerGames = player => async (dispatch, getState) => {
  // Appel à l'api
  console.log("fetchPlayerGames", player.id, player.bggName);

  var games;
  var ownership = [];

  // TODO check how we can get rid of "Access-Control-Allow-Origin" at https://www.html5rocks.com/en/tutorials/cors/

  // TODO treat : answer 202
  // <?xml version="1.0" encoding="utf-8" standalone="yes"?>
  //  <message>
  //   Your request for this collection has been accepted and will be processed.  Please try again later for access.
  //  </message>

  try {
    const response = await axios.get(`https://www.boardgamegeek.com/xmlapi2/collection?username=${player.bggName}`);
    parseString(response.data, function(err, _games) {
      games = _games.items.item.map((x, index) => {
        console.log(`_games.items.item[${index}]=`, x);

        let game = {
          gameId: x.$.objectid,
          playerId: player.id,
          // name: x.name[0]._,
          status: x.status[0].$
        };

        console.log(`games[${index}]=`, JSON.stringify(game, null, 2));

        return game;
      });
    });
    ownership = games.filter(uniqueId);

    // TODO Remove games already known to limit the fetch !

    var ids = ownership.reduce((acc, game) => acc + `${game.gameId},`, "");
    ids = ids.slice(0, ids.length - 1);

    const responseGame = await axios.get(`https://www.boardgamegeek.com/xmlapi2/thing?id=${ids}`);
    parseString(responseGame.data, function(err, _games) {
      //   console.log("_games=", _games);
      // console.log("_games.items=", _games.items);

      // TODO check x.$.type === 'boardgameexpansion'

      games = _games.items.item.map((x, index) => {
        // if (index === 0) {
        // console.log(`_games.items.item[${index}]=`, x);
        // }

        let game = {
          id: x.$.id,
          type: x.$.type,
          name: x.name[0].$.value,
          minage: x.minage[0].$.value,
          min: x.minplayers[0].$.value,
          max: x.maxplayers[0].$.value,
          minplaytime: x.minplaytime[0].$.value,
          maxplaytime: x.maxplaytime[0].$.value,
          playingtime: x.playingtime[0].$.value,
          image: x.image[0],
          thumbnail: x.thumbnail[0], // FIT IN 200x150
          description: x.description[0]
            .replace(/&apos;/g, "'")
            .replace(/&quot;/g, '"')
            .replace(/&gt;/g, ">")
            .replace(/&lt;/g, "<")
            .replace(/&amp;/g, "&")

            .replace(/&eacute;/g, "é")

            .replace(/&#10;/g, "\n")
        };

        if (game.type === "boardgameexpansion") {
          game.extends = x.link.reduce((accumulator, currentValue) => {
            if (currentValue.$.type === "boardgameexpansion") {
              accumulator.push(currentValue.$.id);
            }
            return accumulator;
          }, []);
        }

        // console.log(`games[${index}]=`, JSON.stringify(game, null, 2));

        return game;
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

  dispatch(setPlayerGames(ownership, games));
};

function uniqueId(value, index, self) {
  return self.slice(index + 1).findIndex((currentValue, i, r) => currentValue.gameId === value.gameId) === -1;
}
