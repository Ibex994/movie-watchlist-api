export function validateMovie(req, res, next) {
  const { title, genre, watched, rating } = req.body;


  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      message: "title is required and must be a non-empty string"
    });
  }

  if (!genre || typeof genre !== "string" || genre.trim() === "") {
    return res.status(400).json({
      message: "genre is required and must be a non-empty string"
    });
  }

  if (watched !== undefined && typeof watched !== "boolean") {
    return res.status(400).json({
      message: "watched must be a boolean value (true or false)"
    });
  }

  if (rating !== undefined && rating !== null) {
    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      return res.status(400).json({
        message: "rating must be null or a number between 1 and 5"
      });
    }
  }

  next();
}

export function validateMovieUpdate(req, res, next) {
  const { id, title, genre, watched, rating } = req.body;

  if (id !== undefined) {
    return res.status(400).json({
      message: "Cannot modify movie id"
    });
  }

  if (title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({
        message: "title must be a non-empty string"
      });
    }
  }


  if (genre !== undefined) {
    if (typeof genre !== "string" || genre.trim() === "") {
      return res.status(400).json({
        message: "genre must be a non-empty string"
      });
    }
  }

 
  if (watched !== undefined && typeof watched !== "boolean") {
    return res.status(400).json({
      message: "watched must be a boolean value (true or false)"
    });
  }


  if (rating !== undefined && rating !== null) {
    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      return res.status(400).json({
        message: "rating must be null or a number between 1 and 5"
      });
    }
  }

  next();
}
