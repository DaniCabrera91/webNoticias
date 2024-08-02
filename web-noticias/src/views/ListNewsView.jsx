import React, { useContext, useEffect, useState } from 'react'
import { NewsContext } from '../context/NewsContext'


function ListNewsView() {
  const { news: apiNews } = useContext(NewsContext)
  const [localNews, setLocalNews] = useState([])
  const [allNews, setAllNews] = useState([])

  useEffect(() => {
    const storedNews = localStorage.getItem('news') ? JSON.parse(localStorage.getItem('news')) : [];
    setLocalNews(storedNews);
  }, [])

  useEffect(() => {
    setAllNews([...apiNews, ...localNews]);
  }, [apiNews, localNews])

  return (
    <div>
      <h2>Todas las Noticias</h2>
      <ul>
        {allNews.map((article) => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
            <p>{article.byline}</p>
            <p>{article.published_date}</p>          
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListNewsView
