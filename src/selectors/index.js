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

const gameIdsSelector = state =>
  state.bgg.ownership.reduce((acc, o) => {
    if (o.status.own === "1") {
      acc.push(o.gameId);
    }
    return acc;
  }, []);

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

export const getGameRowData = createSelector(
  gameRowDataSelector,
  game => game
);
