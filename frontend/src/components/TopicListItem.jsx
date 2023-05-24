import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ id, label, link, onTopicClick }) => {
  return (
    <div className="topic-list--item" onClick={() => onTopicClick(id)}>
      {label}
    </div>
  );
}


export default TopicListItem;
