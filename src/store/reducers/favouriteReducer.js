const initialStore ={
    favouriteJokes: []
  }
  
  export const favJokeReducer = (initialState = initialStore, action) => {
    if(action.type === 'ADD TO FAVOURITE') {
      return {
        favouriteJokes: [...initialState.favouriteJokes, action.payload]
      }
    }
  
    if(action.type === 'REMOVE FROM FAVOURITE') {
      return {
        favouriteJokes: initialState.favouriteJokes.filter(item => item !== action.payload) 
      }
    }
  
    return initialState
  }