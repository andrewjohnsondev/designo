import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import { theme } from './components/styles/Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/App/Header';
import HomePage from './components/App/HomePage';
import Footer from './components/App/Footer/Footer';
import WebDesignPage from './components/App/WebDesignPage';
import AppDesignPage from './components/App/AppDesignPage';
import GraphicDesignPage from './components/App/GraphicDesignPage';
import AboutPage from './components/App/AboutPage.js';
import ContactPage from './components/App/ContactPage';
import LocationsPage from './components/App/LocationsPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuChange = (value) => {
    if (!value) {
      setIsMenuOpen(!isMenuOpen);
      return;
    }

    setIsMenuOpen(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles isMenuOpen={isMenuOpen} />
      <>
        <BrowserRouter>
          <Header isMenuOpen={isMenuOpen} onMenuChange={onMenuChange} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/web-design" element={<WebDesignPage />} />
            <Route path="/app-design" element={<AppDesignPage />} />
            <Route path="/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}
export default App;
