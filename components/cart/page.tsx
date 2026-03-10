// app/(store)/cart/page.tsx
'use client'
import { useCartStore } from '@/store/cartStore'

export default function CartPage() {
    const items = useCartStore((s) => s.items)

    return (
        <div className="max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-3xl font-black mb-6">Your Cart</h1>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {items.map((it) => (
                        <div key={it.id} className="border p-4 rounded-xl flex justify-between">
                            <div>
                                <div className="font-medium">{it.name}</div>
                                <div className="text-sm text-gray-500">{it.category}</div>
                            </div>
                            <div className="font-bold">${(it.price * it.quantity).toFixed(2)}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
