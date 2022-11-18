const { Router } = require('express');
const CommentController = require('../controllers/comments.controller');
const router = Router();

router.post('/comments', CommentController.addNewComment);
router.get('/comments', CommentController.getAllComment);

module.exports = router;