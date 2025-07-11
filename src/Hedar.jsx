import React from 'react';
import { FaShoppingBag, FaUser } from 'react-icons/fa';
import logo from "./assets/image/logo.png";
// import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="w-full">
            {/* Top Navbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between px-4 md:px-8 py-4 space-y-4 md:space-y-0">
                {/* Logo + Text */}
                <div className="flex items-center space-x-3">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-10 h-10"
                    />
                    <div>
                        <h1 className="text-xl md:text-2xl font-semibold">
                            <span className="text-black">Maxx</span>
                            <span className="text-yellow-500">Cam</span>
                        </h1>
                        <p className="text-xs md:text-sm text-gray-600">A Picture Perfect Camera Store</p>
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-4 text-yellow-500">
                    <div className="flex items-center space-x-2">
                        <FaUser className="w-6 h-6" />
                        <span className="text-sm">Log In</span>
                    </div>
                    <div className="relative">
                        <FaShoppingBag className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 text-[10px] text-white bg-yellow-500 rounded-full w-4 h-4 flex items-center justify-center">0</span>
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="bg-black text-white text-sm px-4 md:px-8 py-2 flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                <div className="flex flex-wrap gap-4">
                    <a href="#" className="hover:text-yellow-400">Home</a>
                    <a href="#" className="hover:text-yellow-400">Shop</a>
                    <a href="#" className="hover:text-yellow-400">FAQ</a>
                    <a href="#" className="hover:text-yellow-400">Contact Us</a>
                </div>
                <div className="text-yellow-400 text-sm pt-1 md:pt-0">Call Us 1-800-000-0000</div>
            </div>
        </div>
    );
}
