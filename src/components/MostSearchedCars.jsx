import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const carCategories = {
  SUV: [
    { name: "Mahindra Thar", price: "₹11.50 - 17.62 Lakh*", image: "/suv1/suv1.jpg" },
    { name: "Hyundai Creta", price: "₹11.11 - 20.50 Lakh*", image: "/suv1/suv2.jpg" },
    { name: "Tata Harrier", price: "₹15 - 26.50 Lakh*", image: "/suv1/suv3.jpg" },
    { name: "XUV700", price: "₹14.49 - 25.14 Lakh*", image: "/suv1/suv4.jpg" },
    { name: "Toyota Fortuner", price: "₹32.99 - 50.74 Lakh*", image: "/suv1/suv5.jpg" },
    { name: "MG Hector", price: "₹15.00 - 22.00 Lakh*", image: "/suv1/suv6.jpg" },
  ],
  Hatchback: [
    { name: "Maruti Swift", price: "₹6 - 8.50 Lakh*", image: "/hatch1/hatch1.jpg" },
    { name: "Hyundai i20", price: "₹7 - 11 Lakh*", image: "/hatch1/hatch2.jpg" },
    { name: "Tata Tiago", price: "₹5.60 - 8.20 Lakh*", image: "/hatch1/hatch3.jpg" },
    { name: "Maruti Baleno", price: "₹6.50 - 10 Lakh*", image: "/hatch1/hatch4.jpg" },
    { name: "Renault Kwid", price: "₹4.70 - 6.50 Lakh*", image: "/hatch1/hatch5.jpg" },
    { name: "Citroen C3", price: "₹6 - 8.50 Lakh*", image: "/hatch1/hatch6.jpg" },
  ],
  Sedan: [
    { name: "Honda City", price: "₹11.50 - 16 Lakh*", image: "/sedan1/sedan1.jpg" },
    { name: "Hyundai Verna", price: "₹11 - 17 Lakh*", image: "/sedan1/sedan2.jpg" },
    { name: "Skoda Slavia", price: "₹11.30 - 18 Lakh*", image: "/sedan1/sedan3.jpg" },
    { name: "Maruti Ciaz", price: "₹9.50 - 12.50 Lakh*", image: "/sedan1/sedan4.jpg" },
    { name: "Volkswagen Virtus", price: "₹11.50 - 17.50 Lakh*", image: "/sedan1/sedan5.jpg" },
    { name: "Toyota Yaris", price: "₹9 - 14 Lakh*", image: "/sedan1/sedan6.jpg" },
  ],
  MUV: [
    { name: "Maruti Ertiga", price: "₹8.50 - 12 Lakh*", image: "/muv1/muv1.jpg" },
    { name: "Toyota Innova Crysta", price: "₹19 - 27 Lakh*", image: "/muv1/muv2.jpg" },
    { name: "Renault Triber", price: "₹6 - 9 Lakh*", image: "/muv1/muv3.jpg" },
    { name: "Mahindra Marazzo", price: "₹13 - 16 Lakh*", image: "/muv1/muv4.jpg" },
    { name: "Kia Carens", price: "₹10 - 17 Lakh*", image: "/muv1/muv5.jpg" },
    { name: "Innova HyCross", price: "₹18.5 - 28.5 Lakh*", image: "/muv1/muv6.jpg" },
  ],
  Luxury: [
    { name: "Mercedes GLC", price: "₹74 Lakh*", image: "/lux1/lux1.jpg" },
    { name: "BMW X5", price: "₹96 Lakh*", image: "/lux1/lux2.jpg" },
    { name: "Audi Q7", price: "₹90 Lakh*", image: "/lux1/lux3.jpg" },
    { name: "Jaguar F-PACE", price: "₹80 Lakh*", image: "/lux1/lux4.jpg" },
    { name: "Volvo XC90", price: "₹98 Lakh*", image: "/lux1/lux5.jpg" },
    { name: "Range Rover Evoque", price: "₹75 Lakh*", image: "/lux1/lux6.jpg" },
  ],
};

const MostSearchedCars = () => {
  const [selectedCategory, setSelectedCategory] = useState("SUV");
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-white">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
        The Most Searched Cars
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start border-b pb-3 mb-6">
        {Object.keys(carCategories).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`pb-2 border-b-2 text-sm sm:text-base ${
              selectedCategory === cat
                ? "border-orange-500 text-orange-600 font-semibold"
                : "border-transparent text-gray-600 hover:text-orange-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-1 sm:px-10 scrollbar-hide"
        >
          {carCategories[selectedCategory].map((car, idx) => (
            <div
              key={idx}
              className="min-w-[220px] sm:min-w-[250px] bg-white border rounded-lg shadow-md"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-semibold">{car.name}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{car.price}</p>
                <button className="mt-3 w-full py-2 border border-orange-500 text-orange-500 font-medium text-sm sm:text-base rounded hover:bg-orange-50 transition">
                  View July Offers
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MostSearchedCars;
