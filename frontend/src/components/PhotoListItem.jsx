
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ username, imageSource, id, onFavClick, favPhotos, onPhotoClick }) => (
  <div key={id} className="photo-list--item">
      <div className="username">{username}</div>
      <div className='photo-list--image-container'onClick={() => onPhotoClick(id)}>
        <img className="photo-list--image" src={imageSource} alt={username} />
        <PhotoFavButton onFavClick={onFavClick} favPhotos={favPhotos} photoId={id} />
      </div>
  </div>
);

export default PhotoListItem;