const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'techFan10',
    email: 'techFan100@test.com',
    password: 'password1234'
  },
  {
    username: 'bloggerGal',
    email: 'bloggerGal@test.com',
    password: 'pass12345'
  },
  {
    username: 'helloWorld',
    email: 'helloWorld@test.com',
    password: 'password1'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;