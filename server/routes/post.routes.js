const express = require('express');

const router = express();

const PostController = require('../controllers/post.controller');

router.route('/posts').get(PostController.getPosts);
router.route('/posts/:id').get(PostController.getPost);

router.route('/posts').post(PostController.addPost);
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);

module.exports = router;