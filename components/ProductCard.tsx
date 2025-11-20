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
            <div className="flex items-center justify-between">
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
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;

