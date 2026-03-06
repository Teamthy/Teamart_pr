import create from 'zustand'

type Item = { id: string; name: string; price: number; qty: number }

export const useCart = create((set) => ({
    items: [] as Item[],
    addItem: (item: Item) => set((s) => {
        const exists = s.items.find(i => i.id === item.id)
        if (exists) return { items: s.items.map(i => i.id === item.id ? { ...i, qty: i.qty + item.qty } : i) }
        return { items: [...s.items, item] }
    }),
    removeItem: (id: string) => set((s) => ({ items: s.items.filter(i => i.id !== id) })),
    clear: () => set({ items: [] })
}))
