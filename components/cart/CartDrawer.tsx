// components/cart/CartDrawer.tsx
'use client'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
    const items = useCartStore((s) => s.items)
    const total = useCartStore((s) => s.getTotal())

    if (!open) return null

    return (
        <aside className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50">
            <div className="p-4 border-b flex items-center justify-between">
                <h3 className="text-lg font-semibold">Cart</h3>
                <button onClick={onClose} aria-label="Close">Close</button>
            </div>
            <div className="p-4 space-y-4 overflow-auto" style={{ maxHeight: '70vh' }}>
                {items.length === 0 && <p>Your cart is empty.</p>}
                {items.map((it) => (
                    <div key={it.id} className="flex items-center gap-3">
                        {it.image ? <Image src={it.image} alt={it.name} width={64} height={64} className="rounded" /> : <div className="w-16 h-16 bg-gray-100 rounded" />}
                        <div className="flex-1">
                            <div className="font-medium">{it.name}</div>
                            <div className="text-sm text-gray-600">${(it.price * it.quantity).toFixed(2)} - {it.quantity}x</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t">
                <div className="flex items-center justify-between">
                    <div className="font-semibold">Total</div>
                    <div className="font-bold">${total.toFixed(2)}</div>
                </div>
                <div className="mt-3">
                    <form action="/api/checkout" method="post">
                        <button type="submit" className="w-full px-4 py-3 bg-indigo-600 text-white rounded">Checkout</button>
                    </form>
                </div>
            </div>
        </aside>
    )
}

