export function addToFavorite(joke) {
    return {
      type: 'ADD TO FAVOURITE',
      payload: joke
    }
  }
  
  export function removeFromFavorite(joke) {
    return {
      type: 'REMOVE FROM FAVOURITE',
      payload: joke
    }
  }
  