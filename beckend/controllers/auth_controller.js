const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.login = async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    // Compare the password entered by the user with the hashed password in the database
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    // If the passwords don't match, return an error
    if (!isMatch) {
      return res.status(401).json({ error: "Incorrect email or password" });
    }

    // Generate a JSON Web Token (JWT) and return it to the client
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
