import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import extra1 from '../assets/extra1.jpg';
import extra2 from '../assets/extra2.jpg';
import extra3 from '../assets/extra3.jpg';
import extra4 from '../assets/extra4.jpg';
import extra5 from '../assets/extra5.jpg';
import extra6 from '../assets/extra6.png';

const Ekstrakurikuler = () => {
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
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto py-10 px-4">
                    <h1 className="text-4xl font-bold text-center text-black mb-8 fade-in">Ekstrakurikuler</h1>
                    <p className="text-lg text-black text-center mb-10 px-4 md:px-10 lg:px-20 fade-in">
                        SDN 010 Sepaku menawarkan berbagai kegiatan ekstrakurikuler untuk membantu siswa menemukan dan mengembangkan minat serta bakat mereka, 
                        sekaligus memperluas wawasan dan membangun karakter unggul. Kami percaya bahwa pengalaman di luar kelas penting bagi perkembangan emosional 
                        dan kepercayaan diri siswa, sehingga partisipasi dalam setidaknya satu kegiatan ekstrakurikuler menjadi bagian tak terpisahkan dari pendidikan 
                        di SDN 010 Sepaku.
                    </p>
                    <p className="text-lg text-black text-center mb-10 fade-in">
                        Berikut kegiatan ekstrakurikuler yang ada di SDN 010 Sepaku:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
                            <img src={extra1} alt="Pramuka" className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-black">1. Pramuka</h2>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
                            <img src={extra2} alt="Seni Tari" className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-black">2. Seni Tari</h2>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
                            <img src={extra3} alt="Volly" className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-black">3. Volly</h2>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
                            <img src={extra4} alt="Sepak Bola" className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-black">4. Sepak Bola</h2>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
                            <img src={extra5} alt="Vokal" className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-black">5. Vokal</h2>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden fade-in">
                            <img src={extra6} alt="Rebana" className="w-full h-56 object-cover" />
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-black">6. Rebana</h2>
                            </div>
                        </div>
                    </div>
                    <p className="text-lg text-black text-center mt-10 italic font-bold fade-in">
                        “Berolahragalah karena Akal yang cerdas terdapat pada Diri yang Sehat”
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Ekstrakurikuler;
