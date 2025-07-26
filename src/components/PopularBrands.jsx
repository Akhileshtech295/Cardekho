import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const brands = [
  { name: "Honda", image: "/brands/honda.png" },
  { name: "MG", image: "/brands/mg.png" },
  { name: "Skoda", image: "/brands/skoda.png" },
  { name: "Jeep", image: "/brands/jeep.png" },
  { name: "Renault", image: "/brands/renault.png" },
  { name: "Nissan", image: "/brands/nissan.png" },
  { name: "Hyundai", image: "/brands/hyundai.png" },
  { name: "Kia", image: "/brands/kia.png" },
  { name: "Mahindra", image: "/brands/mahindra.png" },
  { name: "Tata", image: "/brands/tata.png" },
  { name: "Toyota", image: "/brands/toyota.png" },
  { name: "Volkswagen", image: "/brands/volkswagen.png" },
];

const PopularBrands = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="w-full px-4 sm:px-6 py-8 bg-white relative">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Popular brands</h2>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <FaChevronLeft />
      </button>

      {/* Brand List */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-8 sm:px-12 scrollbar-hide"
      >
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="min-w-[120px] h-[140px] bg-white border rounded-lg flex flex-col items-center justify-center shadow"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-sm font-medium">{brand.name}</p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border rounded-full shadow p-2 z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default PopularBrands;
