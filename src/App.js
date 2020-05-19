import React from "react";
import "./scss/App.scss";
import Main from './components/Main';
import Favourite from './components/Favourite'

function App() {

  return (
      <div className="app-container">
        <Main />
        <Favourite />
      </div>
    );
  }

export default App;
