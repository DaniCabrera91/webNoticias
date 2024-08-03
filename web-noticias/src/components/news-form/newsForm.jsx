import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NewsForm({ addNews }) {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    byline: '',
    published_date: new Date().toISOString().slice(0, 10),
    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.title || !formData.abstract || !formData.byline) {
      alert('Por favor, completa todos los campos obligatorios.')
      return
    }

    const updatedByline = `By ${formData.byline}`
    const updatedFormData = { ...formData, byline: updatedByline }

    const storedNews = JSON.parse(localStorage.getItem('news')) || []
    storedNews.push(updatedFormData)
    localStorage.setItem('news', JSON.stringify(storedNews))

    if (addNews) {
      addNews(updatedFormData)
    }

    setTimeout(() => {
      navigate('/news')
    }, 1000)
  }

  return (
    <div className="news-form">
      <h2 className="news-form__title">Crear Noticia</h2>
      <form className="news-form__form" onSubmit={handleSubmit}>
        <label className="news-form__label">
          Título: <span className="news-form__required">*</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="news-form__input"
          />
        </label>
        <label className="news-form__label">
          Resumen: <span className="news-form__required">*</span>
          <input
            type="text"
            name="abstract"
            value={formData.abstract}
            onChange={handleChange}
            required
            className="news-form__input"
          />
        </label>
        <label className="news-form__label">
          Autor: <span className="news-form__required">*</span>
          <input
            type="text"
            name="byline"
            value={formData.byline}
            onChange={handleChange}
            required
            className="news-form__input"
          />
        </label>
        <label className="news-form__label">
          Fecha de Publicación:
          <input
            type="date"
            name="published_date"
            value={formData.published_date}
            onChange={handleChange}
            className="news-form__input"
          />
        </label>
        <button type="submit" className="news-form__button">Publicar Noticia</button>
      </form>
      <p className="news-form__info">* Campos obligatorios</p>
    </div>
  )
}

export default NewsForm
