'use client';
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import CartDrawer from '@/components/cart/CartDrawer';
import useCartStore from '@/store/cartStore';

export default function CartPage() {
    const { items, updateQty, remove } = useCartStore();
    return (
        <>
            <Navbar cartCount={items.reduce((s, i) => s + i.quantity, 0)} wishlistCount={0} onOpenCart={() => { }} />
            <main className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                <CartDrawer isOpen={true} onClose={() => { }} cart={items} updateQty={updateQty} removeItem={remove} />
            </main>
        </>
    );
}
