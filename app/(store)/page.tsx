'use client'
import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import ProductCard from '@/components/products/ProductCard'
import { CATEGORIES, PRODUCTS } from '@/lib/mockProducts'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import type { Product } from '@/types/products'

export default function Home() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [isToastVisible, setIsToastVisible] = useState(false)

    const addItem = useCartStore((s) => s.addItem)
    const toggleWishlist = useWishlistStore((s) => s.toggle)
    const wishlistIds = useWishlistStore((s) => s.ids)

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All') return PRODUCTS
        return PRODUCTS.filter((product) => product.category === activeCategory)
    }, [activeCategory])

    const showToast = () => {
        setIsToastVisible(true)
        setTimeout(() => setIsToastVisible(false), 3000)
    }

    const addToCart = (product: Product) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1,
        })
        showToast()
    }

    return (
        <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
            <Hero />

            <main className="pt-0">
                <section id="shop" className="max-w-7xl mx-auto px-6 py-24">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black">LATEST DROPS</h2>
                            <p className="text-gray-500 max-w-md uppercase text-xs tracking-[0.2em] font-bold">
                                Dynamic Inventory Powered by Sanity Headless CMS
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                                        activeCategory === cat
                                            ? 'bg-black text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onAddToCart={addToCart}
                                    onToggleWishlist={toggleWishlist}
                                    isWishlisted={wishlistIds.includes(product.id)}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </section>

                <Features />

                <section id="about" className="max-w-7xl mx-auto px-6 py-24">
                    <div className="bg-[#e2e8f0] rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col items-center text-center">
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-5xl md:text-7xl font-black mb-6">READY TO SCALE?</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Teamart isn&apos;t just a theme - it&apos;s a production codebase with Next.js, Clerk Auth, and Stripe webhooks pre-configured.
                            </p>
                            <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                                Deploy with Vercel
                            </button>
                        </div>
                        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
                    </div>
                </section>
            </main>

            <AnimatePresence>
                {isToastVisible && (
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-black text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/20"
                    >
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                            <Check size={14} strokeWidth={4} />
                        </div>
                        <span className="font-bold text-sm">Item added to your bag!</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
