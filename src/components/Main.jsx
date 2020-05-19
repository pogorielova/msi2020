import React from "react";
import Form from "./form_cmpnnts/Form";
import JokeList from "./joke_cmpnnts/JokeList";

const api = "https://api.chucknorris.io/jokes";
const randomPath = "/random";
const categoryPath = "/random?category=animal";
const searchPath = "/search?query=dad";

export default class Main extends React.Component {
  state = {
    jokes: [],
    isLoaded: false,
    renderOption: "random",
    category: "",
    apiPath: `${api}${randomPath}`,
  };

  componentDidMount() {
    this.fetchJokes();
  }

  handleCategoryChoose = (e) => {
    
    console.log(e)
    // this.setState({ category: e })
  }

  //================= PATH BUILDER

  handleRadioCheck = (e) => {
    
    this.setState({ renderOption: e });
    
    if(e === 'random') {
      this.setState({apiPath: `${api}${randomPath}`})
    } 
    else if (e === 'categories') {
      this.setState({apiPath: `${api}${categoryPath}`})
    } 
    else if (e === 'search') {
      this.setState({apiPath: `${api}${searchPath}`})
    }
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


  //================= MAIN BUTTON

  handleGetAJoke = () => {
    this.fetchJokes()
  }


  //=================  RENDER

  render() {
    const { isLoaded, jokes, renderOption, category } = this.state;

    return (
      <div className="main-container">
        <div className="main-wrapper">
          <header>
            <div className="logo">MSI2020</div>
          </header>
          <h1>Hey!</h1>
          <h3>Let’s try to find a joke for you:</h3>
          <Form option={renderOption} handleRadioCheck={this.handleRadioCheck} category={category} handleCategoryChoose={this.handleCategoryChoose} handleGetAJoke={this.handleGetAJoke} />
          {!isLoaded ? "Loading..." : <JokeList jokes={jokes} />}
        </div>
      </div>
    );
  }
}

