import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';

const TopNavigation = ({ favPhotos, topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicClick} />
      <FavBadge favPhotosCount={favPhotos.length} />
    </div>
  )
}

export default TopNavigation;