import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10 px-4 sm:px-6 md:px-20 text-sm">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Contact Us</h3>
          <p>500 Terry Francine Street San Francisco</p>
          <p>CA 94158 Tel: 123-456-7890</p>
          <p className="text-blue-300 break-all">info@mysite.com</p>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold mb-3 text-base">Customer Service</h3>
          <p>
            <span className="text-yellow-400">Contact Us &gt;</span> /{' '}
            <span className="text-gray-300">Shipping &gt;</span>
          </p>
          <p>
            <span className="text-yellow-400">Returns &gt;</span> /{' '}
            <span className="text-gray-300">Payment & Warranty &gt;</span>
          </p>
        </div>

        {/* Payment Info */}
        <div className="text-left md:text-right">
          <h3 className="font-semibold mb-3 text-base">We Accept</h3>
          <div className="flex md:justify-end gap-3">
            <img
              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              alt="Mastercard"
              className="w-10"
            />
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
              className="w-10"
            />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-xs text-gray-400 px-2">
        © 2035 by MaxxCam. Powered and secured by{' '}
        <a
          href="https://www.wix.com"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Wix
        </a>
      </div>
    </footer>
  );
}
