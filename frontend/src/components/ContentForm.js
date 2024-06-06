import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const ContentForm = () => {
  const authContext = useContext(AuthContext);
  const { token } = authContext;

  const [content, setContent] = useState({
    title: '',
    body: ''
  });

  const { title, body } = content;

  const onChange = (e) => setContent({ ...content, [ e.target.name ]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    try {
      await axios.post('/api/contents', content, config);
      // handle success (e.g., show a message or clear the form)
    } catch (err) {
      // handle error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Content Title</label>
        <input type="text" name="title" value={title} onChange={onChange} required />
      </div>
      <div>
        <label>Content Body</label>
        <textarea name="body" value={body} onChange={onChange} required />
      </div>
      <input type="submit" value="Create Content" />
    </form>
  );
};

export default ContentForm;
