export const validateApiKey = (req, res, next) => {
    const {key} = req.headers;
    if (key === process.env.API_KEY) {
      next(); // Proceed to the next middleware/route
    } else {
      res.status(403).send('Access denied.'); // Return a 403 Forbidden status for unauthorized requests
    }
  };