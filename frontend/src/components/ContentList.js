import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const ContentList = () => {
  const authContext = useContext(AuthContext);
  const { token } = authContext;

  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      try {
        const res = await axios.get('/api/contents', config);
        setContents(res.data);
      } catch (err) {
        // handle error (e.g., show an error message)
      }
    };

    fetchContents();
  }, [token]);

  return (
    <div>
      <h2>Contents</h2>
      <ul>
        {contents.map((content) => (
          <li key={content._id}>{content.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
