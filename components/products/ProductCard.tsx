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
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
        >
            <div className="relative bg-gray-50 h-56 flex items-center justify-center">
                {product.tag && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                        {product.tag}
                    </span>
                )}
                <button
                    onClick={() => onToggleWishlist(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center"
                    aria-label="Toggle wishlist"
                >
                    <Heart size={16} className={isWishlisted ? 'text-rose-500 fill-rose-500' : 'text-gray-500'} />
                </button>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 line-clamp-1">{product.name}</h3>
                    <span className="font-bold text-gray-900">${product.price}</span>
                </div>
                <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                    <Star size={14} className="fill-indigo-500 text-indigo-500" />
                    <span className="font-semibold text-gray-700">{product.rating}</span>
                    <span>({product.reviews})</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">{product.category}</p>

                <button
                    disabled={product.stock === 0}
                    onClick={() => onAddToCart(product)}
                    className={`mt-4 w-full py-2.5 rounded-xl font-semibold ${
                        product.stock === 0
                            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-900 text-white hover:bg-black'
                    }`}
                >
                    {product.stock === 0 ? 'Out of Stock' : (
                        <span className="inline-flex items-center gap-2"><ShoppingBag size={16} /> Add to Cart</span>
                    )}
                </button>
            </div>
        </motion.div>
    )
    }
)

ProductCard.displayName = 'ProductCard'

export default ProductCard
