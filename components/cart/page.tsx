// app/(store)/cart/page.tsx
'use client'
import { useCartStore } from '@/store/cartStore'
import CartDrawer from '@/components/cart/CartDrawer'
import { useState } from 'react'

export default function CartPage() {
    const items = useCartStore((s) => s.items)
    const [open, setOpen] = useState(true)

    return (
        <>
            <CartDrawer open={open} onClose={() => setOpen(false)} />
            <div className="container py-8">
                <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
                {items.length === 0 ? <p>Your cart is empty.</p> : items.map((it) => (
                    <div key={it.id} className="border p-4 mb-3 flex justify-between">
                        <div>
                            <div className="font-medium">{it.name}</div>
                        </div>
                        <div>${(it.price * it.quantity).toFixed(2)}</div>
                    </div>
                ))}
            </div>
        </>
    )
}
