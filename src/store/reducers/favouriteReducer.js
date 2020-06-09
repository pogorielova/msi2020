import { Actions } from "../actions/favoriteActions"

const initialStore ={
    favoriteJokes: []
  }
  
  export const favJokeReducer = (initialState = initialStore, action) => {
    if(action.type === Actions.ADD_TO_FAVORITE) {
      return {
        favoriteJokes: [...initialState.favoriteJokes, action.payload]
      }
    }
  
    if(action.type === Actions.REMOVE_FROM_FAVORITE) {
      return {
        favoriteJokes: initialState.favouriteJokes.filter(item => item !== action.payload) 
      }
    }
  
    return initialState
  }