import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import Search from './Search';
import { ToastContainer } from 'react-toastify'; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'text-[#FBFF00]' : '';
    };

    return (
        <nav>
            <div className="bg-[#005F7D] p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10" />
                    <span className="text-white text-xl font-bold ml-2">SDN 010 SEPAKU</span>
                </div>
                <Search /> 
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`bg-[#0098C8] ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
                <ul className="flex flex-col lg:flex-row lg:space-x-4 text-white p-4 lg:p-4 lg:justify-start">
                    <li><a href="/" className={`hover:text-[#FBFF00] ${isActive('/')}`}>Beranda</a></li>
                    <li><a href="/profil-sekolah" className={`hover:text-[#FBFF00] ${isActive('/profil-sekolah')}`}>Profil Sekolah</a></li>
                    <li><a href="/ekstrakurikuler" className={`hover:text-[#FBFF00] ${isActive('/ekstrakurikuler')}`}>Ekstrakurikuler</a></li>
                    <li><a href="/kegiatan-sekolah" className={`hover:text-[#FBFF00] ${isActive('/kegiatan-sekolah')}`}>Kegiatan Sekolah</a></li>
                    <li><a href="/kontak" className={`hover:text-[#FBFF00] ${isActive('/kontak')}`}>Kontak</a></li>
                </ul>
            </div>
            <ToastContainer /> 
        </nav>
    );
};

export default Navbar;
