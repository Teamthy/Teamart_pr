import { create } from "zustand"
import { Product } from "@/types/product"

interface CartState {
    items: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (id: string) => void
}

export const useCartStore = create<CartState>((set) => ({
    items: [],

    addToCart: (product) =>
        set((state) => ({
            items: [...state.items, product]
        })),

    removeFromCart: (id) =>
        set((state) => ({
            items: state.items.filter(i => i.id !== id)
        }))
}))