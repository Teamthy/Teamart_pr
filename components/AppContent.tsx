'use client';
import React, { useMemo, useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/lib/mockProducts';
import useCartStore from '@/store/cartStore';
import VirtualTryOnModal from '@/components/VirtualTryOnModal';
import Features from '@/components/home/Features';
import { AnimatePresence } from 'framer-motion';

export default function AppContent() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [tryOnProduct, setTryOnProduct] = useState<any | null>(null);
    const { add } = useCartStore();

    const filtered = useMemo(() => activeCategory === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === activeCategory), [activeCategory]);

    return (
        <section id="shop" className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black">Latest Drops</h2>
                <div className="flex gap-2">
                    {CATEGORIES.map(cat => (
                        <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-bold ${activeCategory === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}`}>{cat}</button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <AnimatePresence>
                    {filtered.map(p => (
                        <ProductCard key={p.id} product={p} onAddToCart={(prod) => add(prod)} onToggleWishlist={() => { }} onOpenTryOn={setTryOnProduct} isWishlisted={false} />
                    ))}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {tryOnProduct && <VirtualTryOnModal product={tryOnProduct} onClose={() => setTryOnProduct(null)} />}
            </AnimatePresence>
        </section>
    );
}
