import React, { useEffect, useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    showModal,
    selectedPhoto,
    favPhotos,
    handlePhotoClick,
    handleModalClose,
    handleFavClick,
    handleTopicClick,
    photos,
    topics,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={handlePhotoClick}
        favPhotos={favPhotos}
        onFavClick={handleFavClick}
        onTopicClick={handleTopicClick}
      />
      {showModal && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          onClose={handleModalClose}
          onFavClick={handleFavClick}
          favPhotos={favPhotos}
        />
      )}
    </div>
  );
};

export default App;
