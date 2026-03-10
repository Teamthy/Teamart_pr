'use client';
import Image from 'next/image';
import type { Product } from '@/types/products';

export default function ProductDetail({ product }: { product: Product }) {
    const thumbnails = [product.image, product.image, product.image, product.image];

    return (
        <main className="bg-white border border-gray-200 rounded-3xl px-8 py-10 md:px-12 md:py-14">
            <div className="text-sm text-gray-500 mb-6">
                Home / Products / {product.category} / <span className="text-indigo-600">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-8 items-start">
                <div className="flex lg:flex-col gap-3">
                    {thumbnails.map((src, index) => (
                        <button
                            key={`${src}-${index}`}
                            className="w-16 h-16 rounded-lg border border-gray-200 bg-white flex items-center justify-center"
                        >
                            <Image src={src} alt={`${product.name} thumbnail`} width={48} height={48} className="object-contain" />
                        </button>
                    ))}
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 bg-white">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={720}
                        height={720}
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h1>
                    <div className="flex items-center gap-2 mt-2 text-sm text-indigo-600">
                        <span>★★★★☆</span>
                        <span className="text-gray-500">({product.reviews})</span>
                    </div>
                    <p className="mt-4 text-gray-500">MRP: <span className="line-through">${product.price + 30}</span></p>
                    <p className="text-xl font-semibold text-gray-900">MRP: ${product.price}</p>
                    <p className="text-xs text-gray-500">(inclusive of all taxes)</p>

                    <div className="mt-6">
                        <h3 className="text-sm font-semibold text-gray-900">About Product</h3>
                        <ul className="mt-2 text-sm text-gray-500 list-disc list-inside space-y-1">
                            <li>High-quality material</li>
                            <li>Comfortable for everyday use</li>
                            <li>Available in different sizes</li>
                        </ul>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <button className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50">
                            Add to Cart
                        </button>
                        <button className="flex-1 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
