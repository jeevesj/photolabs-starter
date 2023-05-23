
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, onFavClick, favPhotos, onPhotoClick }) => (
  <div className="photo-list--item">
      <div className='photo-list--image-container' onClick={() => onPhotoClick(photo)}>
        <img className="photo-list--image" src={photo.urls.small} alt={photo.user.username} />
        <PhotoFavButton onFavClick={onFavClick} favPhotos={favPhotos} photoId={photo.id} />
      </div>
      <div className="photo-list--username">{photo.user.username}</div>
      <div className='photo-list--user-info'>{photo.location.city}, {photo.location.country}</div>
  </div>
);

export default PhotoListItem;