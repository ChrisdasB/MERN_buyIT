export const validateReferer = (req, res, next) => {
    const validReferer = 'http://localhost:3000/'; // Replace with your homepage URL
  
    if (req.headers.referer === validReferer) {
      next(); // Proceed to the next middleware/route
    } else {
      res.status(403).send('Access denied.'); // Return a 403 Forbidden status for unauthorized requests
    }
  };