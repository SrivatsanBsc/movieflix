import { useState } from "react";
import "./App.css";

function App() {
  const [myList, setMyList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const movies = [
    {
      id: 1,
      title: "The Last Mission",
      genre: "Action",
      year: 2026,
      rating: 8.5,
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&h=900&q=85",
    },
    {
      id: 2,
      title: "Lost in Space",
      genre: "Sci-Fi",
      year: 2025,
      rating: 8.2,
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&h=900&q=85",
    },
    {
      id: 3,
      title: "Dark Night",
      genre: "Thriller",
      year: 2026,
      rating: 7.9,
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&h=900&q=85",
    },
    {
      id: 4,
      title: "Love Again",
      genre: "Romance",
      year: 2024,
      rating: 8.1,
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&h=900&q=85",
    },
  ];

  // CATEGORIES
  const categories = [
    "All",
    "Action",
    "Sci-Fi",
    "Thriller",
    "Romance",
  ];

  // FILTER MOVIES
  const filteredMovies =
    selectedCategory === "All"
      ? movies
      : movies.filter(
          (movie) => movie.genre === selectedCategory
        );

  // ADD MOVIE
  const addToList = (movie) => {
    const alreadyAdded = myList.some(
      (item) => item.id === movie.id
    );

    if (!alreadyAdded) {
      setMyList([...myList, movie]);
    }
  };

  // REMOVE MOVIE
  const removeFromList = (id) => {
    setMyList(
      myList.filter((movie) => movie.id !== id)
    );
  };

  return (
    <div className="app">

      {/* MOVIES */}
      <section className="movies">

        <h2>Popular Movies</h2>

        {/* CATEGORY BUTTONS */}
        <div className="categories">

          {categories.map((category) => (

            <button
              key={category}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() =>
                setSelectedCategory(category)
              }
            >
              {category}
            </button>

          ))}

        </div>


        {/* MOVIE CARDS */}
        <div className="movie-grid">

          {filteredMovies.map((movie) => (

            <div
              className="movie-card"
              key={movie.id}
            >

              <img
                src={movie.image}
                alt={movie.title}
              />

              <div className="movie-details">

                <h3>{movie.title}</h3>

                <p>
                  {movie.genre} • {movie.year}
                </p>

                <p className="rating">
                  ⭐ {movie.rating}
                </p>

                <button
                  onClick={() =>
                    addToList(movie)
                  }
                >

                  {myList.some(
                    (item) =>
                      item.id === movie.id
                  )
                    ? "✓ Added"
                    : "+ Add to My List"}

                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* MY LIST */}
      <section className="my-list">

        <h2>
          My List ({myList.length})
        </h2>

        {myList.length === 0 ? (

          <div className="empty">

            <p>
              No movies added yet.
            </p>

          </div>

        ) : (

          <div className="movie-grid">

            {myList.map((movie) => (

              <div
                className="movie-card"
                key={movie.id}
              >

                <img
                  src={movie.image}
                  alt={movie.title}
                />

                <div className="movie-details">

                  <h3>{movie.title}</h3>

                  <p>
                    {movie.genre} • {movie.year}
                  </p>

                  <p className="rating">
                    ⭐ {movie.rating}
                  </p>

                  <button
                    className="remove"
                    onClick={() =>
                      removeFromList(movie.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default App;