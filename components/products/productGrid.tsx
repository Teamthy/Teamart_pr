'use client'
import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'
import ProductFilter from './productFilter'
import { CATEGORIES, PRODUCTS } from '@/lib/mockProducts'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import type { Product } from '@/types/products'

export default function ProductGrid() {
    const addItem = useCartStore((s) => s.addItem)
    const toggleWishlist = useWishlistStore((s) => s.toggle)
    const wishlistIds = useWishlistStore((s) => s.ids)

    const [activeCategory, setActiveCategory] = useState('All')
    const [sort, setSort] = useState('featured')

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

    const visibleProducts = useMemo(() => {
        let filtered = activeCategory === 'All'
            ? PRODUCTS
            : PRODUCTS.filter((product) => product.category === activeCategory)

        if (sort === 'price-asc') {
            filtered = [...filtered].sort((a, b) => a.price - b.price)
        }
        if (sort === 'price-desc') {
            filtered = [...filtered].sort((a, b) => b.price - a.price)
        }
        if (sort === 'rating') {
            filtered = [...filtered].sort((a, b) => b.rating - a.rating)
        }

        return filtered
    }, [activeCategory, sort])

    return (
        <section className="bg-white border border-gray-200 rounded-3xl px-8 py-12 md:px-12 md:py-16">
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
                <p className="mt-3 text-gray-500">
                    Discover premium products at unbeatable prices curated for quality, comfort and style.
                </p>
            </div>
            <div className="mt-6">
                <ProductFilter
                    categories={CATEGORIES}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    sort={sort}
                    onSortChange={setSort}
                />
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                    {visibleProducts.map((product) => (
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
