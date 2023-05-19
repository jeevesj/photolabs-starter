import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>
      <TopicList />
    </div>
  )
}

export default TopNavigation;