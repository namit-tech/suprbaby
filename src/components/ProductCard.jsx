import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative overflow-hidden border border-primary/20 transition-all duration-700 ease-in-out hover:shadow-2xl hover:-translate-y-1 flex flex-col aspect-[3/4] sm:aspect-auto sm:min-h-[480px]">
      
      {/* Full Bleed Background Image (Clickable) */}
      <Link to={`/product/${product.id}`} className="absolute inset-0 w-full h-full block z-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-in-out group-hover:scale-110"
          style={{ objectPosition: product.imagePosition || 'center', ...product.imageStyle }}
        />
        {/* Important: gradient so text content blends nicely and is readable if no blur is supported */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
      </Link>

      {/* Centered Overlay Product Image - Wrapped in Link for better clickability */}
      {product.overlayImage && (
        <Link to={`/product/${product.id}`} className="absolute inset-0 z-10 flex items-center justify-center">
          <img
            src={product.overlayImage}
            alt={`${product.name} overlay`}
            className={`w-[110%] sm:w-[100%] max-h-[95%] sm:max-h-[90%] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-transform duration-[1500ms] ease-in-out ${product.overlayExtraClasses || 'scale-105 group-hover:scale-125'}`}
          />
        </Link>
      )}

      {/* Spacer to push content block all the way to the bottom */}
      <div className="flex-grow z-10 pointer-events-none"></div>

      {/* Content Block overlapping the image */}
      <div className="relative z-10 w-full p-5 pt-2 pb-0 flex flex-col mt-auto pointer-events-none">
        <Link to={`/product/${product.id}`} className="inline-block pointer-events-auto">
          <h3 className="text-secondary font-bold text-xl md:text-xl leading-tight hover:opacity-80 transition-opacity drop-shadow-md">
            {product.name}
          </h3>
        </Link>
        
        {product.description && (
          <p className="font-secondary text-secondary opacity-80 text-md leading-relaxed line-clamp-2 drop-shadow-md font-medium">
            {product.description}
          </p>
        )}

        {/* Price & Action */}
        <div className="flex items-end justify-between mt-auto pb-1 pointer-events-auto">
          <span className="font-secondary text-secondary font-extrabold text-3xl md:text-2xl drop-shadow-lg leading-none">
            ₹{product.price}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="text-primary font-bold text-xl px-1 transition-all duration-700 ease-in-out hover:bg-primary hover:text-secondary border-2 border-primary min-h-[34px] flex items-center shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-none hover:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
