import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-12 pb-6 px-6 border-t border-gray-200">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-2">Travel Guru</h2>
          <p className="text-sm text-gray-600">
            Explore the world with us. Book your next adventure easily and affordably.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/destinations" className="hover:text-yellow-500">Destinations</a></li>
            <li><a href="/blog" className="hover:text-yellow-500">Blog</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-500">FAQs</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-500">Help Center</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-500"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-500"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Travel Guru. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
