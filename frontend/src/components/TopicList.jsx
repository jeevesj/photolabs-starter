import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';


const TopicList = ({topics, onTopicClick}) => {
  
  return (
    <div className="top-nav-bar--topic-list">
      {topics.map(topic => 
        <TopicListItem 
          key={topic.id}
          id={topic.id}
          label={topic.title}
          link={topic.slug} 
          onTopicClick={onTopicClick}
        />
      )}
    </div>
  );
}


export default TopicList