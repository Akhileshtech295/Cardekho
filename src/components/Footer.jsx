import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About CarDekho */}
        <div>
          <h2 className="font-bold mb-3">ABOUT CARDEKHO</h2>
          <ul className="space-y-2">
            <li>About</li>
            <li>Careers With Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Corporate Policies</li>
            <li>Investors</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h2 className="font-bold mb-3">CONNECT WITH US</h2>
          <ul className="space-y-2">
            <li>Feedback</li>
            <li>Contact Us</li>
            <li>Advertise with Us</li>
            <li>Become Partner Dealer</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h2 className="font-bold mb-3">OTHERS</h2>
          <ul className="space-y-2">
            <li>TrucksDekho</li>
            <li>TyreDekho</li>
            <li>TractorsDekho</li>
            <li>Girnar Vision Fund</li>
            <li>Emergency Response</li>
            <li>Car Sales Trends</li>
          </ul>
        </div>

        {/* App and Ventures */}
        <div>
          <h2 className="font-bold mb-3">EXPERIENCE CARDEKHO APP</h2>
          <div className="flex gap-4 mb-6">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded">
              <FaApple /> App Store
            </button>
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded">
              <FaGooglePlay /> Google Play
            </button>
          </div>

          <h2 className="font-bold mb-3">CARDEKHO GROUP VENTURES</h2>
          <div className="space-y-2 text-sm text-gray-800">
            <div>BikeDekho</div>
            <div>Rupyy</div>
            <div>ZigWheels</div>
           
          </div>
        </div>
      </div>
        <div className="text-center p-21">
        @ 2025 CarDekho sifcore pvt Ltd 
        </div>
    </footer>
  );
};

export default Footer;
