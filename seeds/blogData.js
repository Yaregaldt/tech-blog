
const { Blog } = require('../models');

const blogData=


[
  {
    "title": "I Capture the Castle",
    "blog_text": "Capture the Castle should be essential reading for aspiring writers, those looking for historical fiction or romance, or anyone who loves reading amazing classic books.",
    "user_id":1
  },
  {
    "title": "Galaxy Zach: Journey to Juno",
    "blog_text": "Boys and girls will both like it. It's an easy chapter book with pictures on every page. I love the illustrations.",
    "user_id": 2
  },
  {
    "title": "Mapping the World",
    "blog_text": "Every day, people around the world use maps. Whether it is an airplane pilot or businessman, housewife or museum group, maps have always and will continue to provide useful information for all.",
    "user_id": 3
  }
]
const seedblog = () => Blog.bulkCreate(blogData);

module.exports = seedblog;