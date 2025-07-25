'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bottom-0  text-white bg-black w-full">
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 px-10 py-16">
       {/* Logo and Description */}
      <div className="mr-10">
        <Link href="/">
          <div className="w-20 h-20 cursor-pointer">
            <img src="/logo22.png" alt="Logo" className="w-full h-full object-cover bg-center rounded" />
          </div>
        </Link>
        <p className="mt-5 text-sm text-gray-300">
          Best Services Relevant to Pest are provided here.
        </p>
      </div>

      {/* Services Column */}
      <div>
        <h2 className="font-bold text-lg mb-4">Services</h2>
        <ul className="space-y-2 text-sm text-gray-300">
          <Link href="/pest-control"><li className="cursor-pointer hover:text-white transition">Pest Control</li></Link>
          <Link href="/termite"><li className="cursor-pointer hover:text-white transition">Termite Control</li></Link>
          <Link href="/rodent"><li className="cursor-pointer hover:text-white transition">Rodent Control</li></Link>
          <Link href="/fumigation"><li className="cursor-pointer hover:text-white transition">Fumigation</li></Link>
          <Link href="/residential"><li className="cursor-pointer hover:text-white transition">Residential</li></Link>
          <Link href="/commercial"><li className="cursor-pointer hover:text-white transition">Commercial</li></Link>
        </ul>
      </div>

      {/* Company Column */}
      <div>
        <h2 className="font-bold text-lg mb-4">Company</h2>
        <ul className="space-y-2 text-sm text-gray-300">
          <Link href="/about"><li className="cursor-pointer hover:text-white transition">About Us</li></Link>
          <Link href="/careers"><li className="cursor-pointer hover:text-white transition">Careers</li></Link>
          <Link href="/blog"><li className="cursor-pointer hover:text-white transition">Blog</li></Link>
          <Link href="/faq"><li className="cursor-pointer hover:text-white transition">FAQs</li></Link>
          <Link href="/terms"><li className="cursor-pointer hover:text-white transition">Terms</li></Link>
          <Link href="/privacy"><li className="cursor-pointer hover:text-white transition">Privacy Policy</li></Link>
        </ul>
      </div>

      {/* Additional Services Column */}
      <div>
        <h2 className="font-bold text-lg mb-4">More Services</h2>
        <ul className="space-y-2 text-sm text-gray-300">
          <Link href="/ants"><li className="cursor-pointer hover:text-white transition">Ant Control</li></Link>
          <Link href="/bed-bugs"><li className="cursor-pointer hover:text-white transition">Bed Bugs</li></Link>
          <Link href="/bees-wasps"><li className="cursor-pointer hover:text-white transition">Bees & Wasps</li></Link>
          <Link href="/spiders"><li className="cursor-pointer hover:text-white transition">Spiders</li></Link>
          <Link href="/flies"><li className="cursor-pointer hover:text-white transition">Flies</li></Link>
          <Link href="/mosquitoes"><li className="cursor-pointer hover:text-white transition">Mosquitoes</li></Link>
        </ul>
      </div>

      {/* Contact Column */}
      <div>
        <h2 className="font-bold text-lg mb-4">Contact Us</h2>
        <ul className="space-y-2 text-sm text-gray-300">
          <Link href="/contact"><li className="cursor-pointer hover:text-white transition">Email: info@example.com</li></Link>
          <Link href="/contact"><li className="cursor-pointer hover:text-white transition">Phone: +123-456-7890</li></Link>
          <Link href="/contact"><li className="cursor-pointer hover:text-white transition">WhatsApp: +123-456-7890</li></Link>
          <Link href="/location"><li className="cursor-pointer hover:text-white transition">Location: City Center</li></Link>
          <Link href="/hours"><li className="cursor-pointer hover:text-white transition">Hours: 9am - 6pm</li></Link>
          <Link href="/support"><li className="cursor-pointer hover:text-white transition">Customer Support</li></Link>
        </ul>
      </div>
     </div>
     <div className="p-10">
      <hr  className="text-gray-600"/>
      <div className="flex flex-col items-center  gap-5 md:flex-row md:justify-between items-center pt-3">
        <div>
          <ul className="flex flex-col md:flex-row whitespace-nowrap text-sm font-semibold md:gap-10 items-center">
            <li>@2025 All rights reserved</li>
            <Link href=""><li>Privacy & Policy</li></Link>
            <Link href=""><li>Terms & Use</li></Link>
          </ul>
        </div>
        <div className="flex justify-center gap-2 md:mr-10">
          <Link href=""><div className="p-1 rounded-full hover:border-gray-300 border-2"><FaFacebook className='text-xl cursor-pointer' /></div></Link>
          <Link href=""><div className="p-1 rounded-full hover:border-gray-300 border-2"><TbBrandWhatsappFilled  className='text-xl cursor-pointer' /></div></Link>
          <Link href=""><div className="p-1 rounded-full hover:border-gray-300 border-2"><FaInstagramSquare className='text-xl cursor-pointer' /></div></Link>
          
        </div>
      </div>
     </div>
    </footer>
  );
};

export default Footer;
