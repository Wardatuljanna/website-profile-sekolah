import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import prestasi1 from '../assets/prestasi1.png';
import prestasi2 from '../assets/prestasi2.png';
import prestasi3 from '../assets/prestasi3.png';
import prestasi4 from '../assets/prestasi4.png';
import prestasi5 from '../assets/prestasi5.png';

const CapaianPrestasi = () => {
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
            <main className="flex-grow bg-gray-100 p-6">
                <h1 className="text-3xl font-bold text-center mb-6 fade-in" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                    Galeri Capaian Prestasi Di <br /> SD Negeri 010 Sepaku
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {/* Prestasi 1 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden fade-in text-center">
                        <img src={prestasi1} alt="Juara Lomba Bulan Bahasa SDN 010 Sepaku" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                                Juara Lomba Bulan Bahasa SDN 010 Sepaku
                            </h2>
                            <p className="text-gray-600" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>
                                Prestasi membanggakan dalam lomba Bulan Bahasa tingkat SD, meraih juara di kategori lomba berbahasa.
                            </p>
                        </div>
                    </div>

                    {/* Prestasi 2 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden fade-in text-center">
                        <img src={prestasi2} alt="Juara Perjusami SDN 010 Sepaku 2024" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                                Juara Perjusami SDN 010 Sepaku 2024
                            </h2>
                            <p className="text-gray-600" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>
                                Meraih juara pada ajang Perjusami yang diadakan oleh SDN 010 Sepaku pada tahun 2024.
                            </p>
                        </div>
                    </div>

                    {/* Prestasi 3 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden fade-in text-center">
                        <img src={prestasi3} alt="Lomba Menari Desa Sukaraja" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                                Lomba Menari di Desa Sukaraja
                            </h2>
                            <p className="text-gray-600" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>
                                Juara lomba menari dalam rangka memperingati HUT RI ke-79 di Desa Sukaraja, Kecamatan Sepaku.
                            </p>
                        </div>
                    </div>

                    {/* Prestasi 4 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden fade-in text-center">
                        <img src={prestasi4} alt="Juara Lomba Seni Nasional FLS2N" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                                Juara Lomba Seni Nasional FLS2N
                            </h2>
                            <p className="text-gray-600" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>
                                Mengukir prestasi dengan memenangkan Lomba Seni Nasional FLS2N, mewakili sekolah dalam ajang bergengsi.
                            </p>
                        </div>
                    </div>

                    {/* Prestasi 5 */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden fade-in text-center">
                        <img src={prestasi5} alt="Tuan Rumah Lomba Seni Nasional FLS2N" className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins', fontWeight: '700' }}>
                                Tuan Rumah Lomba Seni Nasional FLS2N
                            </h2>
                            <p className="text-gray-600" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>
                                SDN 010 Sepaku berhasil menjadi tuan rumah Lomba Seni Nasional FLS2N, mengundang banyak peserta dan tamu.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-6 fade-in">
                    <p className="text-lg text-black font-semibold" style={{ fontFamily: 'Poppins', fontWeight: '500' }}>
                        "Fokus pada proses, nikmati perjalanan, dan rayakan setiap pencapaian."
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CapaianPrestasi;
