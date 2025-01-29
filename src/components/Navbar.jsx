import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => {
        return location.pathname === path
            ? 'text-black font-bold underline decoration-[#008000]'  
            : 'text-black font-medium'; 
    };        

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white p-4 flex items-center justify-between border-b border-[#838383] relative">
            {/* Logo dan Nama Sekolah */}
            <div className="flex items-center space-x-1">
                <img src={logo} alt="Logo" className="h-10" />
                <span
                    className="text-black text-xl font-semibold"
                    style={{ fontFamily: 'Poppins' }}
                >
                    SD NEGERI 010 SEPAKU
                </span>
            </div>

            {/* Menu Toggle Button for Mobile */}
            <button
                className="lg:hidden text-black focus:outline-none"
                onClick={toggleMobileMenu}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Menu */}
            <div 
                className={`lg:flex items-center space-x-6 ${isMobileMenuOpen ? 'flex-col absolute top-full left-0 w-full bg-white p-4 z-10' : 'hidden'} lg:block`}
            >
                <a
                    href="/"
                    className={`hover:underline hover:text-[#008000] ${isActive('/')}`}
                    style={{ fontFamily: 'Inter' }}
                >
                    Beranda
                </a>
                <a
                    href="/tentang-kami"
                    className={`hover:underline hover:text-[#008000] ${isActive('/tentang-kami')}`}
                    style={{ fontFamily: 'Inter' }}
                >
                    Tentang Kami
                </a>
                <a
                    href="/ekstrakurikuler"
                    className={`hover:underline hover:text-[#008000] ${isActive('/ekstrakurikuler')}`}
                    style={{ fontFamily: 'Inter' }}
                >
                    Ekstrakurikuler
                </a>
                <a
                    href="/kegiatan-sekolah"
                    className={`hover:underline hover:text-[#008000] ${isActive('/kegiatan-sekolah')}`}
                    style={{ fontFamily: 'Inter' }}
                >
                    Kegiatan Sekolah
                </a>
                <a
                    href="/capaian-prestasi"
                    className={`hover:underline hover:text-[#008000] ${isActive('/capaian-prestasi')}`}
                    style={{
                        fontFamily: 'Inter',
                        marginRight: '2rem',
                    }}
                >
                    Capaian Prestasi
                </a>
                {/* Menu Kontak */}
                <a
                    href="/kontak"
                    className="bg-[#008000] text-white px-4 py-2 rounded-full hover:bg-[#006600]"
                    style={{ fontFamily: 'Inter' }}
                >
                    Kontak
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
