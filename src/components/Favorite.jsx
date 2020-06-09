import React from 'react';
import {connect} from "react-redux";
import Joke from "./jokeCmpnnts/Joke";

function Favorite(props) {

  const isFavourite = (joke) => props.favoriteJokes.includes(joke);

    return (
      <div className="favorite-drower">
        <ul className="favorite-jokes">
        { 
            props.favoriteJokes.map(item => <Joke joke={item} isFavourite={isFavourite(item)} key={item.id} />)
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