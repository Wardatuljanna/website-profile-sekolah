import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profilImage from '../assets/banner.png';
import mapImage from '../assets/peta.png';

const TentangKami = () => {
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
        <div className="min-h-screen bg-[#EFFFF0]">
            <Navbar />
            
            {/* Banner Section */}
            <div className="relative fade-in">
                <img src={profilImage} alt="Banner" className="w-full h-[90vh] object-cover rounded-lg shadow-xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/60 p-4">
                    <h1 className="font-bold text-5xl md:text-6xl leading-tight" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
                    SD Negeri 10 Sepaku
                    </h1>
                </div>
            </div>

            {/* Sejarah Singkat Section */}
            <div className="bg-[#EFFFF0] py-10 fade-in">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-2xl font-bold text-center" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
                        Sejarah Singkat SD Negeri 010 Sepaku
                    </h2>
                    <p className="mt-5 text-lg text-center" style={{ fontFamily: 'Poppins', fontWeight: 500, color: '#575757' }}>
                        SD NEGERI 010 SEPAKU merupakan salah satu sekolah jenjang SD berstatus Negeri yang <br /> berada di wilayah Kec. Sepaku, Kab. Penajam Paser Utara, Kalimantan Timur. SD <br /> NEGERI 010 SEPAKU didirikan pada tanggal 1 Januari 1983 dengan Nomor SK Pendirian <br /> yang berada dalam naungan Kementerian Pendidikan dan Kebudayaan. Dalam <br /> kegiatan pembelajaran, sekolah yang memiliki 174 siswa ini dibimbing oleh guru-guru <br /> yang profesional di bidangnya. Kepala Sekolah SD NEGERI 010 SEPAKU saat ini adalah <br /> Uul Indayah. Operator yang bertanggung jawab adalah Widayanti. Dengan adanya <br /> keberadaan SD NEGERI 010 SEPAKU, diharapkan dapat memberikan kontribusi dalam <br /> mencerdaskan anak bangsa di wilayah Kec. Sepaku, Kab. Penajam Paser Utara.
                    </p>
                </div>
            </div>

            {/* Pembatas */}
            <div className="text-center py-5">
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '24px' }}>.....</h3>
            </div>

            {/* Informasi Tentang SD Negeri 010 Sepaku Section */}
            <div className="bg-[#EFFFF0] py-10 fade-in">
                <div className="max-w-6xl mx-auto px-5">
                    <h2 className="text-2xl font-bold text-center mb-5" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
                        Informasi Tentang SD <br /> Negeri 010 Sepaku
                    </h2>
                    <div className="w-full max-w-4xl mx-auto p-5 bg-white rounded-lg shadow-lg">
                        <table className="w-full">
                            <tbody>
                                {[
                                    ['NPSN', '30401988'],
                                    ['Nama Sekolah', 'SD NEGERI 010 SEPAKU'],
                                    ['Naungan', 'Kementerian Pendidikan dan Kebudayaan'],
                                    ['Tanggal Berdiri', '1 Januari 1983'],
                                    ['Tanggal Operasional', '18 April 2016'],
                                    ['No. SK Operasional', '420/211/Disdikpora/IV/2016'],
                                    ['Jenjang', 'Pendidikan SD'],
                                    ['Status', 'Sekolah Negeri'],
                                    ['Akreditasi', 'B'],
                                    ['Tanggal Akreditasi', '18 Oktober 2021'],
                                    ['No. SK Akreditasi', '999/BAN-SM/SK/2021']
                                ].map((row, index) => (
                                    <tr key={index}>
                                        <td className="px-4 py-2 font-semibold" style={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                                            {row[0]}:
                                        </td>
                                        <td className="px-4 py-2" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>
                                            {row[1]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Lokasi Sekolah Section */}
            <div className="bg-[#008000] text-white py-10 px-5 mt-10 fade-in">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start fade-in">
                    <a href="https://maps.app.goo.gl/mLpZgchBGLeKQfzB9" target="_blank" rel="noopener noreferrer" className="md:w-1/2 fade-in">
                        <img
                            src={mapImage}
                            alt="Peta Lokasi"
                            className="w-full h-auto rounded-[20px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        />
                    </a>
                    <div className="mt-5 md:mt-2 md:ml-20 md:w-1/2 fade-in">
                        <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: 'Poppins', fontWeight: 700 }}>
                            Lokasi Sekolah
                        </h2>
                        <div className="mt-6">
                            <h3 className="font-semibold text-lg" style={{ fontFamily: 'Poppins', fontWeight: 600 }}>Alamat</h3>
                            <p style={{ fontFamily: 'Poppins', fontWeight: 400 }}>JI KS Tubun RT 13 Desa Argo Mulyo</p>
                            <p style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Kecamatan Sepaku, Kabupaten Penajam</p>
                            <p style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Paser Utara, Kalimantan Timur 76147</p>
                            <h3 className="font-semibold text-lg mt-3" style={{ fontFamily: 'Poppins', fontWeight: 600 }}>Jam Kerja</h3>
                            <p style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Senin - Jumat: 07.30 - 16.00</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default TentangKami;
