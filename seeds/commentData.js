const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Nice work.",
    user_id: 1,
    blog_id: 1,
  },
  {
    comment_text: "It's in favour of audiences.",
    user_id: 2,
    blog_id: 2,
  },
  {
    comment_text: "InterestingGood job!",
    user_id: 3,
    blog_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
