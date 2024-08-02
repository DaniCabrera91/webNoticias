import React, { useContext } from 'react';
import NewsForm from '../components/news-form/newsForm';
import { NewsContext } from '../context/NewsContext'; 

function ContactView() {
  const { addNews } = useContext(NewsContext); // Get addNews from context

  return (
    <div>  
      <h1>Formulario de Publicación de Noticias</h1>
      <NewsForm addNews={addNews} />  {/* Pass addNews as a prop */}
    </div>
  );
}

export default ContactView;
