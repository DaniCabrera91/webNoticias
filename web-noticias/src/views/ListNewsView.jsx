import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../context/GlobalState';

function ListNewsView() {
  const { news, error, addNews } = useContext(GlobalState);

  console.log('news:', news);
  console.log('error:', error);

  const [localNews, setLocalNews] = useState([]);
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedNews = localStorage.getItem('news') ? JSON.parse(localStorage.getItem('news')) : [];
    setLocalNews(storedNews);
    setAllNews([...news, ...storedNews]);
    setIsLoading(false);
  }, [news]);

  if (isLoading) {
    return <div className="loading">Loading news...</div>;
  }

  if (error) {
    return <div className="error">Error loading news: {error}</div>;
  }

  return (
    <div className="list-news">
      <h2 className="list-news__title">News List</h2>
      <ul className="list-news__list">
        {allNews.map((article) => (
          <li key={article.id} className="list-news__item">
            <h3 className="list-news__item-title">{article.title}</h3>
            <p className="list-news__item-abstract">{article.abstract}</p>
            <p className="list-news__item-byline">{article.byline}</p>
            <p className="list-news__item-date">{article.published_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListNewsView;
