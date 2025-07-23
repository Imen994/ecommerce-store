const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: 'User registered' });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid email' });

  console.log("Password sent:", password);
  console.log("Hashed password DB:", user.password);

  const isMatch = await bcrypt.compare(password, user.password);

  console.log("Password match:", isMatch);

  if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
  console.log("Password sent:", password);
  console.log("Hashed password DB:", user.password);
  console.log("Password match:", isMatch);

};
