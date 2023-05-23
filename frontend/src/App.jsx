import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
import './App.scss';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favPhotos, setFavPhotos] = useState([]); // New line

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedPhoto(null);
    setShowModal(false);
  };

  const handleFavClick = (photoId) => { // Moved from HomeRoute
    let newFavPhotos = [...favPhotos];
    if (favPhotos.includes(photoId)) {
      newFavPhotos = newFavPhotos.filter(id => id !== photoId);
    } else {
      newFavPhotos.push(photoId);
    }
    setFavPhotos(newFavPhotos);
    console.log("Number of favorite photos:", newFavPhotos.length);
  };

  const similarPhotos = photos.filter(photo => photo.slug === selectedPhoto?.slug && photo.id !== selectedPhoto?.id);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick} favPhotos={favPhotos} onFavClick={handleFavClick} /> 
      {showModal && <PhotoDetailsModal selectedPhoto={selectedPhoto} similarPhotos={similarPhotos} onClose={handleModalClose} favPhotos={favPhotos} onFavClick={handleFavClick} />} 
    </div>
  );
}

export default App;
