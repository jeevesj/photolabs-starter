import React from 'react';
import TopicListItem from './TopicListItem';
import mockTopics from '../mocks/topics.json';
import '../styles/TopicList.scss';


const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar--topic-list">
      {mockTopics.map(topic => 
        <TopicListItem 
          key={topic.id}
          label={topic.label}
          link={topic.link} 
        />
      )}
    </div>
  );
}


export default TopicList