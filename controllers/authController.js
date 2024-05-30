const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const { matchPassword } = require('../utils/authTokenMiddlware');

const registerUser = async (req, res) => {
    const { firstName, lastName, userName, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        firstName,
        lastName,
        userName,
        email,
        password
    });

    if (user) {
        console.log("User", user)
        res.status(201).json({message: "User registered successfully"});
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
};

const signIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
      console.log("oks", password , user.password);
      const isMatch = await matchPassword(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      res.status(200).json({ token :token , userId : user._id});
  
    } catch (error) {
        console.log("ok", error)
      res.status(500).json({ message: error });
    }
  };
  


module.exports = {registerUser , signIn}