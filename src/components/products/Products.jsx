import React, { useEffect, useState } from "react";
import { request } from "../../api";
import { colors } from "../../static/index";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    request
      .get("/products", {
        params: {
          limit: 8,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="mb-12 text-[#737373] text-center">
          <h2 className="mb-2.5 text-[20px] font-normal">Featured Products</h2>
          <h3 className="mb-2.5 text-[24px] sm:text-[28px] font-bold text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[14px] sm:text-[16px] font-normal">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div onClick={() => navigate(`/product/${product.id}`)}
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-4 cursor-pointer"
              >
                <div className="w-full aspect-square overflow-hidden rounded-lg">
                  <img
                    className="w-full h-full object-contain"
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                <div className="p-4 text-center">
                  <h2
                    title={product.title}
                    className="text-[#252B42] text-[16px] sm:text-[18px] font-bold mb-2 truncate"
                  >
                    {product.title}
                  </h2>
                  <p className="text-[#737373] text-[14px] sm:text-[16px] font-bold mb-2">
                    English Department
                  </p>
                  <strong className="block text-[#23856D] text-[16px] sm:text-[18px] font-bold mb-3">
                    ${product.price}
                  </strong>

                  <div className="flex items-center justify-center gap-2 mt-2">
                    {colors.map((color, index) => (
                      <span
                        key={index}
                        style={{ background: color }}
                        className="w-5 h-5 sm:w-6 sm:h-6 inline-block rounded-full cursor-pointer border border-gray-300"
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-[#737373]">Loading products...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
