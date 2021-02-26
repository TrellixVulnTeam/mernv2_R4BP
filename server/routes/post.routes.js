const express = require('express');

const router = express();

const PostController = require('../controllers/post.controller');

router.route('/posts').get(PostController.getPosts);
router.route('/posts/:id').get(PostController.getPost);

router.route('/posts').post(PostController.addPost);
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);
router.route('/posts/:id').put(PostController.editPost);
router.route('/posts/:id').delete(PostController.deletePost);

module.exports = router;