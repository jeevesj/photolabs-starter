import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem key={photo.id} {...photo} />
      ))}
    </ul>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
     username: 'Jacob',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 1,
     hideUserName: false,
    },
    {
     username: 'Jacobi',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 2,
     hideUserName: false,
    },
    {
     username: 'Jacoby',
     imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
     id: 3,
     hideUserName: false,
    }
   ]
}

export default PhotoList