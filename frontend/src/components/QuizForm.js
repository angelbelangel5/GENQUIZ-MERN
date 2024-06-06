import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const QuizForm = () => {
  const authContext = useContext(AuthContext);
  const { token } = authContext;

  const [quiz, setQuiz] = useState({
    title: '',
    questions: [{ question: '', options: ['', '', '', ''], correctAnswer: '' }]
  });

  const { title, questions } = quiz;

  const onChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const onQuestionChange = (index, e) => {
    const newQuestions = questions.map((q, i) =>
      i === index ? { ...q, [e.target.name]: e.target.value } : q
    );
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const onOptionChange = (qIndex, oIndex, e) => {
    const newQuestions = questions.map((q, i) => {
      if (i === qIndex) {
        const newOptions = q.options.map((option, oi) =>
          oi === oIndex ? e.target.value : option
        );
        return { ...q, options: newOptions };
      }
      return q;
    });
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const addQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }]
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    try {
      await axios.post('/api/quizzes', quiz, config);
      // handle success (e.g., show a message or clear the form)
    } catch (err) {
      // handle error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Quiz Title</label>
        <input type="text" name="title" value={title} onChange={onChange} required />
      </div>
      {questions.map((q, index) => (
        <div key={index}>
          <label>Question {index + 1}</label>
          <input type="text" name="question" value={q.question} onChange={(e) => onQuestionChange(index, e)} required />
          {q.options.map((option, oIndex) => (
            <div key={oIndex}>
            <label>Option {oIndex + 1}</label>
            <input
              type="text"
              value={option}
              onChange={(e) => onOptionChange(index, oIndex, e)}
              required
            />
          </div>
        ))}
        <label>Correct Answer</label>
        <input
          type="text"
          name="correctAnswer"
          value={q.correctAnswer}
          onChange={(e) => onQuestionChange(index, e)}
          required
        />
      </div>
    ))}
    <button type="button" onClick={addQuestion}>
      Add Question
    </button>
    <input type="submit" value="Create Quiz" />
  </form>
);
};

export default QuizForm;
