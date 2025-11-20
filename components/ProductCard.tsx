import React, { useState } from 'react';
import { Product } from '../types';
import { INSTAGRAM_URL } from '../constants';
import { Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showCopied, setShowCopied] = useState(false);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  // Create Instagram DM link with pre-filled product details
  const getInstagramDMUrl = (productName: string, productPrice: number) => {
    const message = `Hi! I'm interested in: ${productName} (₹${productPrice.toLocaleString('en-IN')})`;
    const username = 'hugs.berry';
    
    // Check if user is on mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile: Try to open Instagram app with DM intent
      // Note: Instagram doesn't officially support pre-filled DM text
      // But we can link to profile - app will open and user can easily DM
      // Alternative: Use Instagram's direct message URL format
      return `https://www.instagram.com/${username}/?product=${encodeURIComponent(productName)}`;
    } else {
      // For desktop: Link to Instagram profile (users can click Message button)
      return `${INSTAGRAM_URL}&product=${encodeURIComponent(productName)}`;
    }
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
            {/* Buy Now Button with Copy Feedback */}
            <div className="relative">
              <a
                href={getInstagramDMUrl(product.name, product.price)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  
                  // Copy product details to clipboard so user can paste in DM
                  const message = `Hi! I'm interested in: ${product.name} (₹${product.price.toLocaleString('en-IN')})`;
                  
                  // Try to copy to clipboard (modern browsers)
                  if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(message).then(() => {
                      // Show notification that text was copied
                      setShowCopied(true);
                      setTimeout(() => setShowCopied(false), 3000);
                    }).catch(() => {
                      // Clipboard copy failed, that's okay - still open Instagram
                    });
                  } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = message;
                    textArea.style.position = 'fixed';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.select();
                    try {
                      document.execCommand('copy');
                      setShowCopied(true);
                      setTimeout(() => setShowCopied(false), 3000);
                    } catch (err) {
                      // Copy failed
                    }
                    document.body.removeChild(textArea);
                  }
                }}
                className="block w-full text-center px-4 py-2.5 rounded-full bg-hugsberry-green text-white font-bold text-sm hover:bg-hugsberry-navy hover:shadow-lg transition-all duration-300"
              >
                Buy Now
              </a>
              
              {/* Copy Notification Toast */}
              {showCopied && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-hugsberry-navy text-white px-4 py-3 rounded-lg shadow-xl z-50 whitespace-nowrap animate-fade-in">
                  <div className="flex items-center gap-2">
                    <Check size={18} className="text-hugsberry-green" />
                    <span className="text-sm font-medium">Message copied! Paste in Instagram DM</span>
                  </div>
                  {/* Arrow pointing down */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="border-4 border-transparent border-t-hugsberry-navy"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;

