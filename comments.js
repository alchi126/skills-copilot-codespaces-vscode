// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const { check } = require('express-validator');

// Create comment
// api/comments
router.post('/', 
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('id_post', 'Id post is required').not().isEmpty()
    ],
    commentsController.createComment
);

// Get comments by id post
// api/comments
router.get('/:id_post',
    commentsController.getCommentsByIdPost
);

// Update comment
// api/comments
router.put('/:id',
    [
        check('comment', 'Comment is required').not().isEmpty()
    ],
    commentsController.updateComment
);

// Delete comment
// api/comments
router.delete('/:id',
    commentsController.deleteComment
);

module.exports = router;