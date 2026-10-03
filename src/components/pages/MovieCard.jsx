function MovieCard({ movie, addToList }) {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>
          {movie.genre} • {movie.year}
        </p>

        <p className="rating">⭐ {movie.rating}</p>

        <button onClick={() => addToList(movie)}>
          + Add to My List
        </button>
      </div>
    </div>
  );
}

export default MovieCard;