import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import galeriImage from '../assets/galeri.jpg';
import bannerImage from '../assets/banner.jpg';

const Beranda = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="relative fade-in">
                <img src={bannerImage} alt="Banner" className="w-full h-[80vh] object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-[#0098C8] h-16 flex items-center justify-center">
                    <h2 className="text-white text-xl font-bold">Generasi Masa Depan yang Unggul dan Berdaya Saing Tinggi</h2>
                </div>
            </div>
            <div className="text-center py-10 fade-in">
                <h1 className="text-4xl font-bold mt-5">Selamat Datang Di SDN 010 Sepaku</h1>
                <p className="mt-2 text-lg max-w-2xl mx-auto">
                    SD Negeri 010 Sepaku, berdiri sejak 1983 di Kecamatan Sepaku, Kabupaten Penajam Paser Utara,
                    Kalimantan Timur, dengan akreditasi B. Mengusung Kurikulum 2013, kami berkomitmen menyediakan pendidikan berkualitas bagi generasi penerus.
                </p>
            </div>
            <h2 className="text-center text-3xl font-bold mt-10 fade-in">Galeri Foto</h2>
            <div className="grid grid-cols-3 gap-4 p-4 fade-in">
                {[...Array(6)].map((_, index) => (
                    <img 
                        src={galeriImage} 
                        alt={`Galeri ${index + 1}`} 
                        key={index} 
                        className="w-full h-auto rounded-lg shadow" 
                        style={{ borderRadius: '15px', transition: 'transform 0.5s', cursor: 'pointer' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                ))}
            </div>
            <div className="text-center py-10 fade-in">
                <div className="bg-[#005F7D] py-2">
                    <h2 className="text-2xl text-white font-bold">VISI MISI</h2>
                </div>
                <div className="mt-4 flex flex-col lg:flex-row justify-between items-start space-y-4 lg:space-y-0 lg:space-x-8 px-10">
                    <div className="lg:w-1/2 fade-in">
                        <h3 className="text-xl font-bold">Visi Sekolah</h3>
                        <p>Menciptakan Sekolah yang Berkarakter Imtaq, Iptek dan Berperan Aktif dalam Melestarikan Lingkungan Hidup.</p>
                    </div>
                    <div className="lg:w-1/2 fade-in">
                        <h3 className="text-xl font-bold">Misi Sekolah</h3>
                        <ol className="list-decimal list-inside text-left">
                            <li>Membiasakan warga sekolah melaksanakan ibadah sesuai dengan agama dan keyakinan masing-masing.</li>
                            <li>Menyiapkan generasi yang sesuai dengan perkembangan iptek dan imtaq.</li>
                            <li>Memanfaatkan perkembangan teknologi dan informasi.</li>
                            <li>Menanamkan sikap kepedulian terhadap lingkungan kepada siswa melalui penerapan wawasan adiwiyata.</li>
                            <li>Menumbuhkan budaya warga sekolah dalam upaya pelestarian lingkungan.</li>
                        </ol>
                    </div>
                </div>
                <p className="mt-10 italic text-lg font-bold fade-in">“JIWA PEMIMPIN TUMBUH DARI LINGKUNGAN DAN PERKEMBANGAN INTERAKSI SOSIAL”</p>
            </div>
            <Footer />
        </div>
    );
};

export default Beranda;
