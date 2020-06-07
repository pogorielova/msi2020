export function addToFavourite(joke) {
    return {
      type: 'ADD TO FAVOURITE',
      payload: joke
    }
  }
  
  export function removeFromFavourite(joke) {
    return {
      type: 'REMOVE FROM FAVOURITE',
      payload: joke
    }
  }
  