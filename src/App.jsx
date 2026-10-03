import { useState } from "react";
import "./App.css";

import Navbar from "./components/pages/Navbar.jsx";
import MovieCard from "./components/pages/MovieCard.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import MyList from "./components/MyList.jsx";
function App() {
  const [myList, setMyList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // MOVIE DATA
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

  // FILTER MOVIES
  const filteredMovies =
    selectedCategory === "All"
      ? movies
      : movies.filter((movie) => movie.genre === selectedCategory);

  // ADD MOVIE TO MY LIST
  const addToList = (movie) => {
    const alreadyAdded = myList.some(
      (item) => item.id === movie.id
    );

    if (!alreadyAdded) {
      setMyList([...myList, movie]);
    }
  };

  // REMOVE MOVIE FROM MY LIST
  const removeFromList = (id) => {
    setMyList(
      myList.filter((movie) => movie.id !== id)
    );
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <Navbar />

      {/* MOVIES SECTION */}
      <section className="movies">

        <h2>Popular Movies</h2>

        {/* CATEGORY FILTER */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* MOVIE CARDS */}
        <div className="movie-grid">
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              addToList={addToList}
            />
          ))}
        </div>

      </section>

      {/* MY LIST */}
      <MyList
        myList={myList}
        removeFromList={removeFromList}
      />

    </div>
  );
}

export default App;