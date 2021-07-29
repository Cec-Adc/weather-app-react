import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <div className="row">
        <div className="col-8">
          <form id="search-form">
            <input
              type="search"
              placeholder="Enter a city"
              autofocus
              autocomplete="off"
              id="search-text-input"
            />
            <input type="submit" value="Search" className="search-button" />
          </form>
        </div>
        <div className="col-4">
          <button
            className="current-location-button"
            id="current-location-button"
          >
            📍 My location
          </button>
        </div>
      </div>
    </div>
  );
}
