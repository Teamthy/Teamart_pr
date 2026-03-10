'use client';
import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/products';

export default function ProductDetail({ product }: { product: Product }) {
    return (
        <main className="max-w-5xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Image src={product.image} alt={product.name} width={900} height={900} className="w-full rounded-xl object-cover" />
                <div>
                    <h1 className="text-3xl font-black mb-2">{product.name}</h1>
                    <p className="text-gray-500 mb-4">{product.category}</p>
                    <div className="text-2xl font-black mb-6">${product.price}</div>
                    <p className="text-gray-700 mb-6">Product description placeholder. Replace with Sanity content or your CMS.</p>
                    <button className="bg-black text-white px-6 py-3 rounded-full font-bold">Add to Cart</button>
                </div>
            </div>
        </main>
    );
}
