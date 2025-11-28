import React, { useState, useEffect } from "react";
import axiosInstance from "../Utils/axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="row">
      <h2 className="heading2">{title}</h2>
      <div
        className="row-posters"
        style={{ display: "flex", overflowX: "scroll" }}
      >
        {movies.length > 0 ? (
          movies.map((movie) =>
            (isLargeRow ? movie.poster_path : movie.backdrop_path) ? ( // check path exists
              <img
                key={movie.id}
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
    </div>
  );
};

export default Row;
