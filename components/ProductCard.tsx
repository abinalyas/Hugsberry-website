import React from 'react';
import { Product } from '../types';
import { INSTAGRAM_URL } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  // Create Instagram DM link with product details
  // Instagram doesn't support direct DM links with pre-filled text in browser
  // So we'll link to the profile and users can DM from there
  // For mobile apps, this will open in Instagram app
  const getInstagramDMUrl = (productName: string) => {
    // Link to Instagram profile - users can DM from there
    // On mobile, this opens in Instagram app
    return INSTAGRAM_URL;
  };

  return (
    <div className="group cursor-pointer">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Badge Overlays */}
            {product.isNew && (
              <div className="absolute top-4 left-4 bg-hugsberry-green text-white px-3 py-1 rounded-full text-xs font-bold">
                New
              </div>
            )}
            {product.isSale && (
              <div className="absolute top-4 right-4 bg-hugsberry-red text-white px-3 py-1 rounded-full text-xs font-bold">
                Sale
              </div>
            )}
            {product.category && (
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-hugsberry-navy">
                {product.category}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-6">
            <h3 className="font-display font-bold text-xl text-hugsberry-navy mb-2 group-hover:text-hugsberry-green transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-hugsberry-navy">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
            {/* Buy Now Button */}
            <a
              href={getInstagramDMUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="block w-full text-center px-4 py-2.5 rounded-full bg-hugsberry-green text-white font-bold text-sm hover:bg-hugsberry-navy hover:shadow-lg transition-all duration-300"
            >
              Buy Now
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;

