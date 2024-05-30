const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d' 
    });
};


const matchPassword = async function (enteredPassword , userPassword) {
    return await bcrypt.compare(enteredPassword, userPassword);
  };

  
module.exports = {generateToken, matchPassword};
