const { User } = require('../models');

const userData=

[
  {
    "name": "Anonymous User",
    "email": "anonymousmail@somemail.com",
    "password": "StrongPassword9&/"
  },
  {
    "name": "Young Connor",
    "email": "youngmail@somemail.com.com",
    "password": "StrongPassword9&/"
  },
  {
    "name": "Umar A",
    "email": "umarmail@somemail.com",
    "password": "StrongPassword9&/"
  }
]
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;