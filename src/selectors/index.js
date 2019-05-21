import { createSelector } from "reselect";

// const shopItemsSelector = state => state.shop.items;
// const taxPercentSelector = state => state.shop.taxPercent;

// const subtotalSelector = createSelector(
//   shopItemsSelector,
//   items => items.reduce((acc, item) => acc + item.value, 0)
// );

// const taxSelector = createSelector(
//   subtotalSelector,
//   taxPercentSelector,
//   (subtotal, taxPercent) => subtotal * (taxPercent / 100)
// );

// export const totalSelector = createSelector(
//   subtotalSelector,
//   taxSelector,
//   (subtotal, tax) => ({ total: subtotal + tax })
// );

/*

  Games related selectors

*/
const gameIdsSelector = state =>
  state.bgg.ownership
    .reduce((acc, o) => {
      if (o.status.own === "1") {
        // On exclu les extensions
        let game = state.bgg.games.find(x => x.id === o.gameId);
        if (game && !game.extends) {
          acc.push({ id: o.gameId, name: game.name });
        }
      }
      return acc;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(game => game.id)
    .filter(uniqueId);

export const getGameIds = createSelector(
  gameIdsSelector,
  gameIds => gameIds
);

const wishedGameIdsSelector = state =>
  state.bgg.ownership.reduce((acc, o) => {
    if (o.status.own !== "1") {
      acc.push(o.gameId);
    }
    return acc;
  }, []);

export const getWishedGameIds = createSelector(
  wishedGameIdsSelector,
  gameIds => gameIds
);

const ownedGamesSelector = state =>
  state.bgg.ownership.reduce((acc, o) => {
    if (o.status.own === "1") {
      acc.push(o);
    }
    return acc;
  }, []);

export const getOwnedGames = createSelector(
  ownedGamesSelector,
  games => games
);

const gameRowDataSelector = (state, props) => state.bgg.games.find(x => x.id === props.id);

const extensionsSelector = (state, props) => {
  return state.bgg.games
    .filter(x => x.extends && x.extends.find(y => y === props.id) !== undefined)
    .map(z => {
      let extension = { id: z.id, name: z.name, min: z.min, max: z.max, thumbnail: z.thumbnail };
      return extension;
    });
};

export const getGameRowData = createSelector(
  gameRowDataSelector,
  extensionsSelector,
  (game, extensions) => {
    var g = { name: game.name, thumbnail: game.thumbnail, min: game.min, max: game.max, extensions };
    return g;
  }
);

/*

  Players related selectors

*/
const getNbPlayersSelector = (state, props) => {
  return state.bgg.players.length;
};

export const getNbPlayers = createSelector(
  getNbPlayersSelector,
  nbPlayers => nbPlayers
);

/*

  Various internal function

*/
function uniqueId(value, index, self) {
  return self.slice(index + 1).findIndex((currentValue, i, r) => currentValue === value) === -1;
}
