const jwt = require('jsonwebtoken');

const isLoggedIn =  (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  console.log("ok" , req.headers)
  try {
    const decoded =  jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("ok222", req.user)
    next();
  } catch (error) {
    console.log("coming",error)
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports =  {isLoggedIn};
