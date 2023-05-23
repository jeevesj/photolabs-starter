import React from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    showModal,
    selectedPhoto,
    favPhotos,
    handlePhotoClick,
    handleModalClose,
    handleFavClick,
  } = useApplicationData();

  const similarPhotos = photos.filter(photo => photo.slug === selectedPhoto?.slug && photo.id !== selectedPhoto?.id);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick} favPhotos={favPhotos} onFavClick={handleFavClick}/>
      {showModal && <PhotoDetailsModal selectedPhoto={selectedPhoto} similarPhotos={similarPhotos} onClose={handleModalClose} onFavClick={handleFavClick} favPhotos={favPhotos} />}
    </div>
  );
}

export default App;
