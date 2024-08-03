import React, { useContext, useEffect, useState } from 'react';
import { GlobalState } from '../context/GlobalState';

function HomeView() {
  const { news } = useContext(GlobalState);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const sortedNews = news.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
    setLatestNews(sortedNews.slice(0, 5));
  }, [news]);

  return (
    <div className="homeview">
      <h2 className="homeview__subtitle">Últimas Noticias</h2>
      {latestNews.length > 0 ? (
        <ul className="homeview__list">
          {latestNews.map((article) => (
            <li key={article.id} className="homeview__item">
              <h3 className="homeview__item-title">{article.title}</h3>
              <p className="homeview__item-abstract">{article.abstract}</p>
              <p className="homeview__item-date">
                <em>Publicado el: {new Date(article.published_date).toLocaleDateString()}</em>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="homeview__no-news">No hay noticias disponibles.</p>
      )}
    </div>
  );
}

export default HomeView;
