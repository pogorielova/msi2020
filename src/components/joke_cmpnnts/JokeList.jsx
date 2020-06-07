import React from "react";
import { connect } from 'react-redux';
import Joke from "./Joke";
import { addToFavourite, removeFromFavourite } from "../../store/actions/favouriteActions"

function JokeList({ jokes, option, category, search }) {
  if (option === "random") {
    return <Joke joke={jokes} addToFavourite={addToFavourite} removeFromFavourite={removeFromFavourite} />;
  } else if (option === "categories") {
    if (category === "") {
      return <div>Please, choose a category.</div>;
    } else {
      return <Joke joke={jokes} />;
    }
  } else if (option === "search") {
    if (search === "") {
      return <div>Please, enter your request</div>;
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
    favouriteJokes: state.favJokes.favouriteJokes
  }
}


const mapDispatchToProps= {
  addToFavourite,
  removeFromFavourite
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeList)
