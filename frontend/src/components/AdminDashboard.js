import React, { useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import QuizForm from './QuizForm';
import ContentForm from './ContentForm';
import QuizList from './QuizList';
import ContentList from './ContentList';

const AdminDashboard = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <QuizForm />
      <QuizList />
      <ContentForm />
      <ContentList />
    </div>
  );
};

export default AdminDashboard;
