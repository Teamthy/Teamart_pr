"use client"

import { useCartStore } from "@/store/cartStore"

export default function CartDrawer() {
    const items = useCartStore(state => state.items)

    return (
        <div className="fixed right-0 top-0 w-80 h-screen bg-white shadow-lg p-6">
            <h2 className="text-xl font-bold">Cart</h2>

            {items.map(item => (
                <div key={item.id} className="flex justify-between mt-4">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    )
}