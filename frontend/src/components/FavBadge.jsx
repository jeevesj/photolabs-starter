import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favPhotosCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={favPhotosCount > 0} />
      
    </div>
  ) 
};

export default FavBadge;