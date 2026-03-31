import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full max-w-[95vw] md:max-w-[85vw] mx-auto pt-[80px] pb-5">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 ">
      
      
      <div className="lg:col-span-1">
        <h2 className="text-3xl font-bold mb-4 text-[#FFFFFF]">DigiTools</h2>
        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
          Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
        </p>
      </div>

     
      <div>
        <h3 className="text-lg font-semibold mb-6 text-[#FFFFFF]">Product</h3>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li className="hover:text-white hover:underline cursor-pointer">Features</li>
          <li className="hover:text-white hover:underline cursor-pointer">Pricing</li>
          <li className="hover:text-white hover:underline cursor-pointer">Templates</li>
          <li className="hover:text-white hover:underline cursor-pointer">Integrations</li>
        </ul>
      </div>

     
      <div>
        <h3 className="text-lg font-semibold mb-6  text-[#FFFFFF]">Company</h3>
        <ul className="space-y-4 text-gray-400 text-sm">
          <li className="hover:text-white hover:underline cursor-pointer">About</li>
          <li className="hover:text-white hover:underline cursor-pointer">Blog</li>
          <li className="hover:text-white hover:underline cursor-pointer">Careers</li>
          <li className="hover:text-white hover:underline cursor-pointer">Press</li>
        </ul>
      </div>

    
      <div>
        <h3 className="text-lg font-semibold mb-6 text-[#FFFFFF]">Resources</h3>
        <ul className="space-y-4 text-gray-400 text-sm mb-8">
          <li className="hover:text-white hover:underline cursor-pointer">Documentation</li>
          <li className="hover:text-white hover:underline cursor-pointer">Help Center</li>
          <li className="hover:text-white hover:underline cursor-pointer">Community</li>
          <li className="hover:text-white hover:underline cursor-pointer">Contact</li>
        </ul>
        
      </div>
      <div>
           <h3 className="text-lg font-semibold mb-4  text-[#FFFFFF]">Social Links</h3>
        <div className="flex gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer transition-all">
            <FaInstagram></FaInstagram>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer transition-all">
           <FaFacebook></FaFacebook>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 cursor-pointer transition-all">
            <FaTwitter></FaTwitter>
          </div>
        </div>
        
        </div>
    </div>

    
    <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
      <p>© 2026 Digitools. All rights reserved.</p>
      <div className="flex gap-6">
        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
        <span className="hover:text-white cursor-pointer">Terms of Service</span>
        <span className="hover:text-white cursor-pointer">Cookies</span>
      </div>
    </div>
  </div>
    );
};
export default Footer
