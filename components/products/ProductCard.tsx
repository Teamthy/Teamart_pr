'use client'
import Image from 'next/image'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import type { Product } from '@/types/products'

type ProductCardProps = {
    product: Product
    onAddToCart: (product: Product) => void
    onToggleWishlist: (id: number) => void
    isWishlisted: boolean
}

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
    ({ product, onAddToCart, onToggleWishlist, isWishlisted }, ref) => {
        return (
            <motion.div
                ref={ref}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative"
            >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 mb-4">
                    {product.tag && (
                        <span className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                            {product.tag}
                        </span>
                    )}
                    <button
                        onClick={() => onToggleWishlist(product.id)}
                        className={`absolute top-4 right-4 z-10 p-2.5 rounded-full backdrop-blur-md transition-all ${
                            isWishlisted ? 'bg-rose-500 text-white' : 'bg-white/80 text-black hover:bg-white'
                        }`}
                        aria-label="Toggle wishlist"
                    >
                        <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
                    </button>

                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-x-4 bottom-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                            disabled={product.stock === 0}
                            onClick={() => onAddToCart(product)}
                            className={`w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl ${
                                product.stock === 0
                                    ? 'bg-gray-400 cursor-not-allowed text-white'
                                    : 'bg-white text-black hover:bg-gray-100'
                            }`}
                        >
                            {product.stock === 0 ? 'Out of Stock' : (<><ShoppingBag size={18} /> Add to Cart</>)}
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
        )
    }
)

ProductCard.displayName = 'ProductCard'

export default ProductCard
