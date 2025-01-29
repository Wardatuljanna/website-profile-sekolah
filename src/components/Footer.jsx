import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-2 lg:px-12 flex flex-col items-center md:flex-row md:justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h5 className="text-xl font-semibold font-poppins">
            SD Negeri 010 Sepaku
          </h5>
          <p className="text-sm mt-2 leading-relaxed font-medium font-poppins">
            sekolah adalah tempat mencetak penerus bangsa <br />
            yang berkualitas dan berprestasi di segala bidang <br />
            yang dapat bersaing di dunia pendidikan.
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 md:w-1/2 md:justify-end">
          <a
            href="https://facebook.com"
            className="hover:text-gray-400"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-gray-400"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-gray-400"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://youtube.com"
            className="hover:text-gray-400"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-2 lg:px-12 text-center text-sm mt-6">
        <p className="font-medium font-inter">Copyright © 2024 SDN 010 SEPAKU All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
