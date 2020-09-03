import React, { useState, useEffect } from "react";
import axios from "../../axios";

import "./banner.scss";

import requests from "../../requests/requests";

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];
      setMovie(randomMovie);
      return randomMovie;
    }
    fetchData();
  }, []);

  const syles = {
    backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
    backgroundPosition: "bottom center",
    backgroundSize: "cover",
  };

  return (
    <div className="banner__container">
      <div className="banner" style={syles}>
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h2 className="banner__description">
            {movie.overview ? movie.overview.substring(0, 250) + "..." : ""}
          </h2>
        </div>
        <div className="banner__fade"></div>
      </div>
    </div>
  );
}

export default Banner;
