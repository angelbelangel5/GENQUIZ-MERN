import React, { useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import QuizList from './QuizList';
import ContentList from './ContentList';

const StudentDashboard = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <QuizList />
      <ContentList />
    </div>
  );
};

export default StudentDashboard;
