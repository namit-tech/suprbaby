import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative overflow-hidden border-2 border-secondary transition-all duration-700 ease-in-out hover:shadow-2xl hover:-translate-y-1 flex flex-col aspect-[3/4] sm:aspect-auto sm:min-h-[480px] rounded-2xl bg-transparent">
      
      {/* Centered Overlay Product Image - Wrapped in Link for better clickability */}
      {product.overlayImage && (
        <Link to={`/product/${product.id}`} className="absolute inset-0 z-10 flex items-center justify-center p-8">
          <img
            src={product.overlayImage}
            alt={`${product.name} overlay`}
            className={`w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform duration-[1500ms] ease-in-out ${product.overlayExtraClasses || 'scale-105 group-hover:scale-125'}`}
          />
        </Link>
      )}

      {/* Spacer to push content block all the way to the bottom */}
      <div className="flex-grow z-10 pointer-events-none"></div>

      {/* Content Block overlapping the image */}
      <div className="relative z-20 w-full p-5 pt-2 flex flex-col mt-auto">
        <Link to={`/product/${product.id}`} className="inline-block hover:opacity-80 transition-opacity">
          <h3 className="text-secondary font-bold text-xl md:text-xl leading-tight">
            {product.name}
          </h3>
        </Link>
        
        {product.description && (
          <p className="font-secondary text-secondary opacity-70 text-sm leading-relaxed line-clamp-2 font-medium mt-1">
            {product.description}
          </p>
        )}

        {/* Price & Action */}
        <div className="flex items-end justify-between mt-4 pb-1">
          <span className="font-secondary text-secondary font-extrabold text-3xl md:text-2xl leading-none">
            ₹{product.price}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="text-secondary font-bold text-sm px-4 py-2 transition-all duration-700 ease-premium hover:bg-secondary hover:text-primary border-2 border-secondary rounded-lg flex items-center hover:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
