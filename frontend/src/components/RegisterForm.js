import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

const RegisterForm = (props) => {
  const authContext = useContext(AuthContext);
  const { register, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/student');
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.error('Passwords do not match');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className="form-container">
      <h1>Account Register</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" value={password2} onChange={onChange} required />
        </div>
        <input type="submit" value="Register" className="btn btn-primary btn-block" />
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default RegisterForm;
