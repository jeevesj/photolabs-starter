import React, { useEffect, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  const {
    showModal,
    selectedPhoto,
    favPhotos,
    handlePhotoClick,
    handleModalClose,
    handleFavClick,
    handleTopicClick,
  } = useApplicationData();

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));

    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => setTopics(data))
      .catch(error => console.error(error));
  }, []);

  const similarPhotos = photos.filter(photo => photo.slug === selectedPhoto?.slug && photo.id !== selectedPhoto?.id);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick} favPhotos={favPhotos} onFavClick={handleFavClick} onTopicClick={handleTopicClick}/>
      {showModal && <PhotoDetailsModal selectedPhoto={selectedPhoto} similarPhotos={similarPhotos} onClose={handleModalClose} onFavClick={handleFavClick} favPhotos={favPhotos} />}
      
    </div>
  );
}

export default App;
