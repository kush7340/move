import React, { useState } from 'react';
import cameraFront from './assets/image/img1.jpg';  // default image
import cameraSide from './assets/image/image2.png'; // hover image

export default function ProductCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-xs mx-auto text-center p-4">
      <div
        className="group relative w-full bg-white border border-gray-200 rounded shadow hover:shadow-lg transition duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <img
          src={isHovered ? cameraFront : cameraSide}
          alt="Product"
          className="w-full h-auto object-contain p-4 transition duration-300 ease-in-out"
        />

        {/* Product Info */}
        <div className="pb-4">
          <p className="text-gray-800 text-sm mt-2">I'm a Product</p>
          <p className="text-gray-600 text-sm">$19.99</p>
        </div>

        {/* Add to Cart Button (visible on hover) */}
        <button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-yellow-500 text-white px-4 py-2 text-sm rounded shadow-md transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
