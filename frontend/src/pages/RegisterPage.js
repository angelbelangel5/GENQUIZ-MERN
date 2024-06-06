import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = (props) => {
  return (
    <div>
      <RegisterForm history={props.history} />
    </div>
  );
};

export default RegisterPage;
