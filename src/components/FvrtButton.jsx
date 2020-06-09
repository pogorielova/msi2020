import React from 'react';
import fvrtClose from "../icons/fvrt-close.svg";
import fvrtOpen from "../icons/fvrt-open.svg"

const FvrtButton = ({on, favToggle}) => {

    const imgForButton = !on ? <img src={fvrtOpen} alt="Favorite jokes icon: open" className="fvrt-icon" /> : <img src={fvrtClose} alt="Favorite jokes icon: close" className="fvrt-icon" />;

 return (
 <button className="fvrt-button" onClick={favToggle}>{imgForButton}Favorite</button>
 )
}

export default FvrtButton;