import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=WL5oU8C8E07084qrkTyGdU1mt99KwBfy');
        setNews(response.data.results);
      } catch (error) {
        setError(error); // Update error state directly
      }
    };

    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news, error }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsProvider };
