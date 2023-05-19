import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = ({ id, label, link }) => {
  return (
    <div className="topic-list--item">
      {label}
    </div>
  );
}

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder' 
}

export default TopicListItem