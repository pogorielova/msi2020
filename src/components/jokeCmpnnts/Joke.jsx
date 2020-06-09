import React from "react";
import { connect } from 'react-redux';
import { addToFavorite, removeFromFavorite} from '../../store/actions/favoriteActions'
import messageIcon from "../../icons/message-icon.svg";
import linkIcon from "../../icons/link-icon.svg";
import heartEpmty from "../../icons/heart-empty.svg";
import heartFilled from "../../icons/heart-filled.svg";
import TimeAgo from "react-timeago";

function Joke({ joke, isFavourite, addToFavorite, removeFromFavorite }) {

  const imgForButton = !isFavourite ? <img src={heartEpmty} alt="heart" /> : <img src={heartFilled} alt="heart" />;

  const clickHandler = !isFavourite ? addToFavorite : removeFromFavorite

  return (
    <li className="joke-container">
      <button className="favorite-btn" onClick={(e) => {
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
    </li>
  );
};

const mapDispatchToProps = {
  addToFavorite,
  removeFromFavorite,
}

export default connect(null, mapDispatchToProps)(Joke)
