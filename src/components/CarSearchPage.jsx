import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CarSearchPage = () => {
  const [selectedTab, setSelectedTab] = useState("New Car");
  const [searchBy, setSearchBy] = useState("budget");
  const [budget, setBudget] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const budgets = [
    "Below ₹5 Lakh",
    "₹5-10 Lakh",
    "₹10-15 Lakh",
    "Above ₹15 Lakh",
  ];
  const vehicleTypes = ["SUV", "Hatchback", "Sedan", "EV"];

  const bgImages = ["/car1/car1.jpg", "/car1/car2.jpg", "/car1/car3.jpg"];
  const [bgIndex, setBgIndex] = useState(0);

  const nextImage = () => setBgIndex((prev) => (prev + 1) % bgImages.length);
  const prevImage = () => setBgIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={bgImages[bgIndex]}
        alt="Car Background"
        className="absolute w-full h-full object-cover opacity-70 transition duration-1000 ease-in-out"
      />

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-40 p-2 md:p-3 rounded-full hover:bg-opacity-70"
      >
        ⬅️
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-40 p-2 md:p-3 rounded-full hover:bg-opacity-70"
      >
        ➡️
      </button>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl px-4 sm:px-6 py-10 gap-10">
        {/* Search Box */}
        <div className="bg-white text-black rounded-lg shadow-lg p-5 sm:p-6 w-full max-w-md mx-auto lg:mx-0">
          <h2 className="text-xl font-bold mb-4 text-center sm:text-left">Find your right car</h2>

          {/* Tabs */}
          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 font-medium rounded-l ${
                selectedTab === "New Car" ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedTab("New Car")}
            >
              New Car
            </button>
            <button
              className={`flex-1 py-2 font-medium rounded-r ${
                selectedTab === "Used Car" ? "bg-black text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedTab("Used Car")}
            >
              Used Car
            </button>
          </div>

          {/* Search Type Radio */}
          <div className="flex gap-4 items-center mb-4 flex-wrap">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                checked={searchBy === "budget"}
                onChange={() => setSearchBy("budget")}
              />
              <span>By Budget</span>
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                checked={searchBy === "brand"}
                onChange={() => setSearchBy("brand")}
              />
              <span>By Brand</span>
            </label>
          </div>

          {/* Dropdowns */}
          <div className="space-y-4 mb-4">
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option>Select Budget</option>
              {budgets.map((item, idx) => (
                <option key={idx}>{item}</option>
              ))}
            </select>

            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option>All Vehicle Types</option>
              {vehicleTypes.map((item, idx) => (
                <option key={idx}>{item}</option>
              ))}
            </select>
          </div>

          <button className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600">
            Search
          </button>

          <p className="text-sm text-center mt-3 text-blue-600 cursor-pointer hover:underline">
            Advanced Search →
          </p>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left px-4 md:px-0 max-w-xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Luxury Car <br />
            <span className="bg-black text-white px-2">That Leads</span>
          </h1>
          <p className="text-lg mt-2">Starting from ₹14.00 Lakh*</p>
          <div className="mt-6">
            <p className="text-sm font-medium">
              BADHTE INDIA KA BHAROSA | Book Now
            </p>
            <p className="text-lg mt-1 font-semibold">📞 +91 71303 90900</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearchPage;
