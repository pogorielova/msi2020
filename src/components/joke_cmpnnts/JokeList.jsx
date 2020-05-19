import React from 'react';
import Joke from './Joke';

const JokeList = ({jokes}) => {
    return (
        <ul>
            <Joke joke={jokes} />
        </ul>

        // <ul>
        //     { jokes.map(joke => <Joke joke={joke} key={joke.id} />) }
        // </ul>
    )
}

export default JokeList