import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
import './App.scss';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedPhoto(null);
    setShowModal(false);
  };

  const similarPhotos = photos.filter(photo => photo.slug === selectedPhoto?.slug && photo.id !== selectedPhoto?.id);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick} />
      {showModal && <PhotoDetailsModal selectedPhoto={selectedPhoto} similarPhotos={similarPhotos} onClose={handleModalClose} />}
    </div>
  );
}

export default App;
