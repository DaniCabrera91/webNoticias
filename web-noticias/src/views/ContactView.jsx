import React, { useContext } from 'react';
import NewsForm from '../components/news-form/newsForm';
import { GlobalState } from '../context/GlobalState';

function ContactView() {
  const { addNews } = useContext(GlobalState);

  return (
    <div className="contact-view">
      <h1 className="contact-view__title">Publish with us!</h1>
      <NewsForm addNews={addNews} />
    </div>
  );
}

export default ContactView;
