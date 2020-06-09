import React from "react";
import { connect } from 'react-redux';
import Joke from "./Joke";
import { addToFavorite, removeFromFavorite } from "../../store/actions/favoriteActions";
import { jokeRenderOption } from "../Main"

function JokeList ({jokes, option, category, search, addToFavorite, removeFromFavorite, favoriteJokes}) {

  const isFavourite = (joke) => favoriteJokes.includes(joke);

  if ((option === jokeRenderOption.CATEGORIES && category === "") || !jokes.result.length) {
      return <div>Choose a category and submit</div>;
  } else if (option === jokeRenderOption.SEARCH && search === "" && !jokes.result.length) {
      return <div>Enter your request and submit</div>;
  } else if (option === jokeRenderOption.RANDOM && !jokes.result.length) {
    return <div>Submit to recieve a joke</div>;
  }
  return (
      <ul>
          {jokes.result && jokes.result.map((joke) => (
              <Joke joke={joke} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} key={joke.id} isFavorite={isFavourite(joke)} />
          ))}
      </ul>
  );
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
