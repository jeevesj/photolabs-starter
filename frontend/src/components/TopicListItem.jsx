import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = ( props ) => {
  return (
    <div className="topic-list--item">
      {props.key}
      
      {props.link}
      
    </div>
  );
}

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder' 
}

export default TopicListItem