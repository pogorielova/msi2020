import React from "react";
import { connect } from 'react-redux';
import Joke from "./Joke";
import { addToFavorite, removeFromFavorite } from "../../store/actions/favoriteActions";
import { jokeRenderOption } from "../Main"

function JokeList ({jokes, option, category, search, addToFavorite, removeFromFavorite, favoriteJokes}) {

  const isFavourite = (joke) => favoriteJokes.includes(joke);

  if ((option === jokeRenderOption.CATEGORIES && category === "") || (option === jokeRenderOption.CATEGORIES && !jokes.result.length)) {
      return <div>Choose a category and click "Get a joke" or press Enter</div>;
  } else if (option === jokeRenderOption.SEARCH && search === "" && !jokes.result.length) {
      return <div>Type your request word and click "Get a joke" or press Enter</div>;
  } else if (option === jokeRenderOption.RANDOM && !jokes.result.length) {
    return <div>Click "Get a joke" or press Enter to recieve a joke</div>;
  }
  return (
      <ul>
          {jokes.result && jokes.result.map((joke) => (
              <Joke joke={joke} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} key={joke.id} isFavourite={isFavourite(joke)} />
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
