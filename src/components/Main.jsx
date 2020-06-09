import React from "react";
import Form from "./formCmpnnts/Form";
import JokeList from "./jokeCmpnnts/JokeList";
import Favorite from "./Favorite";
import FvrtButton from "../components/FvrtButton";

const api = "https://api.chucknorris.io/jokes";

export const jokeRenderOption = {
  RANDOM: "random",
  CATEGORIES: "categories",
  SEARCH: "search",
};

export default class Main extends React.Component {
  state = {
    jokes: {result: []},
    isLoaded: false,
    renderOption: jokeRenderOption.RANDOM,
    category: "",
    search: "",
    apiPath: `${api}/random`,
    favoriteOn: false,
  };

  componentDidMount() {
    this.fetchJokes();
  }

  //================= PATH BUILDER

  handleRadioCheck = (e) => {
    this.setState({ renderOption: e, search: '', category: '', jokes: []});

    if (e === jokeRenderOption.RANDOM) {
      this.setState({ apiPath: `${api}/random`});
    } else if (e === jokeRenderOption.CATEGORIES) {
      this.setState({
        apiPath: `${api}/random?category=${this.state.category}`,
      });
    }
    // else if (e === 'search') {
    //   const searchPath = this.state.search
    //   this.setState({apiPath: `${api}/search?query=${searchPath}`})
    // }
  };

  //================= FETCHER

  fetchJokes = () => {
    fetch(this.state.apiPath)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          jokes: json,
        });
      });
  };

  handleCategoryChoose = (e) => {
    this.setState({ category: e.target.value });
    this.setState({ apiPath: `${api}/random?category=${e.target.value}` });
  };

  handleSearchInput = (e) => {
    this.setState({ search: e.target.value });
    this.setState({ apiPath: `${api}/search?query=${e.target.value}` });
  };

  //================= MAIN BUTTON

  handleGetAJoke = () => {
    this.fetchJokes();
    this.setState({ search: "" });
  };

  //================= FAVORITE TOGGLE

  favToggle = () => {
    this.setState({
      favoriteOn: !this.state.favoriteOn,
    });
  };

  //================= RENDER

  render() {
    const {
      isLoaded,
      jokes,
      renderOption,
      category,
      search,
      favoriteOn,
    } = this.state;

    return (
      <div className="main-container">
        <div className="main-wrapper">
          <header>
            <div className="logo">MSI2020</div>
          </header>
          <h1>Hey!</h1>
          <h3>Let’s try to find a joke for you:</h3>
          <Form
            option={renderOption}
            handleRadioCheck={this.handleRadioCheck}
            category={category}
            handleCategoryChoose={this.handleCategoryChoose}
            search={search}
            handleSearchInput={this.handleSearchInput}
            handleGetAJoke={this.handleGetAJoke}
          />
          {!isLoaded ? (
            "Loading..."
          ) : (
            <JokeList
              jokes={jokes}
              option={renderOption}
              category={category}
              search={search}
            />
          )}
        </div>
        {this.state.favoriteOn && (
          <>
            <div className="greyback"></div>
            <Favorite />
          </>
        )}
        <FvrtButton on={favoriteOn} favToggle={this.favToggle} />
      </div>
    );
  }
}
