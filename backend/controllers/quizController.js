const Quiz = require('../models/Quiz');

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createQuiz = async (req, res) => {
  const { title, questions } = req.body;

  try {
    const quiz = new Quiz({
      title,
      questions,
      createdBy: req.user._id
    });

    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateQuiz = async (req, res) => {
  const { id } = req.params;
  const { title, questions } = req.body;

  try {
    const quiz = await Quiz.findById(id);

    if (quiz) {
      quiz.title = title;
      quiz.questions = questions;

      await quiz.save();
      res.json(quiz);
    } else {
      res.status(404).json({ message: 'Quiz not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findById(id);

    if (quiz) {
      await quiz.remove();
      res.json({ message: 'Quiz removed' });
    } else {
      res.status(404).json({ message: 'Quiz not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
