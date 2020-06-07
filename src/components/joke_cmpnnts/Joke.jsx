import React from "react";
import { connect } from 'react-redux';
import { addToFavourite, removeFromFavourite} from '../../store/actions/favouriteActions'
import messageIcon from "../../icons/message-icon.svg";
import linkIcon from "../../icons/link-icon.svg";
import heartEpmty from "../../icons/heart-empty.svg";
import heartFilled from "../../icons/heart-filled.svg";
import TimeAgo from "react-timeago";

function Joke({ joke, isFavourite }) {

  const imgForButton = !isFavourite ? <img src={heartEpmty} alt="heart" /> : <img src={heartFilled} alt="heart" />;

  const clickHandler = !isFavourite ? addToFavourite : removeFromFavourite

  return (
    <li className="joke-container">
      <button className="favourite-btn" onClick={(e) => {
                e.stopPropagation();
                clickHandler(joke)
              }}>
        {imgForButton}
      </button>
      <div className="flex">
        <img src={messageIcon} alt="Message icon" />
        <div className="joke-content">
          <div className="id">
            <span>ID:&nbsp;</span>
            <a href={joke.url} className="id-link">
              {joke.id}
              <img src={linkIcon} alt="Link Icon" className="link-icon" />
            </a>
          </div>
          <div className="joke">{joke.value}</div>
          <div className="joke-footer-flx">
            <div className="update">
              Last update: <span  className="update-b"><TimeAgo date={joke.updated_at} /></span>
            </div>
            {joke.categories && !joke.categories.length ? null : <div className="ctgr-display">
              {joke.categories && joke.categories[0]}
            </div>}
          </div>
        </div>
      </div>
      {console.log(joke)}
    </li>
  );
};

const mapDispatchToProps = {
  addToFavourite,
  removeFromFavourite
}

export default connect(null, mapDispatchToProps)(Joke)
