import React from 'react';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos.json';
import topics from './mocks/topics.json';
import './App.scss';

const App = () => (
  <div className="App">
    <HomeRoute photos={photos} topics={topics} />
  </div>
);


export default App;
