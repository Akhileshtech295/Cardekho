import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const carBudgets = {
  "1 - 5 Lakh": [
    {
      name: "Maruti Wagon R",
      price: "₹1.00 Lakh",
      available: 192,
      image: "/used1/used1.jpg",
    },
    {
      name: "Hyundai i20",
      price: "₹1.00 Lakh",
      available: 120,
      image: "used1/used2.jpg",
    },
    {
      name: "Maruti Swift",
      price: "₹1.00 Lakh",
      available: 119,
      image: "/used1/used3.jpg",
    },
    {
      name: "Honda City",
      price: "₹1.00 Lakh",
      available: 117,
      image: "/used1/used4.jpg",
    },
    {
      name: "Tata Tiago",
      price: "₹1.25 Lakh",
      available: 100,
      image: "/used1/used5.jpg",
    },
    {
      name: "Renault Kwid",
      price: "₹1.50 Lakh",
      available: 90,
      image: "/used1/used6.jpg",
    },
  ],
  "5 - 10 Lakh": [
    {
      name: "Hyundai Creta",
      price: "₹5.25 Lakh",
      available: 134,
      image: "/used1/used7.jpg",
    },
    {
      name: "Maruti Brezza",
      price: "₹6.00 Lakh",
      available: 109,
      image: "/used1/used8.jpg",
    },
    {
      name: "Tata Nexon",
      price: "₹7.50 Lakh",
      available: 89,
      image: "/used1/used9.jpg",
    },
    {
      name: "Kia Sonet",
      price: "₹9.25 Lakh",
      available: 74,
      image: "/used1/used10.jpg",
    },
    {
      name: "MG Astor",
      price: "₹8.75 Lakh",
      available: 60,
      image: "/used1/used11.jpg",
    },
    {
      name: "Toyota Glanza",
      price: "₹5.60 Lakh",
      available: 77,
      image: "/used1/used12.jpg",
    },
  ],
  "10 - 15 Lakh": [
    {
      name: "MG Hector",
      price: "₹12.20 Lakh",
      available: 65,
      image: "/used1/used13.jpg",
    },
    {
      name: "Honda Civic",
      price: "₹13.50 Lakh",
      available: 52,
      image: "/used1/used14.jpg",
    },
    {
      name: "Hyundai Alcazar",
      price: "₹14.80 Lakh",
      available: 45,
      image: "/used1/used15.jpg",
    },
    {
      name: "Mahindra XUV500",
      price: "₹13.20 Lakh",
      available: 48,
      image: "/used1/used16.jpg",
    },
    {
      name: "Skoda Slavia",
      price: "₹11.90 Lakh",
      available: 50,
      image: "/used1/used17.jpg",
    },
    {
      name: "Kia Carens",
      price: "₹14.20 Lakh",
      available: 38,
      image: "/used1/used18.jpg",
    },
  ],
};

const UsedCarsByBudget = () => {
  const [selectedBudget, setSelectedBudget] = useState("1 - 5 Lakh");
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-white relative">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Trusted used cars by budget</h2>

      {/* Budget Tabs */}
      <div className="flex gap-6 border-b pb-2 mb-4 text-sm sm:text-base font-medium">
        {Object.keys(carBudgets).map((budget) => (
          <button
            key={budget}
            onClick={() => setSelectedBudget(budget)}
            className={`pb-2 border-b-2 ${
              selectedBudget === budget
                ? "border-orange-500 text-orange-600"
                : "border-transparent text-gray-600 hover:text-orange-500"
            }`}
          >
            {budget}
          </button>
        ))}
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <FaChevronLeft />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-1 sm:px-10 scrollbar-hide"
      >
        {carBudgets[selectedBudget].map((car, index) => (
          <div
            key={index}
            className="min-w-[220px] sm:min-w-[250px] bg-white border rounded-lg shadow"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-40 sm:h-44 object-contain rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-sm sm:text-base font-medium">{car.name}</h3>
              <p className="text-black text-sm font-semibold">
                Starting @ {car.price}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                {car.available} Available Cars
              </p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default UsedCarsByBudget;
