import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';


const FavBadge = ({ favPhotosCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon width={20} height={17} fill="#C80000" displayAlert={favPhotosCount > 0} />
      {favPhotosCount > 0 && (
        <div className="fav-badge--count">
          <span>{favPhotosCount}</span>
        </div>
      )}
    </div>
  ) 
};

export default FavBadge;