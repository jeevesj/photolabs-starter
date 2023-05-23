import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onPhotoClick, favPhotos, onFavClick }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favPhotos={favPhotos} />
      <PhotoList photos={photos} onFavClick={onFavClick} favPhotos={favPhotos} onPhotoClick={onPhotoClick}/>
    </div>
  );
}

export default HomeRoute;