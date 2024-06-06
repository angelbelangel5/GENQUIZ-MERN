import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const QuizList = () => {
  const authContext = useContext(AuthContext);
  const { token } = authContext;

  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      try {
        const res = await axios.get('/api/quizzes', config);
        setQuizzes(res.data);
      } catch (err) {
        // handle error (e.g., show an error message)
      }
    };

    fetchQuizzes();
  }, [token]);

  return (
    <div>
      <h2>Quizzes</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id}>{quiz.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
