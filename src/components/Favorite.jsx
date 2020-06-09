import React from 'react';
import {connect} from "react-redux";
import Joke from "./jokeCmpnnts/Joke";

function Favorite(props) {
    return (
      <div className="favorite-drower">
        <ul className="favorite-jokes">
        { 
            props.favoriteJokes.map(item => <Joke joke={item} isFavorite={props.favouriteJokes.includes(item)} />)
        }
          
        </ul>
      </div>
    );
  };

  const mapStateToProps = (state) => {
    return {
      favoriteJokes: state.favJokes.favoriteJokes
    }
}

  export default connect(mapStateToProps)(Favorite)