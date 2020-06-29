import React from "react";
import { RadioGroup, Radio } from "react-radio-group";
import Categories from "./Categories";
import SearchInput from "./SearchInput";

const Form = (props) => {

  return (
    <>
      <RadioGroup
        name="renderOptions"
        selectedValue={props.option}
        onChange={props.handleRadioCheck}
      >
        <div className="blt-radio">
          <Radio value="random" className="custom-radio" /> Random
        </div>

        <div className="blt-radio">
          <Radio value="categories" className="custom-radio" /> From categories
        </div>

        {props.option === "categories" && <Categories handleCategoryChoose={props.handleCategoryChoose} category={props.category} />}

        <div className="blt-radio">
          <Radio value="search" className="custom-radio" /> Search
        </div>

        {props.option === "search" && <SearchInput handleSearchInput={props.handleSearchInput} value={props.search} />}
      </RadioGroup>
      <div className="submit-field"><button onClick={props.handleGetAJoke} className="get-btn" >
        Get a joke
      </button> <span className="enter-sign">Enter &#9166;</span>
      </div>
    </>
  );
};

export default Form;
