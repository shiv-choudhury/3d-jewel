import products from "../data/products";
import JewelryViewer from "./3DViewer";

const ProductCard = ({ product }) => (
  <div className="bg-[#00a9a5] rounded-2xl shadow-xl p-4 flex flex-col gap-3 border border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
    <div className="h-72 w-full flex items-center justify-center bg-[#90c2e7] rounded-xl overflow-hidden">
      <JewelryViewer modelUrl={`/models/${product?.model}`} />
    </div>
    <div className="mt-2 px-1">
      <h3 className="text-lg font-semibold text-white truncate">
        {product.name}
      </h3>
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
          className={`${
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

const ProductList = () => (
  <div className="p-6 min-h-screen bg-gradient-to-br from-[#092327] to-[#6692a7]">
    <h2 className="text-3xl font-bold text-center text-white mb-10">
      Explore Our Jewelry Collection
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductList;
