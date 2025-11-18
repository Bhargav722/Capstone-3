// Authentication controller
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../config/database');

const ensureSecretKey = () => {
  if (!process.env.SECRET_KEY) {
    throw new Error('SECRET_KEY_NOT_CONFIGURED');
  }

  return process.env.SECRET_KEY;
};

const generateToken = (user) => {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
      name: user.name,
    },
    ensureSecretKey(),
    { expiresIn: '1d' }
  );
};

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required.' });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(422).json({ message: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken(newUser);

    return res.status(201).json({
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
      message: 'User created successfully.',
    });
  } catch (error) {
    console.error('Signup error:', error);

    if (error.message === 'SECRET_KEY_NOT_CONFIGURED') {
      return res.status(500).json({ message: 'Server secret key not configured.' });
    }

    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(422).json({ message: 'User does not exist.' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Password is incorrect.' });
    }

    const token = generateToken(user);

    return res.status(200).json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error('Login error:', error);

    if (error.message === 'SECRET_KEY_NOT_CONFIGURED') {
      return res.status(500).json({ message: 'Server secret key not configured.' });
    }

    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  signup,
  login
};

