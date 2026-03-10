'use client'

import { create } from 'zustand'

type WishlistStore = {
    ids: number[]
    toggle: (id: number) => void
    has: (id: number) => boolean
    clear: () => void
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
    ids: [],
    toggle: (id) =>
        set((state) =>
            state.ids.includes(id)
                ? { ids: state.ids.filter((itemId) => itemId !== id) }
                : { ids: [...state.ids, id] }
        ),
    has: (id) => get().ids.includes(id),
    clear: () => set({ ids: [] }),
}))
