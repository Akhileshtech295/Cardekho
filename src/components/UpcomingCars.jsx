import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const upcomingCars = [
  {
    name: "Kia Carens Clavis EV",
    price: "₹16 Lakh",
    image: "/upcoming/upcoming1.jpg",
    launchDate: "JUN 25, 2025",
    tags: ["Electric"],
  },
  {
    name: "Mercedes-Benz AMG GT Coupe",
    price: "₹3 - 3.20 Cr",
    image: "/upcoming/upcoming2.jpg",
    launchDate: "JUN 27, 2025",
    tags: [],
  },
  {
    name: "Tata Harrier EV",
    price: "₹21.49 Lakh",
    image: "/upcoming/upcoming3.jpg",
    launchDate: "JUL 2, 2025",
    tags: ["Electric", "New Variant"],
  },
  {
    name: "Skoda Octavia RS",
    price: "₹45 Lakh",
    image: "/upcoming/upcoming4.jpg",
    launchDate: "JUL 16, 2025",
    tags: [],
  },
  {
    name: "Hyundai Creta EV",
    price: "₹18.50 - 21 Lakh",
    image: "/upcoming/upcoming5.jpg",
    launchDate: "AUG 10, 2025",
    tags: ["Electric"],
  },
  {
    name: "Toyota Urban Cruiser Taisor",
    price: "₹9 - 13 Lakh",
    image: "/upcoming/upcoming6.jpg",
    launchDate: "AUG 22, 2025",
    tags: ["New Variant"],
  },
];

const UpcomingCars = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-white relative">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Upcoming cars</h2>

      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-1 sm:px-10 scrollbar-hide"
      >
        {upcomingCars.map((car, index) => (
          <div
            key={index}
            className="min-w-[220px] sm:min-w-[250px] bg-white border rounded-lg shadow p-3 relative"
          >
            {/* Launch Date */}
            <div className="absolute top-3 left-3 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              EXPECTED LAUNCH : {car.launchDate}
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

            <h3 className="mt-2 font-semibold text-sm sm:text-base">{car.name}</h3>
            <p className="text-gray-700 text-sm">
              {car.price}{" "}
              <span className="text-gray-500 text-xs font-normal">Estimated</span>
            </p>

            <button className="mt-3 w-full py-2 border border-orange-500 text-orange-500 font-medium text-sm rounded hover:bg-orange-50 transition">
              Alert Me When Launched
            </button>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default UpcomingCars;
