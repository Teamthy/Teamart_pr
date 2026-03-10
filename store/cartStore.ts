'use client'

import { create } from "zustand"

export type CartItem = {
    id: number
    name: string
    price: number
    image?: string
    category?: string
    quantity: number
}

type CartStore = {
    items: CartItem[]
    addItem: (item: CartItem) => void
    removeItem: (id: number) => void
    updateQuantity: (id: number, delta: number) => void
    clearCart: () => void
    getTotal: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],

    addItem: (item) =>
        set((state) => {
            const existing = state.items.find((i) => i.id === item.id)

            if (existing) {
                return {
                    items: state.items.map((i) =>
                        i.id === item.id
                            ? { ...i, quantity: i.quantity + 1 }
                            : i
                    ),
                }
            }

            return {
                items: [...state.items, { ...item, quantity: 1 }],
            }
        }),

    removeItem: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),

    updateQuantity: (id, delta) =>
        set((state) => ({
            items: state.items.map((item) => {
                if (item.id !== id) return item
                const nextQty = Math.max(1, item.quantity + delta)
                return { ...item, quantity: nextQty }
            }),
        })),

    clearCart: () =>
        set({ items: [] }),

    getTotal: () =>
        get().items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        ),
}))
