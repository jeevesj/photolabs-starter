import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, onFavClick, favPhotos, onPhotoClick }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => 
        <PhotoListItem 
          key={photo.id}
          photo={photo}
          onFavClick={onFavClick}
          favPhotos={favPhotos}
          onPhotoClick={onPhotoClick}
        />
      )}
    </div>
  );
}


export default PhotoList