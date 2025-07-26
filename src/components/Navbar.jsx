import React, { useState, useRef, useEffect } from 'react';
import { FaRegHeart, FaHeart, FaUser } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';
import LoginModal from "./LoginModal";

const cities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune",
  "Ahmedabad", "Noida", "Gurgaon", "Jaipur", "Lucknow", "Indore", "Bhopal",
  "Nagpur", "Chandigarh", "Patna", "Ranchi", "Surat", "Vadodara",
  "Kanpur", "Varanasi", "Ghaziabad", "Faridabad", "Amritsar"
];

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [language, setLanguage] = useState("English");
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [city, setCity] = useState("Select City");
  const [showCityOptions, setShowCityOptions] = useState(false);
  const [liked, setLiked] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const cityRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.relative')) {
        setShowCityOptions(false);
        setShowLangDropdown(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await res.json();
          setCity(data.city || data.locality || "Unknown");
        } catch {
          setCity("Location Error");
        }
      }, () => setCity("Permission Denied"));
    } else {
      setCity("Not Supported");
    }
    setShowCityOptions(false);
  };

  return (
    <>
      <nav className="w-full border-b shadow-sm p-4 md:p-6 flex flex-col bg-white z-50">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <span className="text-xs sm:text-sm font-semibold text-gray-600">
              BADHTE INDIA KA BHAROSA
            </span>
          </div>

          {/* Search */}
          <div className="flex w-full sm:w-[90%] md:w-[50%] border rounded-full overflow-hidden">
            <select className="px-3 py-2 text-sm text-gray-700 bg-gray-100 border-r outline-none">
              <option>All</option>
              <option>New</option>
              <option>Used</option>
            </select>
            <input
              type="text"
              placeholder="Search or Ask a Question"
              className="w-full px-3 py-2 text-sm outline-none"
            />
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4 relative">
            {/* Language */}
            <div
              className="text-sm cursor-pointer relative"
              onClick={() => setShowLangDropdown(!showLangDropdown)}
            >
              {language} <IoMdArrowDropdown className="inline" />
              {showLangDropdown && (
                <div className="absolute top-full left-0 bg-white border shadow mt-1 rounded z-50">
                  {["English", "Hindi"].map((lang) => (
                    <div
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowLangDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Heart */}
            <div onClick={() => setLiked(!liked)} className="cursor-pointer">
              {liked ? (
                <FaHeart className="text-xl text-red-500" />
              ) : (
                <FaRegHeart className="text-xl" />
              )}
            </div>

            {/* Login */}
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setShowLogin(true)}>
              <FaUser />
              <span className="hidden sm:inline text-sm">Login / Register</span>
            </div>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="mt-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center text-sm font-medium text-gray-700 gap-4">
          {/* Dropdown Menus */}
          <div className="flex flex-wrap gap-4 relative">
            {[
              { label: 'NEW CARS', key: 'new', options: ['Upcoming Cars', 'Popular Cars', 'Luxury Cars'] },
              { label: 'USED CARS', key: 'used', options: ['By Budget', 'Certified Cars', 'Cars in Your City'] },
              { label: 'NEWS & REVIEWS', key: 'news', options: ['Latest News', 'Expert Reviews'] },
              { label: 'VIDEOS', key: 'videos', options: ['Car Walkarounds', 'Comparison Videos'] }
            ].map(menu => (
              <div key={menu.key} className="relative">
                <div
                  className="cursor-pointer flex items-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === menu.key ? null : menu.key)
                  }
                >
                  {menu.label} <IoMdArrowDropdown />
                </div>
                {openDropdown === menu.key && (
                  <div className="absolute top-full left-0 bg-white text-black shadow rounded w-48 mt-1 z-50">
                    {menu.options.map((opt, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Select City */}
          <div ref={cityRef} className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setShowCityOptions(!showCityOptions)}
            >
              <MdLocationOn />
              <span>{city}</span>
              <IoMdArrowDropdown />
            </div>

            {showCityOptions && (
              <div className="absolute right-0 bg-white border mt-1 rounded shadow w-52 z-50 max-h-72 overflow-y-auto">
                <div
                  onClick={detectLocation}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-medium"
                >
                  📍 Use My Location
                </div>
                <hr />
                {cities.map((c) => (
                  <div
                    key={c}
                    onClick={() => {
                      setCity(c);
                      setShowCityOptions(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {c}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;
