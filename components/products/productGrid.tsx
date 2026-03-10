'use client'
import { AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'
import { PRODUCTS } from '@/lib/mockProducts'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import type { Product } from '@/types/products'

export default function ProductGrid() {
    const addItem = useCartStore((s) => s.addItem)
    const toggleWishlist = useWishlistStore((s) => s.toggle)
    const wishlistIds = useWishlistStore((s) => s.ids)

    const handleAddToCart = (product: Product) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1,
        })
    }

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20">
            <h2 className="text-3xl font-bold mb-10">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {PRODUCTS.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={handleAddToCart}
                            onToggleWishlist={toggleWishlist}
                            isWishlisted={wishlistIds.includes(product.id)}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </section>
    )
}
