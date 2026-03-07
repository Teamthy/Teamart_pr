'use client';
import React from 'react';
import Navbar from '@/components/layout/Navbar';

export default function CheckoutPage() {
    return (
        <>
            <Navbar cartCount={0} wishlistCount={0} onOpenCart={() => { }} />
            <main className="max-w-3xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-4">Checkout</h1>
                <p className="text-gray-600">This page should call your server checkout API to create a Stripe session.</p>
            </main>
        </>
    );
}
