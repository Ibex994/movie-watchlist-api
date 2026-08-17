const ApiKey = "MovieWatchlistAPIKey";

export function requireApiKey(req, res, next) {
  const apiKey = req.headers["x-api-key"];
  if (apiKey === ApiKey) {
    next();
  } else {
    res.status(403).json({ error: "Invalid API Key" });
  }
}