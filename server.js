// DEPENDENCIES
const express = require('express');
const { Sequelize } = require('sequelize');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI);

sequelize.authenticate()
  .then(() => {
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`);
  })
  .catch(err => {
    console.error(`Unable to connect to PG: ${err}`);
  });

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

// LISTEN
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🎸 Rockin' on port: ${PORT}`);
});





