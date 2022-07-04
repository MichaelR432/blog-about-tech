const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I am test 1!',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'I am test 2!',
    user_id: 2,
    post_id: 8
  },
  {
    comment_text: 'I am test 3!',
    user_id: 3,
    post_id: 10
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;