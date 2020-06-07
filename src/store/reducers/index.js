import {combineReducers, createStore} from 'redux';
import { favJokeReducer } from './favouriteReducer'

const reducers = combineReducers({favJokes: favJokeReducer});

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());