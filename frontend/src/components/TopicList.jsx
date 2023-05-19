import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';


const TopicList = ({topics}) => {
  return (
    <div className="top-nav-bar--topic-list">
      {topics.map(topic => 
        <TopicListItem 
          key={topic.id}
          label={topic.label}
          link={topic.link} 
        />
      )}
    </div>
  );
}

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: 'Nature',
      link: 'link placeholder' 
    },
    { 
      id: 2, 
      label: 'Food',
      link: 'link placeholder' 
    },
    {
      id: 3,
      label: 'People',
      link: 'link placeholder' 
    },
  ]
}
export default TopicList