import React from 'react';
import PhotoListItem from './PhotoListItem';
import mockPhotos from '../mocks/photos.json';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos }) => (
  <div className="photo-list">
      {mockPhotos.map(photo => 
        <PhotoListItem
          key={photo.id}
          username={photo.user.name}
          imageSource={photo.urls.regular}
        />
      )}
    </div>
);



export default PhotoList