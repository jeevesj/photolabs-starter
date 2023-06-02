import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.photoId]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotos: state.favPhotos.filter(id => id !== action.photoId)
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.photos
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.topics
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        showModal: action.showModal
      };
    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

export default function useApplicationData() {
  const initialState = {
    showModal: false,
    selectedPhoto: null,
    favPhotos: [],
    photos: [],
    topics: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, showModal: true });
  };

  const handleModalClose = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo: null });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, showModal: false });
  };

  const handleFavClick = (photoId) => {
    
    if (state.favPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  
  };

  const handleTopicClick = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: data }))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos: data }))
      .catch(error => console.error(error));

    fetch("http://localhost:8001/api/topics")
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics: data }))
      .catch(error => console.error(error));
  }, []);

  return {
    showModal: state.showModal,
    selectedPhoto: state.selectedPhoto,
    favPhotos: state.favPhotos,
    handlePhotoClick,
    handleModalClose,
    handleFavClick,
    photos: state.photos,
    handleTopicClick,
    topics: state.topics,
  };
}
