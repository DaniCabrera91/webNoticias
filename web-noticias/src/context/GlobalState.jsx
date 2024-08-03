import React, { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
  news: [],
  error: null,
  localNews: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
      return { ...state, news: action.payload }
    case 'FETCH_NEWS_ERROR':
      return { ...state, error: action.payload }
    case 'ADD_LOCAL_NEWS':
      const updatedNews = [...state.localNews, action.payload]
      return { ...state, localNews: updatedNews }
    default:
      return state
  }
}

const GlobalState = createContext(initialState)

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY
        const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`)
        dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: response.data.results })
      } catch (error) {
        dispatch({ type: 'FETCH_NEWS_ERROR', payload: error.message })
      }
    }

    const fetchLocalNews = () => {
      const storedNews = localStorage.getItem('news') ? JSON.parse(localStorage.getItem('news')) : []
      dispatch({ type: 'ADD_LOCAL_NEWS', payload: storedNews })
    }

    fetchNews()
    fetchLocalNews()
  }, [])

  return (
    <GlobalState.Provider value={{ ...state, addNews: (data) => dispatch({ type: 'ADD_LOCAL_NEWS', payload: data }) }}>
      {children}
    </GlobalState.Provider>
  )
}

export { GlobalState, GlobalProvider }
