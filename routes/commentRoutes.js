const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const verifyToken = require('../middleware/authMiddleware');

router.get('/', commentController.getAllComments);
router.post('/', verifyToken, commentController.createComment);
router.get('/:id', commentController.getCommentById);
router.put('/:id', verifyToken, commentController.updateComment);
router.delete('/:id', verifyToken, commentController.deleteComment);

module.exports = router;