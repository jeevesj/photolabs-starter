import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = () => {
    const newIsFav = !isFav;
    setIsFav(newIsFav);
    console.log(newIsFav);
  }

  return (
    <div className=''>
      <div 
        className={`photo-list--fav-icon ${isFav ? 'is-fav' : ''}`}
        onClick={handleFavClick}
      >
        <FavIcon fill={isFav ? '#C80000' : '#EEEEEE'} />
      </div>
    </div>
  );
}

export default PhotoFavButton;