import React from "react";
import { connect } from 'react-redux';
import Joke from "./Joke";
import { addToFavorite, removeFromFavorite } from "../../store/actions/favoriteActions";
import { jokeRenderOption } from "../Main"

function JokeList({ jokes, option, category, search, addToFavorite, removeFromFavorite, favoriteJokes}) {

    const isFavourite = (joke) => favoriteJokes.includes(joke);

  if (option === jokeRenderOption.RANDOM) {
    return <Joke joke={jokes} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} isFavorite={isFavourite(jokes)} />;
  } else if (option === jokeRenderOption.CATEGORIES) {
    if (category === "") {
      return <div>Choose a category.</div>;
    } else {
      return <Joke joke={jokes} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} />;
    }
  } else if (option === jokeRenderOption.SEARCH) {
    if (search === "") {
      return <div>Enter your request</div>;
    } else {
      return (
        <ul>
          {jokes.result && jokes.result.map((joke) => (
            <Joke joke={joke} key={joke.id} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} />
          ))}
        </ul>
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    favoriteJokes: state.favJokes.favoriteJokes
  }
}


const mapDispatchToProps= {
  addToFavorite,
  removeFromFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeList)
