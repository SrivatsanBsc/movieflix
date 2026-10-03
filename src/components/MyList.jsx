function MyList({ myList, removeFromList }) {
  return (
    <section className="my-list">
      <h2>My List ({myList.length})</h2>

      {myList.length === 0 ? (
        <div className="empty-list">
          <p>No movies added yet.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {myList.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.image} alt={movie.title} />

              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>
                  {movie.genre} • {movie.year}
                </p>
                <p className="rating">⭐ {movie.rating}</p>

                <button onClick={() => removeFromList(movie.id)}>
                  Remove from My List
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyList;