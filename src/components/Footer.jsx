import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white">
            <div className="bg-[#0098C8] p-4">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-1/3 text-left">
                        <h5 className="font-bold">About</h5>
                        <ul className="list-none">
                            <li><a href="/" className="hover:underline">Beranda</a></li>
                            <li><a href="/profil-sekolah" className="hover:underline">Profil Sekolah</a></li>
                            <li><a href="/ekstrakurikuler" className="hover:underline">Ekstrakurikuler</a></li>
                            <li><a href="/kegiatan-sekolah" className="hover:underline">Kegiatan Sekolah</a></li>
                            <li><a href="/kontak" className="hover:underline">Kontak</a></li>
                        </ul>
                    </div>
                    <div className="w-1/3 text-center">
                        <h5 className="font-bold">Alamat</h5>
                        <p>JI KS Tubun RT 13 Desa Argo Mulyo</p>
                        <p>Kecamatan Sepaku, Kabupaten Penajam Paser Utara,</p>
                        <p>Kalimantan Timur 76147</p>
                        <p><a href="mailto:sdk010sepaku@gmail.com" className="hover:underline">sdn010sepaku@gmail.com</a></p>
                    </div>
                    <div className="w-1/3 text-right">
                        <h5 className="font-bold">Album</h5>
                        <ul className="list-none">
                            <li><a href="/kegiatan-sekolah" className="hover:underline">Kegiatan Belajar</a></li>
                            <li><a href="/ekstrakurikuler" className="hover:underline">Ekstrakurikuler</a></li>
                            <li><a href="/" className="hover:underline">History</a></li>
                            <li><a href="/" className="hover:underline">Guru</a></li>
                            <li><a href="/" className="hover:underline">Siswa</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#005F7D] text-white text-left p-4">
                <p>Copyright © 2024 SDN 010 SEPAKU All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;