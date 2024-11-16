import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import ProfilSekolah from './pages/ProfilSekolah'; 
import Ekstrakurikuler from './pages/Ekstrakurikuler';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Beranda />} />
                    <Route path="/profil-sekolah" element={<ProfilSekolah />} /> 
                    <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} /> 
                </Routes>
            </div>
        </Router>
    );
};

export default App;
