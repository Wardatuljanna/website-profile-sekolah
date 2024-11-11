import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import profilImage from '../assets/profil.jpeg';
import mapImage from '../assets/peta.png'; 

const ProfilSekolah = () => {
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
            <div className="text-center fade-in">
                <h1 className="text-4xl font-bold mt-5">SDN 010 SEPAKU</h1>
                <div className="mt-8 px-4 fade-in">
                    <div className="overflow-hidden rounded-[20px] border-4 border-[#0098C8] shadow" style={{ maxHeight: '400px' }}>
                        <img 
                            src={profilImage} 
                            alt="Profil Sekolah" 
                            className="w-full h-auto object-cover"
                            style={{ maxHeight: '400px' }} 
                        />
                    </div>
                    <h2 className="mt-8 text-2xl font-bold fade-in">SEJARAH SINGKAT</h2>
                    <p className="mt-5 text-lg text-center max-w-4xl mx-auto fade-in">
                        SD NEGERI 010 SEPAKU merupakan salah satu sekolah jenjang SD berstatus Negeri yang berada di wilayah Kec. Sepaku, Kab. Penajam Paser Utara, Kalimantan Timur. SD NEGERI 010 SEPAKU didirikan pada tanggal 1 Januari 1983 dengan Nomor SK Pendirian yang berada dalam naungan Kementerian Pendidikan dan Kebudayaan. Dalam kegiatan pembelajaran, sekolah yang memiliki 174 siswa ini dibimbing oleh guru-guru yang profesional di bidangnya. Kepala Sekolah SD NEGERI 010 SEPAKU saat ini adalah Uul Indayah. Operator yang bertanggung jawab adalah Widayanti. Dengan adanya keberadaan SD NEGERI 010 SEPAKU, diharapkan dapat memberikan kontribusi dalam mencerdaskan anak bangsa di wilayah Kec. Sepaku, Kab. Penajam Paser Utara.
                    </p>
                </div>
                <hr className="my-10 border-[#000000] border-t-2 w-3/4 mx-auto fade-in" />
                <h2 className="text-2xl font-bold mb-5 fade-in">Informasi Tentang SD NEGERI 010 SEPAKU</h2>
                <div className="overflow-x-auto mb-10 fade-in">
                    <table className="mx-auto w-full max-w-4xl border-collapse">
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
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                    <td className="px-4 py-2 font-bold border border-gray-300 text-left">{row[0]}:</td>
                                    <td className="px-4 py-2 border border-gray-300 text-left">{row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-[#005F7D] text-white py-10 px-5 mt-10 fade-in">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start fade-in">
                    <a href="https://maps.app.goo.gl/mLpZgchBGLeKQfzB9" target="_blank" rel="noopener noreferrer" className="md:w-1/2 fade-in">
                        <img 
                            src={mapImage} 
                            alt="Peta Lokasi" 
                            className="w-full h-auto rounded-[20px] shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        />
                    </a>
                    <div className="mt-5 md:mt-2 md:ml-20 md:w-1/2 fade-in">
                        <h2 className="text-2xl font-bold mb-5">Lokasi Sekolah</h2>
                        <div className="mt-6">
                            <h3 className="font-bold text-lg">Alamat</h3>
                            <p>JI KS Tubun RT 13 Desa Argo Mulyo</p>
                            <p>Kecamatan Sepaku, Kabupaten Penajam</p>
                            <p>Paser Utara, Kalimantan Timur 76147</p>
                            <h3 className="font-bold text-lg mt-3">Jam Kerja</h3>
                            <p>Senin - Jumat: 07.30 - 16.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProfilSekolah;
