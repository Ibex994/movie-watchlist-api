# Movie Watchlist API

A simple Node.js & Express API to track movies you want to watch or have already seen.

---

## How to Run

1. **Install dependencies**
```bash
npm install

```


2. **Start the server**
```bash
npm run dev

```


The API will start at `http://localhost:3000`.

---

## Security

To add, update, or delete movies, pass this header in your request:

* **Header:** `x-api-key: movie-class-2026`

---

## Endpoints

* **`GET /api/health`** - Check if the server is up
* **`GET /api/movies`** - View all movies *(Supports filtering: `?watched=true`, `?genre=Sci-Fi`, `?search=godfather`)*
* **`GET /api/movies/:id`** - View a specific movie
* **`POST /api/movies`** - Add a new movie *(Requires API key)*
* **`PATCH /api/movies/:id`** - Update a movie *(Requires API key)*
* **`DELETE /api/movies/:id`** - Remove a movie *(Requires API key)*

---

## Example Request Payload (`POST` / `PATCH`)

```json
{
  "title": "Interstellar",
  "genre": "Sci-Fi",
  "watched": true,
  "rating": 5
}

```
