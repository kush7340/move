import React, { useEffect } from 'react';
import baner from "./assets/image/baner.jpg";
import image from "./assets/image/image-lift.jpg";
import image2 from "./assets/image/image2.png";
import image11 from "./assets/image/logo_11.png";
import image10 from "./assets/image/logo_10.png";
import image12 from "./assets/image/logo_6.png";
import image13 from "./assets/image/logo_8.png";
import image14 from "./assets/image/logo_3.jpg";
import ProductCard from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Hedar';

export default function HeroBanner() {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // animation duration in ms
            once: true       // only animate once
        });
    }, []);
    return (
        <div>
           <div data-aos="fade-down">
             <Navbar />
           </div>
            <div className="mt-10 relative w-full" data-aos="fade-left">
                {/* Background Banner Image */}
                <img
                    src={baner}
                    alt="Banner"
                    className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"

                />

                {/* Overlay Content */}
                <div  data-aos="fade-right" className="absolute top-1/2 left-5 md:left-16 transform -translate-y-1/2 text-left z-10">
                    <div className="bg-white/50 shadow-md p-4 sm:p-6 md:p-8 max-w-md">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">PRICE</h1>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight">DROP!</h1>
                        <p className="text-xl sm:text-2xl text-black mt-3">Up to 15% Off All</p>
                        <p className="text-xl sm:text-2xl text-black">Our Products!</p>
                    </div>

                    <div className="mt-4">
                        <button className="bg-yellow-500 text-white px-6 py-2 font-medium hover:bg-white hover:text-black transition duration-300">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-8  space-y-4" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                {/* Top Promo Banners */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Block */}
                    <div
                        className="bg-cover w-50% bg-center text-white flex items-center justify-center text-center"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    >
                        <div className="bg-black/60 p-6 w-full h-full">
                            <h2 className="text-xl md:text-2xl font-bold">2 YEARS WARRANTY</h2>
                            <p className="text-sm md:text-lg mt-2">
                                ON OUR ENTIRE <br /> LENSES SELECTION
                            </p>
                        </div>
                    </div>

                    {/* Right Block */}
                    <div className="bg-yellow-500 w-50% flex items-center justify-center text-black text-left p-6 relative">
                        <div className="border border-white w-full h-full absolute inset-2 pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start md:space-x-6">
                            <img src={image2} alt="Camera" className="w-24 md:w-32" />
                            <div className="text-center md:text-left mt-4 md:mt-0">
                                <p className="text-sm  md:text-base">New TIPOX Models</p>
                                <p className="text-xl text-white md:text-3xl font-bold leading-tight">IN STOCK<br />NOW!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="bg-black text-white text-center py-3 text-sm md:text-base">
                    Free Delivery in The US <span className="mx-2"> \ </span> Same Day Shipping
                </div>
            </div>

            <div className='mt-10' data-aos="fade-up" data-aos-anchor-placement="center-center">
                <h1 className='text-4xl text-center '>Digital Cameras</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className='mt-10' data-aos="fade-up"
                data-aos-anchor-placement="center-center">
                <h1 className='text-4xl text-center '>Lenses & Accessories</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5" data-aos="fade-up"
                data-aos-anchor-placement="center-center">
                <img className='ml-10' src={image11} alt="" />
                <img src={image10} alt="" />
                <img src={image12} alt="" />
                <img src={image13} alt="" />
                <img src={image14} alt="" />
            </div>
        </div>
    );
}
