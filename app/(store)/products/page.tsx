import React from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/lib/mockProducts';
import ProductDetail from '@/components/product/ProductDetail';

type Props = { params: { slug: string } };

export default function ProductPage({ params }: Props) {
    const product = PRODUCTS.find(p => p.id.toString() === params.slug || p.name.toLowerCase().replace(/\s+/g, '-') === params.slug);
    if (!product) return notFound();
    return <ProductDetail product={product} />;
}
