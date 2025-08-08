import React from "react";
import { ShoppingCart } from "lucide-react";
import Lamp from "../../assets/productbrand/lamp.png";

const products = Array(8).fill({
  title: "Встраиваемый светильник Novotech",
  oldPrice: "7 000₽",
  newPrice: "6 399₽",
  image: Lamp,
});

const ProductView = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Популярные товары</h2>
          <button className="border border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
            Все товары →
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain"
              />

              <p className="text-sm text-gray-800 mt-3">{product.title}</p>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
              </div>

              <div className="flex items-center gap-2 justify-between w-full px-4 mt-1">
                <span className="text-lg font-bold">{product.newPrice}</span>
                <button className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-800 transition">
                  <ShoppingCart size={18} strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductView;
