
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ username, imageSource, id, hideUserName }) => (
  <div key={id} className="photo-list--item">
    {!hideUserName && 
      <div 
        className="username">{username}
      </div>}
      <div className='photo-list--image-container'>
        <img className="photo-list--image" src={imageSource} alt={username} />
        <PhotoFavButton/>
      </div>
  </div>
);

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
}

export default PhotoListItem