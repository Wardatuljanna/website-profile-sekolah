import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import galeri1 from '../assets/galeri1.png';
import galeri2 from '../assets/galeri2.png';
import galeri13 from '../assets/galeri13.png';
import galeri4 from '../assets/galeri4.png';
import galeri5 from '../assets/galeri5.png';
import galeri6 from '../assets/galeri6.png';
import galeri7 from '../assets/galeri7.png';
import galeri8 from '../assets/galeri8.png';

const KegiatanSekolah = () => {
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
            <main className="flex-grow bg-[#008000] p-6">
                <h1 className="text-3xl font-bold text-center mb-6 fade-in text-white" style={{ fontFamily: 'Poppins' }}>
                    Foto Dokumentasi Kegiatan <br /> SD Negeri 010 Sepaku
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 fade-in mt-10">
                    {/* Galeri 1 */}
                    <div className="relative w-full h-auto">
                        <img src={galeri1} alt="Meja Karya" className="w-full h-full object-cover rounded-md" />
                        <div className="absolute bottom-0 left-0 w-full bg-white/60 p-4 rounded-b-md">
                            <h3 className="font-poppins font-bold text-black text-lg">MPLS Siswa SDN 010 Sepaku</h3>
                            <p className="font-poppins font-medium text-black text-sm mt-1">SD Negeri 010 Sepaku</p>
                        </div>
                    </div>

                    {/* Galeri 2 */}
                    <div className="relative w-full h-auto">
                        <img src={galeri2} alt="Reuni Akbar Alumni" className="w-full h-full object-cover rounded-md" />
                        <div className="absolute bottom-0 left-0 w-full bg-white/60 p-4 rounded-b-md">
                            <h3 className="font-poppins font-bold text-black text-lg">Belajar Seni Karya</h3>
                            <p className="font-poppins font-medium text-black text-sm mt-1">SD Negeri 010 Sepaku</p>
                        </div>
                    </div>

                    {/* Galeri 3 */}
                    <div className="relative w-full h-auto">
                        <img src={galeri13} alt="Perpustakaan Baru" className="w-full h-full object-cover rounded-md" />
                        <div className="absolute bottom-0 left-0 w-full bg-white/60 p-4 rounded-b-md">
                            <h3 className="font-poppins font-bold text-black text-lg">Kerja Bakti Sosial</h3>
                            <p className="font-poppins font-medium text-black text-sm mt-1">SD Negeri 010 Sepaku</p>
                        </div>
                    </div>

                    {/* Galeri 4 */}
                    <div className="relative w-full h-auto">
                        <img src={galeri4} alt="Perkemahan Sekolah" className="w-full h-full object-cover rounded-md" />
                        <div className="absolute bottom-0 left-0 w-full bg-white/60 p-4 rounded-b-md">
                            <h3 className="font-poppins font-bold text-black text-lg">Perjusami SDN 010 Sepaku</h3>
                            <p className="font-poppins font-medium text-black text-sm mt-1">Desa Sukomulyo Sepaku</p>
                        </div>
                    </div>

                    {/* Galeri 5 */}
                    <div className="relative w-full h-auto">
                        <img src={galeri5} alt="Meja Karya" className="w-full h-full object-cover rounded-md" />
                        <div className="absolute bottom-0 left-0 w-full bg-white/60 p-4 rounded-b-md">
                            <h3 className="font-poppins font-bold text-black text-lg">Nobar acara puncak hari anak nasional ke 40</h3>
                            <p className="font-poppins font-medium text-black text-sm mt-1">SD Negeri 010 Sepaku</p>
                        </div>
                    </div>

                    {/* Galeri 6 */}
                    <div className="relative w-full h-auto">
                        <img src={galeri6} alt="Reuni Akbar Alumni" className="w-full h-full object-cover rounded-md" />
                        <div className="absolute bottom-0 left-0 w-full bg-white/60 p-4 rounded-b-md">
                            <h3 className="font-poppins font-bold text-black text-lg">Peringatan Maulid Nabi Muhammad SAW</h3>
                            <p className="font-poppins font-medium text-black text-sm mt-1">Halaman SD Negeri 010 Sepaku</p>
                        </div>
                    </div>

                    {/* Galeri 7 */}
                    <div className="relative w-full h-auto">
                        <img src={galeri7} alt="Perpustakaan Baru" className="w-full h-full object-cover rounded-md" />
                        <div className="absolute bottom-0 left-0 w-full bg-white/60 p-4 rounded-b-md">
                            <h3 className="font-poppins font-bold text-black text-lg">Kegiatan Ekskul Pramuka</h3>
                            <p className="font-poppins font-medium text-black text-sm mt-1">Lapangan SD Negeri 010 Sepaku</p>
                        </div>
                    </div>

                    {/* Galeri 8 */}
                    <div className="relative w-full h-auto">
                        <img src={galeri8} alt="Perkemahan Sekolah" className="w-full h-full object-cover rounded-md" />
                        <div className="absolute bottom-0 left-0 w-full bg-white/60 p-4 rounded-b-md">
                            <h3 className="font-poppins font-bold text-black text-lg">Senam Jumat Sehat</h3>
                            <p className="font-poppins font-medium text-black text-sm mt-1">Lapangan SD Negeri 010 Sepaku</p>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-6 fade-in">
                    <p className="text-lg font-medium text-white" style={{ fontFamily: 'Poppins' }}>
                        Sekolah adalah tempat mencetak penerus bangsa yang <br /> berkualitas dan berprestasi di segala bidang yang dapat <br /> bersaing di dunia internasional dan sekolah adalah tempat <br /> anak-anak mendapatkan dukungan untuk melengkapi <br /> pembelajarannya di sekolah.
                    </p>
                </div>
                <div className="text-center mt-4 fade-in">
                    <p className="text-lg font-medium text-white" style={{ fontFamily: 'Poppins' }}>
                        "Belajar, berkarya, dan berprestasi adalah langkah kecil menuju masa depan yang besar."
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default KegiatanSekolah;
