import React from "react";
import { RadioGroup } from "react-radio-group";
import { RadioButton } from "react-custom-radio";

const Categories = ({ handleCategoryChoose, category }) => {

  return (
    <RadioGroup name="categories" className="ctgrs" onChange={handleCategoryChoose} selectedValue={category} >
      <RadioButton value="animal" className="ctgr-btn" >Animal</RadioButton>
      <RadioButton value="career" className="ctgr-btn" >Career</RadioButton>
      <RadioButton value="celebrity" className="ctgr-btn" >Celebrity</RadioButton>
      <RadioButton value="dev" className="ctgr-btn" >Dev</RadioButton>
    </RadioGroup>
  );
};

export default Categories;
