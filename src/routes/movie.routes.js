import { Router } from "express";
import { movies, generateNextId } from "../data/movies.js";
import { requireApiKey } from "../middleware/requireApiKey.js";
import { validateMovie, validateMovieUpdate } from "../middleware/validateMovie.js";

const router = Router();



router.get("/", (req, res) => {
  let filteredMovies = [...movies];
  const { watched, genre, search } = req.query;


  if (watched !== undefined) {
    const isWatched = watched === "true";
    filteredMovies = filteredMovies.filter((m) => m.watched === isWatched);
  }

  if (genre !== undefined) {
    filteredMovies = filteredMovies.filter(
      (m) => m.genre.toLowerCase() === genre.toLowerCase()
    );
  }


  if (search !== undefined) {
    filteredMovies = filteredMovies.filter((m) =>
      m.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  res.status(200).json({ data: filteredMovies });
});




router.get("/:id", (req, res) => {
  const movieId = Number(req.params.id);

  if (isNaN(movieId)) {
    return res.status(400).json({ message: "Invalid movie ID parameter" });
  }

  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.status(200).json({ data: movie });
});




router.post("/", requireApiKey, validateMovie, (req, res) => {
  const { title, genre, watched = false, rating = null } = req.body;

  const newMovie = {
    id: generateNextId(),
    title: title.trim(),
    genre: genre.trim(),
    watched: Boolean(watched),
    rating: rating ?? null
  };

  movies.push(newMovie);
  res.status(201).json({ data: newMovie });
});



router.patch("/:id", requireApiKey, validateMovieUpdate, (req, res) => {
  const movieId = Number(req.params.id);

  if (isNaN(movieId)) {
    return res.status(400).json({ message: "Invalid movie ID parameter" });
  }

  const movieIndex = movies.findIndex((m) => m.id === movieId);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const currentMovie = movies[movieIndex];
  const { title, genre, watched, rating } = req.body;

  const updatedMovie = {
    ...currentMovie,
    ...(title !== undefined && { title: title.trim() }),
    ...(genre !== undefined && { genre: genre.trim() }),
    ...(watched !== undefined && { watched }),
    ...(rating !== undefined && { rating })
  };

  movies[movieIndex] = updatedMovie;
  res.status(200).json({ data: updatedMovie });
});



router.delete("/:id", requireApiKey, (req, res) => {
  const movieId = Number(req.params.id);

  if (isNaN(movieId)) {
    return res.status(400).json({ message: "Invalid movie ID parameter" });
  }

  const movieIndex = movies.findIndex((m) => m.id === movieId);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  movies.splice(movieIndex, 1);
  res.status(204).send();
});

export default router;