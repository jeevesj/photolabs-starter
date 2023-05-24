import { useState } from 'react';

export default function useApplicationData() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favPhotos, setFavPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedPhoto(null);
    setShowModal(false);
  };

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

  const handleTopicClick = (topicId) => {
    console.log(`Fetching photos for topic id: ${topicId}`);
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  };

  return {
    showModal,
    selectedPhoto,
    favPhotos,
    handlePhotoClick,
    handleModalClose,
    handleFavClick,
    photos,
    handleTopicClick,

  };
}