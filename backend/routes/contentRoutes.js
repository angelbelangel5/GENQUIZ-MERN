const express = require('express');
const router = express.Router();
const { getContent, createContent, updateContent, deleteContent } = require('../controllers/contentController');
const { auth, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(auth, getContent)
  .post(auth, admin, createContent);

router.route('/:id')
  .put(auth, admin, updateContent)
  .delete(auth, admin, deleteContent);

module.exports = router;
