const express = require('express');
const router = express.Router();
const { getQuizzes, createQuiz, updateQuiz, deleteQuiz } = require('../controllers/quizController');
const { auth, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(auth, getQuizzes)
  .post(auth, admin, createQuiz);

router.route('/:id')
  .put(auth, admin, updateQuiz)
  .delete(auth, admin, deleteQuiz);

module.exports = router;
