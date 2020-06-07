import React from 'react';
import fvrtClose from "../icons/fvrt-close.svg";
import fvrtOpen from "../icons/fvrt-open.svg"

const FvrtButton = ({on, favToggle}) => {

    const imgForButton = !on ? <img src={fvrtOpen} alt="heart" className="fvrt-icon" /> : <img src={fvrtClose} alt="heart" className="fvrt-icon" />;

 return (
 <button className="fvrt-button" onClick={favToggle}>{imgForButton}Favourite</button>
 )
}

export default FvrtButton;