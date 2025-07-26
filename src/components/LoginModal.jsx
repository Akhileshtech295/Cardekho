import React, { useState } from "react";

const LoginModal = ({ show, onClose }) => {
  const [mobile, setMobile] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const isValidNumber = /^[6-9]\d{9}$/.test(value);
    setMobile(value);
    setIsValid(isValidNumber);
  };

  const handleSendOTP = () => {
    alert("OTP Sent to +91 " + mobile);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 sm:px-6">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl flex flex-col md:flex-row overflow-hidden relative">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* 📷 Left Side Illustration */}
        <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center p-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="Login Illustration"
            className="w-32 h-32 md:w-48 md:h-48"
          />
        </div>

        {/* 📱 Right Side Login Form */}
        <div className="w-full md:w-1/2 p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold">Login or Register</h2>
          <p className="text-gray-500 text-sm mt-1 mb-4">
            For better experience, order tracking & regular updates
          </p>

          {/* Input */}
          <label className="block mb-1 font-medium text-sm sm:text-base">Mobile Number</label>
          <div className="flex items-center border rounded px-3 py-2 focus-within:border-red-500">
            <span className="mr-2 text-gray-500 text-sm">+91</span>
            <input
              type="tel"
              value={mobile}
              onChange={handleChange}
              className="outline-none flex-1 text-sm"
              placeholder="Enter your mobile number"
              maxLength={10}
            />
          </div>

          {/* Validation Message */}
          {!isValid && mobile.length > 0 && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid mobile number
            </p>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSendOTP}
            disabled={!isValid}
            className={`mt-4 w-full py-2 rounded text-white font-semibold text-sm sm:text-base ${
              isValid ? "bg-red-500 hover:bg-red-600" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Send OTP
          </button>

          {/* Terms & Conditions */}
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            By proceeding, I confirm that I have received, read, and agree to:
            <br />
            <a href="#" className="text-blue-600 underline">Third-Party Sharing</a>,{" "}
            <a href="#" className="text-blue-600 underline">Privacy Policy</a>,{" "}
            <a href="#" className="text-blue-600 underline">Terms & Conditions</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
