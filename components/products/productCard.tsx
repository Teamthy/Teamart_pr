'use client';
import React, { forwardRef } from 'react';
import { ShoppingBag, Heart, Camera, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Product } from '@/types/product';

type Props = {
    product: Product;
    onAddToCart: (p: Product) => void;
    onToggleWishlist: (id: number) => void;
    onOpenTryOn: (p: Product) => void;
    isWishlisted: boolean;
};

const ProductCard = forwardRef<HTMLDivElement, Props>(({ product, onAddToCart, onToggleWishlist, onOpenTryOn, isWishlisted }, ref) => {
    return (
        <motion.div ref={ref} layout initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="group relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-4">
                {product.tag && <span className="absolute top-3 left-3 z-10 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{product.tag}</span>}
                <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                    <button onClick={() => onToggleWishlist(product.id)} className={`p-2 rounded-full backdrop-blur-md transition-all ${isWishlisted ? 'bg-rose-500 text-white' : 'bg-white/80 text-black hover:bg-white'}`}>
                        <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>
                    <button onClick={() => onOpenTryOn(product)} className="p-2 rounded-full backdrop-blur-md bg-white/80 text-black hover:bg-black hover:text-white transition-all shadow-sm" title="Virtual Try-On">
                        <Camera size={16} />
                    </button>
                </div>

                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button disabled={product.stock === 0} onClick={() => onAddToCart(product)} className={`w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl ${product.stock === 0 ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-white text-black hover:bg-gray-100'}`}>
                        {product.stock === 0 ? 'Out of Stock' : <><ShoppingBag size={16} /> Add to Cart</>}
                    </button>
                </div>
            </div>

            <div className="px-1">
                <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                    <span className="font-black text-lg">${product.price}</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold">{product.rating}</span>
                    <span className="text-xs text-gray-400">({product.reviews})</span>
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{product.category}</p>
            </div>
        </motion.div>
    );
});

ProductCard.displayName = 'ProductCard';
export default ProductCard;
