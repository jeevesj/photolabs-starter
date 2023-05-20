import React from 'react';
import { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favPhotos, setFavPhotos] = useState([]);

  const handleFavClick = (photoId) => {
    let newFavPhotos = [...favPhotos];
    if (favPhotos.includes(photoId)) {
      newFavPhotos = newFavPhotos.filter(id => id !== photoId);
    } else {
      newFavPhotos.push(photoId);
    }
    setFavPhotos(newFavPhotos);
    console.log("Number of favorite photos:", newFavPhotos.length);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favPhotos={favPhotos} />
      <PhotoList photos={photos} onFavClick={handleFavClick} favPhotos={favPhotos} />
    </div>
  );
}

export default HomeRoute;
