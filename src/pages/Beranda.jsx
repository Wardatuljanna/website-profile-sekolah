import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import galeri1 from '../assets/galeri1.png';
import galeri2 from '../assets/galeri2.png';
import galeri3 from '../assets/galeri3.png';
import galeri4 from '../assets/galeri4.png';
import galeri5 from '../assets/galeri5.png';
import galeri6 from '../assets/galeri6.png';
import galeri7 from '../assets/galeri7.png';
import galeri8 from '../assets/galeri8.png';
import galeri9 from '../assets/galeri9.png';
import galeri10 from '../assets/galeri10.png';
import galeri11 from '../assets/galeri11.png';
import galeri12 from '../assets/galeri12.png';
import bannerImage from '../assets/banner.png';
import visiImage from '../assets/visi.png';
import misiImage from '../assets/misi.png';

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
        <img 
          src={bannerImage} 
          alt="Banner" 
          className="w-full h-[90vh] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/60 p-4 overflow-hidden">
          <h1 className="font-bold text-5xl md:text-6xl leading-tight" style={{ fontFamily: 'Poppins' }}>
            Selamat Datang di SD <br /> Negeri 010 Sepaku
          </h1>
        </div>
      </div>

      <div className="text-center py-10 fade-in font-poppins">
        <h1 className="text-4xl font-bold mt-5">
          Kenapa Harus SD Negeri <br /> 010 Sepaku?
        </h1>
        <p className="mt-8 text-lg max-w-2xl mx-auto text-[#575757]">
          SD Negeri 010 Sepaku adalah sekolah yang berdiri sejak tahun 1983 di Kecamatan Sepaku, Kabupaten Penajam Paser Utara, Kalimantan Timur, dengan akreditasi B.
          Mengusung Kurikulum 2013, kami berkomitmen untuk menyediakan pendidikan berkualitas bagi generasi penerus.
        </p>
      </div>

      {/* Galeri Section */}
      <div className="bg-[#008000] py-10 pb-16">
        <h2 className="text-center text-3xl fade-in font-poppins font-bold text-white py-6">
          Galeri SD Negeri 010 Sepaku
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 fade-in mt-10">
          {/* Galeri 1 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri1} 
              alt="Meja Karya" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 2 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri2} 
              alt="Reuni Akbar Alumni" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 3 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri3} 
              alt="Perpustakaan Baru" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 4 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri4} 
              alt="Perkemahan Sekolah" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 5 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri5} 
              alt="Meja Karya" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 6 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri6} 
              alt="Reuni Akbar Alumni" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 7 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri7} 
              alt="Perpustakaan Baru" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 8 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri8} 
              alt="Perkemahan Sekolah" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 9 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri9} 
              alt="Meja Karya" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 10 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri10} 
              alt="Reuni Akbar Alumni" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 11 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri11} 
              alt="Perpustakaan Baru" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>

          {/* Galeri 12 */}
          <div className="relative w-full h-auto">
            <img 
              src={galeri12} 
              alt="Perkemahan Sekolah" 
              className="w-full object-cover rounded-md max-h-64" 
            />
          </div>
        </div>
      </div>

      {/* VISI dan MISI Section */}
      <div className="py-10 px-4 lg:px-16 fade-in">
        <h2 className="text-center text-3xl font-bold font-poppins mb-2">
          <span className="text-black">VISI</span>{' '}
          <span className="text-[#008000]">MISI</span>
        </h2>
        <p className="text-center text-lg max-w-2xl mx-auto text-[#949494] font-poppins font-medium mb-8">
          Visi dan Misi di SD Negeri 010 Sepaku.
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="flex-1 space-y-6">
            {/* VISI */}
            <div className="bg-white shadow-lg rounded-md p-6">
              <h3 className="text-xl font-poppins font-bold mb-4">VISI</h3>
              <p className="font-poppins font-medium">
                Menciptakan Sekolah yang Berkarakter Imtaq, Iptek dan Berperan Aktif dalam Melestarikan Lingkungan Hidup.
              </p>
            </div>
            {/* MISI */}
            <div className="bg-white shadow-lg rounded-md p-6">
              <h3 className="text-xl font-poppins font-bold mb-4">MISI</h3>
              <ol className="list-decimal list-inside font-poppins font-medium space-y-2">
                <li>Membiasakan warga sekolah melaksanakan ibadah sesuai dengan agama dan keyakinan masing-masing.</li>
                <li>Menyiapkan generasi yang sesuai dengan perkembangan iptek dan imtaq.</li>
                <li>Memanfaatkan perkembangan teknologi dan informasi.</li>
                <li>Menanamkan sikap kepedulian terhadap lingkungan kepada siswa melalui penerapan wawasan adiwiyata.</li>
                <li>Menumbuhkan budaya warga sekolah dalam upaya pelestarian lingkungan.</li>
              </ol>
            </div>
          </div>

          {/* Foto */}
          <div className="flex flex-col gap-6">
            <img
              src={visiImage}
              alt="Visi"
              className="w-full h-64 md:h-72 object-cover rounded-md shadow-lg"
            />
            <img
              src={misiImage}
              alt="Misi"
              className="w-full h-64 md:h-72 object-cover rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="text-center py-10 fade-in">
        <p className="mt-10 text-lg font-poppins font-medium">“Jiwa Pemimpin Tumbuh dari Lingkungan dan Perkembangan Interaksi Sosial”</p>
      </div>

      <Footer />
    </div>
  );
};

export default Beranda;
