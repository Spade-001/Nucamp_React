import './App.css';
import logo from './logo.svg';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import { useDispatch } from 'react-redux';
import Header from './components/Header.js';
import ContactPage from './pages/ContactPage';
import { Routes, Route } from 'react-router-dom';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchComments } from './features/comments/commentsSlice';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCampsites());
      dispatch(fetchPartners());
      dispatch(fetchPromotions());
      dispatch(fetchComments());
    }, [dispatch]);

  return (
    <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<CampsitesDirectoryPage />} />
          <Route 
            path='directory/:campsiteId'
            element={<CampsiteDetailPage />}
          />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
