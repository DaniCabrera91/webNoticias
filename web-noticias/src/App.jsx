import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TheHeader from './components/header/TheHeader';
import TheFooter from './components/footer/TheFooter';
import Home from './views/HomeView';
import Contact from './views/ContactView';
import News from './views/ListNewsView';
import { NewsProvider } from './context/NewsContext';

function App() {
  return (
    <NewsProvider>
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Contact />} /> 
          <Route path="/news" element={<News />} />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </NewsProvider>
  );
}

export default App;



