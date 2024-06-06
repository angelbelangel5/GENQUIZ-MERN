import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';

const LoginForm = (props) => {
  const authContext = useContext(AuthContext);
  const { login, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/student');
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="form-container">
      <h1>Account Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required />
        </div>
        <input type="submit" value="Login" className="btn btn-primary btn-block" />
      </form>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default LoginForm;
