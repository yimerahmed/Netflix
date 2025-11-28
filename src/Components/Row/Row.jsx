import React, { useState, useEffect } from "react";
import axiosInstance from "../../Utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import './Row.css'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(fetchUrl);
        setMovies(response.data?.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  // Play Trailer Handler
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // close trailer if already open
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error("Trailer not found", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="heading2">{title}</h2>
      <div className="row-posters">
        {movies.length > 0 ? (
          movies.map((movie) =>
            (isLargeRow ? movie.poster_path : movie.backdrop_path) ? ( // check path exists
              <img
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
                src={`${baseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title || movie.original_name}
                style={{
                  maxHeight: isLargeRow ? "250px" : "150px",
                  marginRight: "10px",
                }}
              />
            ) : null
          )
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
      {/* Trailer */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
