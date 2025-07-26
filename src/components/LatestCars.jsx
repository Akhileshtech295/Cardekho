import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const latestCars = [
  {
    name: "Audi Q7",
    price: "₹90.48 - 99.81 Lakh*",
    image: "/latest1/latest1.jpg",
    launchDate: "JUN 23, 2025",
    tags: ["New Variant"],
    buttonType: "dealer",
  },
  {
    name: "Honda City",
    price: "₹12.28 - 16.55 Lakh*",
    image: "/latest1/latest2.jpg",
    launchDate: "JUN 20, 2025",
    tags: ["New Variant"],
    buttonType: "offers",
  },
  {
    name: "Maruti Grand Vitara",
    price: "₹11.42 - 20.68 Lakh*",
    image: "/latest1/latest3.jpg",
    launchDate: "JUN 17, 2025",
    tags: ["New Variant"],
    buttonType: "offers",
  },
  {
    name: "Mercedes-Benz EQS",
    price: "₹1.30 - 1.63 Cr*",
    image: "/latest1/latest4.jpg",
    launchDate: "JUN 16, 2025",
    tags: ["Electric", "New Variant"],
    buttonType: "dealer",
  },
  {
    name: "Kia Seltos Facelift",
    price: "₹10.89 - 20.30 Lakh*",
    image: "/latest1/latest5.jpg",
    launchDate: "JUN 12, 2025",
    tags: ["New Variant"],
    buttonType: "offers",
  },
  {
    name: "BMW i5",
    price: "₹88.90 Lakh*",
    image: "/latest1/latest6.jpg",
    launchDate: "JUN 10, 2025",
    tags: ["Electric"],
    buttonType: "dealer",
  },
];

const LatestCars = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-white relative">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Latest cars</h2>

      {/* Left Arrow */}
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
        {latestCars.map((car, index) => (
          <div
            key={index}
            className="min-w-[220px] sm:min-w-[250px] bg-white border rounded-lg shadow p-3 relative"
          >
            {/* Launch Badge */}
            <div className="absolute top-3 left-3 bg-gray-200 text-xs px-2 py-1 rounded-full font-medium text-gray-700">
              LAUNCHED ON : {car.launchDate}
            </div>

            <img
              src={car.image}
              alt={car.name}
              className="w-full h-40 sm:h-48 object-cover rounded"
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {car.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mt-2 font-semibold text-sm sm:text-base">
              {car.name}
            </h3>
            <p className="text-gray-700 text-sm">{car.price}</p>

            {/* Button */}
            {car.buttonType === "dealer" ? (
              <button className="mt-3 w-full py-2 border border-orange-500 text-orange-500 font-medium text-sm rounded hover:bg-orange-50 transition">
                Contact Dealer
              </button>
            ) : (
              <button className="mt-3 w-full py-2 border border-orange-500 text-orange-500 font-medium text-sm rounded hover:bg-orange-50 transition">
                View June Offers
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default LatestCars;
