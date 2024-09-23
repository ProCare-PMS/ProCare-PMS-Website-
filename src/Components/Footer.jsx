import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import logo from './../assets/img/logo1b.jpg';

function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-20">
        
        {/* Section 1: Logo and Description */}
        <div className="col-span-1">
          <img src={logo} alt="PreCare Image" className="w-[90px]" />
          <br/>
          <p className="text-sm">
            Simplifying pharmacy management with one click at a time.
          </p>
        </div>

        {/* Section 2: Products */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Products</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Commerce</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Point of Sale</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Payments</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Online</a></li>
          </ul>
        </div>

        {/* Section 3: Resources */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Quick service</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Full service</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Sales</a></li>
          </ul>
        </div>

        {/* Section 4: Legal */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Legal</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Section 5: Contact and Social Media */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          
          {/* Container for Sales text and Social Media Icons */}
          <div className="flex flex-col items-start mt-4">
            {/* Sales text on top */}
            <p className="mb-2">Customer support: +233 492 0268</p>
            <span className="mb-2">Sales: +233 492 0268</span>
            <br/>
            
            {/* Social Media Icons below */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-white hover:text-gray-400" size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white hover:text-gray-400" size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white hover:text-gray-400" size={24} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Horizontal line */}
      <hr className='my-8 border-t border-gray-600' />

      {/* Copyright Section */}
      <div className='text-center'>
        <p>Copyright &copy; 2024 ProHealium RxPMS. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
