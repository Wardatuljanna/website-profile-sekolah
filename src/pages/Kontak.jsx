import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Kontak = () => {
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
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow bg-[#008000]">
                {/* Header */}
                <div className="text-white py-8 px-4 fade-in">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl font-bold font-poppins">Kontak Kami</h1>
                    </div>
                </div>

                {/* Kontak Cards */}
                <div className="py-12 px-4 fade-in">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Alamat */}
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <FaMapMarkerAlt style={{ color: '#008000' }} className="text-4xl mx-auto mb-4" />
                            <h2 className="text-xl font-semibold font-poppins mb-2">Alamat</h2>
                            <p className="text-gray-700 font-medium font-poppins leading-relaxed">
                                Jl KS Tubun RT 13 Desa Argo Mulyo<br />
                                Kecamatan Sepaku, Kabupaten Penajam Paser Utara,<br />
                                Kalimantan Timur 76147
                            </p>
                        </div>

                        {/* Telepon */}
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <FaPhoneAlt style={{ color: '#008000' }} className="text-4xl mx-auto mb-4" />
                            <h2 className="text-xl font-semibold font-poppins mb-2">Telepon</h2>
                            <p className="text-gray-700 font-medium font-poppins leading-relaxed">
                                +1 (234) 567 890<br />
                                +0 (987) 654 321
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-lg p-6 shadow-md text-center">
                            <FaEnvelope style={{ color: '#008000' }} className="text-4xl mx-auto mb-4" />
                            <h2 className="text-xl font-semibold font-poppins mb-2">Email</h2>
                            <p className="text-gray-700 font-medium font-poppins leading-relaxed">
                                sdn010sepaku@example.com<br />
                                sdn010sepaku@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* Aduan Section */}
                <div className="bg-white py-8 px-4 fade-in">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg font-semibold font-poppins text-black leading-relaxed">
                            Silahkan sampaikan peristiwa/kejadian yang <br /> menurutmu tidak pantas dilakukan di sekolah <br /> pada tautan berikut
                        </p>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLScRIYIp-vh8Kx9Ich3bFk-WZRCEJfCcsv0Xt5K8BDCsYndkyA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ backgroundColor: '#008000' }}
                            className="hover:brightness-90 text-white font-bold font-poppins px-8 py-3 rounded-full shadow-md transition duration-300 inline-block mt-6"
                        >
                            Aduan
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Kontak;
