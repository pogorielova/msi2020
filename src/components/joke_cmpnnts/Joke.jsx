import React from "react";

const Joke = ({joke}) => {

  return (
  <li className="joke-container">
      {joke.value}
  </li>
  );
};

export default Joke;
