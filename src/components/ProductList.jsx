import { useState } from "react";
import products from "../data/products";
import JewelryViewer from "./3DViewer";
import Modal from "./Modal";
import BasicButton from "./basics/BasicButton";

const ProductCard = ({ product, onView3D }) => (
  <div className="bg-[#00a9a5] rounded-2xl shadow-xl p-4 flex flex-col gap-3 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
    <div className="relative h-72 w-full flex items-center justify-center bg-[#90c2e7] rounded-xl overflow-hidden group">
      {/* <img
        src={`/images/${product.model.replace(".glb", ".jpg")}`}
        alt={product.name}
        className="object-contain h-full w-full rounded-xl"
      /> */}
      <JewelryViewer modelUrl={`/models/${product.model}`} />
      {/* <div
        className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer transition-opacity"
        onClick={() => onView3D(product)}
      >
        <span className="text-white font-semibold text-sm bg-gray-800 px-4 py-2 rounded-lg">
          View in 3D
        </span>
      </div> */}
    </div>
    <div className="mt-2 px-1">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white truncate">
          {product.name}
        </h3>
        {/* <BasicButton
          onClick={() => onView3D(product)}
          // className="w-full"
          loading={false}
        >
          View in 3D
        </BasicButton> */}
      </div>
      <p className="text-sm text-gray-100">{product.code}</p>
      {product.material && (
        <p className="text-sm text-gray-200 mt-1">
          Material: {product.material}
        </p>
      )}
      <p className="text-xl font-bold text-yellow-200 mt-2">
        ₹{product.price.toLocaleString()}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="bg-green-100 text-green-900 text-xs font-medium px-2 py-1 rounded-full">
          In store: {product.inStore}
        </span>
        <span
          className={`$${
            product.onlineStock > 0
              ? "bg-green-100 text-green-900"
              : "bg-red-200 text-red-800"
          } text-xs font-medium px-2 py-1 rounded-full`}
        >
          {product.onlineStock > 0
            ? `Online Stock: ${product.onlineStock}`
            : "Out of Stock"}
        </span>
      </div>
    </div>
    <div className="flex justify-end items-center mt-3 px-1">
      <button className="inline-flex items-center gap-2 border border-yellow-300 text-yellow-200 font-medium px-3 py-1.5 rounded-full hover:bg-yellow-100 hover:text-[#092327] transition-colors">
        <span role="img" aria-label="cart">
          🛒
        </span>
        Add to Cart
      </button>
    </div>
  </div>
);

const ProductList = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-[#092327] to-[#6692a7]">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Explore Our Jewelry Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView3D={setActiveProduct}
          />
        ))}
      </div>

      {!!activeProduct && (
        <Modal
          isOpen={!!activeProduct}
          onClose={() => setActiveProduct(null)}
          title={activeProduct?.name}
          showFooter={false}
          headerStyle="bg-[#6692a7] text-white rounded-t-xl "
        >
          <div className="p-4 bg-[#e7f0fe]">
            <div className="h-[500px] w-full bg-[#90c2e7]">
              {activeProduct && (
                <JewelryViewer modelUrl={`/models/${activeProduct.model}`} />
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
