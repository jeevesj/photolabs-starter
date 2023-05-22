import React from 'react';
import PhotoListItem from './PhotoListItem';
import mockPhotos from '../mocks/photos.json';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, onFavClick, favPhotos, onPhotoClick }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => 
        <PhotoListItem 
          key={photo.id}
          username={photo.user.username}
          imageSource={photo.urls.small}
          id={photo.id}
          onFavClick={onFavClick}
          favPhotos={favPhotos}
          onPhotoClick={onPhotoClick}
        />
      )}
    </div>
  );
}


export default PhotoList