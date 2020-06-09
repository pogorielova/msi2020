export const Actions = {
  ADD_TO_FAVORITE: 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE: 'REMOVE_FROM_FAVORITE',
};

export function addToFavorite(joke) {
    return {
      type: Actions.ADD_TO_FAVORITE,
      payload: joke
    }
  }
  
  export function removeFromFavorite(joke) {
    return {
      type: Actions.REMOVE_FROM_FAVORITE,
      payload: joke
    }
  }
  