import React from 'react';
import {connect} from "react-redux";
import Joke from "./joke_cmpnnts/Joke";

function Favorite(props) {
    return (
      <div className="favorite-drower">
        <ul className="favorite-jokes">
        { 
            props.favouriteJokes.map(item => <Joke joke={item} isFavorite={props.favouriteJokes.includes(item)} />)
        }
          
        </ul>
      </div>
    );
  };

  const mapStateToProps = (state) => {
    return {
      favouriteJokes: state.favJokes.favouriteJokes
    }
}

  export default connect(mapStateToProps)(Favorite)