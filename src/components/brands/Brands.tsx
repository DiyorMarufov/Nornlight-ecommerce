import React from "react";
import Arte from "../../assets/productbrand/arte.svg";
import Divinare from "../../assets/productbrand/divinare.svg";
import Odeon from "../../assets/productbrand/odean.svg";

const brands = [
  Arte,
  Divinare,
  Odeon,
];

const Brands = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">
          Только проверенные бренды
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {brands.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img src={src} alt={`Brand ${index}`} className="h-12 object-contain grayscale hover:grayscale-0 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Brands);
