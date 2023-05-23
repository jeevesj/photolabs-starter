import { useReducer } from 'react';

export const ACTIONS = {
  SET_SHOW_MODAL: 'SET_SHOW_MODAL',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO',
  SET_FAV_PHOTOS: 'SET_FAV_PHOTOS',
}

function reducer(state, action) {
  if (action.type === ACTIONS.SET_SHOW_MODAL) {
    return { ...state, showModal: action.payload };
  }
  else if (action.type === ACTIONS.SET_SELECTED_PHOTO) {
    return { ...state, selectedPhoto: action.payload };
  }
  else if (action.type === ACTIONS.SET_FAV_PHOTOS) {
    return { ...state, favPhotos: action.payload };
  }
  else {
    throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const initialState = {
  showModal: false,
  selectedPhoto: null,
  favPhotos: [],
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePhotoClick = (photo) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.SET_SHOW_MODAL, payload: true });
  };

  const handleModalClose = () => {
    dispatch({ type: ACTIONS.SET_SELECTED_PHOTO, payload: null });
    dispatch({ type: ACTIONS.SET_SHOW_MODAL, payload: false });
  };

  const handleFavClick = (photoId) => {
    let newFavPhotos = [...state.favPhotos];
    if (state.favPhotos.includes(photoId)) {
      newFavPhotos = newFavPhotos.filter(id => id !== photoId);
    } else {
      newFavPhotos.push(photoId);
    }
    dispatch({ type: ACTIONS.SET_FAV_PHOTOS, payload: newFavPhotos });
    console.log("Number of favorite photos:", newFavPhotos.length);
  };

  return {
    ...state,
    handlePhotoClick,
    handleModalClose,
    handleFavClick,
  };
}
