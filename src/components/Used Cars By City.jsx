import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const cities = [
  { name: "Ahmedabad", icon: "/icons/ahmedabad.png" },
  { name: "Bangalore", icon: "/icons/bangalore.png" },
  { name: "Chennai", icon: "/icons/chennai.png" },
  { name: "Delhi NCR", icon: "/icons/delhi-ncr.png" },
  { name: "Gurgaon", icon: "/icons/gurgaon.png" },
  { name: "Hyderabad", icon: "/icons/hyderabad.png" },
  { name: "Jaipur", icon: "/icons/jaipur.png" },
  { name: "Kolkata", icon: "/icons/kolkata.png" },
  { name: "Mumbai", icon: "/icons/mumbai.png" },
  { name: "New Delhi", icon: "/icons/newdelhi.png" },
  { name: "Noida", icon: "/icons/noida.png" },
  { name: "Pune", icon: "/icons/pune.png" },
  { name: "Lucknow" },
  { name: "Indore" },
  { name: "Nagpur" },
  { name: "Surat" },
  { name: "Bhopal" },
  { name: "Patna" },
  { name: "Ludhiana" },
  { name: "Kanpur" },
];

const UsedCarsByCity = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setShowDropdown(false);
  };

  return (
    <div className="px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold mb-6">Get trusted used cars nearby</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cities.slice(0, 12).map((city, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-md border text-center hover:shadow-md transition"
          >
            {city.icon && (
              <img
                src={city.icon}
                alt={city.name}
                className="mx-auto mb-2 h-20 w-20 object-contain"
              />
            )}
            <p className="text-gray-500 text-sm">Used cars in</p>
            <p className="text-base font-semibold">{city.name}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 relative">
        <h3 className="text-lg font-semibold mb-2">
          I am looking to buy a second hand car in
        </h3>
        <div className="relative w-full sm:w-64">
          <FaMapMarkerAlt className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            value={selectedCity}
            onClick={() => setShowDropdown(!showDropdown)}
            onChange={(e) => setSelectedCity(e.target.value)}
            placeholder="Enter your city"
            className="w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:border-orange-500"
          />
          {showDropdown && (
            <ul className="absolute z-10 bg-white border rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
              {cities.map((city, idx) => (
                <li
                  key={idx}
                  onClick={() => handleCitySelect(city.name)}
                  className="px-4 py-2 hover:bg-orange-100 cursor-pointer text-sm"
                >
                  {city.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsedCarsByCity;
