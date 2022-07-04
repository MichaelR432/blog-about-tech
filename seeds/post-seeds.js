const { Post } = require('../models');

const postdata = [
  {
    post_id: 1,  
    title: 'A Cool Post About Code',
    content: 'Print Hello World',
    user_id: 1
  },
  {
    post_id: 8,    
    title: 'A Cool Post About Technology',
    content: 'Print Goodbye World',
    user_id: 2
  },
  {
    post_id: 10,    
    title: 'A Cool Post About Git',
    content: 'Print GoodBye World',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;