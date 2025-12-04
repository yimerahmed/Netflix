import React, { useState, useEffect } from "react";
import instance from "../../Utils/axios";
import requests from "../../Utils/requests";
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(requests.fetchNetflixOriginals);

        // pick one random movie
        const randomMovie =
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ];

        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header className="banner-wrapper"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      }}
    >
      <div className="content-wrapper">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="button-wrapper">
          <button>Play</button>
          <button>My List</button>
        </div>

        <p className="banner-description">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner_fade"></div>
    </header>
  );
};

export default Banner;
