import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
import './App.scss';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePhotoClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick} />
      {showModal && <PhotoDetailsModal onClose={handlePhotoClick} />}
    </div>
  );
}


export default App;
