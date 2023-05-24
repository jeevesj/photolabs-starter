import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';

export const PhotoDetailsModal = ({ onClose, selectedPhoto, similarPhotos, onFavClick, favPhotos }) => (
  <div className='photo-details-modal'>
    <button className='photo-details-modal--close-button' onClick={onClose}>
      

      <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_428_287)">
          <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_428_287">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      </button>


    <div className='photo-details-modal--image'>
      {selectedPhoto && <img src={selectedPhoto.urls.regular} alt={selectedPhoto.user.username} />}
      <div className='photo-details-modal--fav'>
        <PhotoFavButton onFavClick={onFavClick} favPhotos={favPhotos} photoId={selectedPhoto.id} />
      </div>
    </div>
    <div>
      <div className="photo-modal--username">{selectedPhoto.user.username}</div>
      <div className='photo-modal--user-info'>{selectedPhoto.location.city}, {selectedPhoto.location.country}</div>
    </div>

    <div className='photo-details-modal--header'>
      <h1>Similar Photos</h1>
    </div>

    <div className='photo-details-modal--images'>
      {similarPhotos.map(photo => (
        <div key={photo.id}>
          <img src={photo.urls.small} alt={photo.username} />
        </div>
      ))}
    </div>
  </div>
)

export default PhotoDetailsModal;
