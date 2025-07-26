import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const electricCars = [
  {
    name: "Tata Harrier EV",
    price: "₹21.49 Lakh*",
    image: "/ev1/ev1.jpg",
    launchDate: "LAUNCHED ON : JUN 3, 2025",
  },
  {
    name: "Mahindra BE 6",
    price: "₹18.90 - 26.90 Lakh*",
    image: "/ev1/ev2.jpg",
  },
  {
    name: "MG Windsor EV",
    price: "₹14 - 18.31 Lakh*",
    image: "/ev1/ev3.jpg",
  },
  {
    name: "Hyundai Ioniq 5",
    price: "₹45.95 Lakh*",
    image: "/ev1/ev4.jpg",
  },
  {
    name: "BYD Seal",
    price: "₹41 - 53 Lakh*",
    image: "/ev1/ev5.jpg",
  },
  {
    name: "Kia EV6",
    price: "₹60.95 Lakh*",
    image: "/ev1/ev6.jpg",
  },
];

const ElectricCars = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-white relative">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Electric Cars</h2>

      {/* Scroll Left Button */}
      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Cars Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-1 sm:px-10 scrollbar-hide"
      >
        {electricCars.map((car, index) => (
          <div
            key={index}
            className="min-w-[220px] sm:min-w-[250px] bg-white border rounded-lg shadow p-3 relative"
          >
            {/* Launch Date Badge */}
            {car.launchDate && (
              <div className="absolute top-3 left-3 bg-gray-200 text-xs px-2 py-1 rounded-full font-medium text-gray-700">
                {car.launchDate}
              </div>
            )}
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-40 sm:h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold text-sm sm:text-base">
              {car.name}
            </h3>
            <p className="text-gray-700 text-sm">{car.price}</p>
            <button className="mt-3 w-full py-2 border border-orange-500 text-orange-500 font-medium text-sm rounded hover:bg-orange-50 transition">
              View June Offers
            </button>
          </div>
        ))}
      </div>

      {/* Scroll Right Button */}
      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ElectricCars;
