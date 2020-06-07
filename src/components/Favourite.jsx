import React from 'react';
import {connect} from "react-redux";
import Joke from "./joke_cmpnnts/Joke";

function Favourite(props) {
    return (
      <div className="favourite-container">
        {/* <div className="favourite-title">Favourite</div> */}
        <ul className="favourite-jokes">
        { 
            props.favouriteJokes.map(item => <Joke joke={item} isFavourite={props.favouriteJokes.includes(item)} />)
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

  export default connect(mapStateToProps)(Favourite)