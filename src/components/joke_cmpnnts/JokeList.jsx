import React from "react";
import { connect } from 'react-redux';
import Joke from "./Joke";
import { addToFavorite, removeFromFavorite } from "../../store/actions/favouriteActions"

function JokeList({ jokes, option, category, search }) {
  if (option === "random") {
    return <Joke joke={jokes} addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} />;
  } else if (option === "categories") {
    if (category === "") {
      return <div>Choose a category.</div>;
    } else {
      return <Joke joke={jokes} />;
    }
  } else if (option === "search") {
    if (search === "") {
      return <div>Enter your request</div>;
    } else {
      return (
        <ul>
          {jokes.result && jokes.result.map((joke) => (
            <Joke joke={joke} />
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
