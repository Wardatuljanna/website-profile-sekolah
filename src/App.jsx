import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import TentangKami from './pages/TentangKami';
import Ekstrakurikuler from './pages/Ekstrakurikuler';
import KegiatanSekolah from './pages/KegiatanSekolah'; 
import CapaianPrestasi from './pages/CapaianPrestasi';
import Kontak from './pages/Kontak';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Beranda />} />
                    <Route path="/tentang-kami" element={<TentangKami />} />
                    <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
                    <Route path="/kegiatan-sekolah" element={<KegiatanSekolah />} /> 
                    <Route path="/capaian-prestasi" element={<CapaianPrestasi />} />
                    <Route path="/kontak" element={<Kontak />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;