import React from 'react';
import { Link } from 'react-router-dom';



const SavedList = props => (
  <div className="saved-list">
    <Link to={"/"}>Saved Movies:</Link>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>

      
    ))}


    <div className="home-button">
    <Link to={"/"}>Home</Link>
    </div>
  </div>
);

export default SavedList;
