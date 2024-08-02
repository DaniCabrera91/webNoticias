import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewsForm({ addNews }) {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    byline: '',
    published_date: new Date().toISOString().slice(0, 10),
    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación básica para campos requeridos
    if (!formData.title || !formData.abstract || !formData.byline) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const updatedByline = `By ${formData.byline}`;
    const updatedFormData = { ...formData, byline: updatedByline };

    const storedNews = JSON.parse(localStorage.getItem('news')) || [];
    storedNews.push(updatedFormData);
    localStorage.setItem('news', JSON.stringify(storedNews));

    if (addNews) {
      addNews(updatedFormData); // Pasa los datos con el byline actualizado
    }

    setTimeout(() => {
      navigate('/news')
    }, 1000)
 
  }

  return (
    <div>
      <h2>Crear Noticia</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título: <span style={{ color: 'red' }}>*</span>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Resumen: <span style={{ color: 'red' }}>*</span>
          <input type="text" name="abstract" value={formData.abstract} onChange={handleChange} required />
        </label>
        <label>
          Autor: <span style={{ color: 'red' }}>*</span>
          <input type="text" name="byline" value={formData.byline} onChange={handleChange} required />
        </label>
        <label>
          Fecha de Publicación:
          <input type="date" name="published_date" value={formData.published_date} onChange={handleChange} />
        </label>
        <button type="submit">Publicar Noticia</button>
      </form>
      <p>* Campos obligatorios</p>
    </div>
  );
}

export default NewsForm;
