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
* ** Header:** `ApiKey: MovieWatchlistAPIKey`

## Features

- **Full CRUD Support**: Manage movies (`GET`, `POST`, `PATCH`, `DELETE`).
- **In-Memory Data Storage**: Uses JavaScript memory without requiring an external database setup.
- **Dynamic Query Filtering**: Filter movies by `watched` status, `genre`, or search by `title`.
- **Custom Middleware**: Request logging, JSON parsing, 404 fallbacks, header protection (`x-api-key`), and input validation.

## API Endpoints Summary

| Method | Endpoint | Protection | Status Code | Description |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Public | `200 OK` | Server health check |
| `GET` | `/api/movies` | Public | `200 OK` | Fetch all movies (supports query parameters) |
| `GET` | `/api/movies/:id` | Public | `200 OK` | Fetch single movie by ID |
| `POST` | `/api/movies` | API Key | `201 Created` | Create a new movie |
| `PATCH` | `/api/movies/:id`| API Key | `200 OK` | Update specific fields of a movie |
| `DELETE`| `/api/movies/:id`| API Key | `204 No Content` | Remove a movie from the watchlist |

### Headers Required for Write Operations (`POST`, `PATCH`, `DELETE`)

```