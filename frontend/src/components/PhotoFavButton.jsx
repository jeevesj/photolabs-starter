import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ onFavClick, favPhotos, photoId }) => {
  const isFav = favPhotos.includes(photoId);
  const handleFavClick = () => {
    onFavClick(photoId);
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
