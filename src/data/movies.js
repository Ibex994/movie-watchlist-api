export const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Science Fiction",
    watched: true,
    rating: 5
  },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime",
      watched: false,
      rating: 5
    },
    {
      id: 3,
      title: "Arrival",
      genre: "Sci-Fi",
      watched: true,
      rating: 5
    },
    {id: 4,
      title: "Yewendoch Guday",
      genre: "Comedy",
      watched: false,
      rating: 5},
    {id: 5,
      title: "Aladankushem",
      genre: "Action",
      watched: false,
      rating: 5},
    ];
    let nextId =6;
    export function generateNextId() {
      return nextId++;
    }   