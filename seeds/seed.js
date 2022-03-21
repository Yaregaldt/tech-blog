const sequelize = require('../config/connection');
const seedBlog = require('./blogData');
const seedUser = require('./userData');
const seedComment = require('./commentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedUser();

  console.log('\n-----User Seeded-----\n')

  await seedBlog();

  console.log('\n----------Blog Seeded------------\n')


  await seedComment();

  console.log('\n--------------Comment Seeded--------\n')
  

  process.exit(0);
};

seedDatabase();
