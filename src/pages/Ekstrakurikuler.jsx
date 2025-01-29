import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import extra1 from '../assets/extra1.png';
import extra2 from '../assets/extra2.png';
import extra3 from '../assets/extra3.png';
import extra4 from '../assets/extra4.png';
import extra5 from '../assets/extra5.png';
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
            <div className="bg-[#EFFFF0] min-h-screen">
                <div className="container mx-auto py-10 px-4">
                    <h1 className="text-3xl font-bold text-center text-black mb-6 fade-in" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Ekstrakurikuler di SD Negeri <br /> 010 Sepaku
                    </h1>
                    <p className="text-lg text-[#575757] text-center mb-10 px-4 md:px-10 lg:px-20 fade-in" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                        Berikut kegiatan ekstrakurikuler yang ada di SD Negeri 010 Sepaku:
                    </p>
                    {/* Kegiatan Ekstrakurikuler */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in mb-12">
                        {/* Card Ekstrakurikuler */}
                        <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
                            <img src={extra1} alt="Praja Muda Karana" className="w-16 h-16 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-center text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Praja Muda Karana
                            </h2>
                            <p className="text-center text-[#999999] mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                                Pertama kali dibentuk team tahun 2016
                            </p>
                        </div>

                        <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
                            <img src={extra2} alt="Palang Merah Remaja" className="w-16 h-16 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-center text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Palang Merah Remaja
                            </h2>
                            <p className="text-center text-[#999999] mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                                Pertama kali dibentuk team tahun 2024
                            </p>
                        </div>

                        <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
                            <img src={extra3} alt="Seni Tari" className="w-16 h-16 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-center text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Seni Tari
                            </h2>
                            <p className="text-center text-[#999999] mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                                Pertama kali dibentuk team tahun 2019
                            </p>
                        </div>

                        <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
                            <img src={extra4} alt="Seni Vocal" className="w-16 h-16 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-center text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Seni Vocal
                            </h2>
                            <p className="text-center text-[#999999] mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                                Pertama kali dibentuk team tahun 2022
                            </p>
                        </div>

                        <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
                            <img src={extra5} alt="Volly" className="w-16 h-16 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-center text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Volly
                            </h2>
                            <p className="text-center text-[#999999] mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                                Pertama kali dibentuk team tahun 2022
                            </p>
                        </div>

                        <div className="relative max-w-sm mx-auto bg-white rounded-xl shadow-lg p-6">
                            <img src={extra6} alt="Sepak Bola" className="w-16 h-16 mx-auto mb-4" />
                            <h2 className="text-xl font-bold text-center text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Sepak Bola
                            </h2>
                            <p className="text-center text-[#999999] mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                                Pertama kali dibentuk team tahun 2022
                            </p>
                        </div>
                    </div>

                    <p className="text-lg text-[#747474] text-center mb-10 px-4 md:px-10 lg:px-20 fade-in" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                        SDN 010 Sepaku menawarkan berbagai kegiatan ekstrakurikuler untuk <br /> membantu siswa menemukan dan mengembangkan minat serta bakat <br /> mereka, sekaligus memperluas wawasan dan membangun karakter unggul. <br /> Kami percaya bahwa pengalaman di luar kelas penting bagi perkembangan <br /> emosional dan kepercayaan diri siswa, sehingga partisipasi dalam setidaknya <br /> satu kegiatan ekstrakurikuler menjadi bagian tak terpisahkan dari pendidikan di <br /> SDN 010 Sepaku.
                    </p>
                    <p className="text-lg text-black text-center mt-10 fade-in" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}>
                        “Berolahragalah karena Akal yang cerdas terdapat pada Diri yang Sehat”
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Ekstrakurikuler;
