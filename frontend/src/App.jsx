import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./styles/PhotoList.scss"
import "./App.scss";

const App = () => {
  // Create an array with three elements
  const photos = new Array(3).fill(null);
  // FILL NULL TO ENABLE MAP
  return (
    <div className="App">
      <div className="photo-list">
        {photos.map((index) => (
          <PhotoListItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default App;
