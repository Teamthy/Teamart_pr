'use client'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { useUIStore } from '@/store/uiStore'

export default function CartDrawer() {
    const isOpen = useUIStore((s) => s.isCartOpen)
    const closeCart = useUIStore((s) => s.closeCart)
    const items = useCartStore((s) => s.items)
    const total = useCartStore((s) => s.getTotal())
    const updateQuantity = useCartStore((s) => s.updateQuantity)
    const removeItem = useCartStore((s) => s.removeItem)
    const [isLoading, setIsLoading] = useState(false)

    const handleCheckout = async () => {
        if (items.length === 0) return
        setIsLoading(true)
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ items }),
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error(data?.error || 'Checkout failed')
            }
            if (data?.url) {
                window.location.href = data.url
            }
        } catch (err) {
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b flex items-center justify-between">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                Your Bag <span className="bg-gray-100 px-2 py-0.5 rounded text-sm">{items.length}</span>
                            </h2>
                            <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Close cart">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                        <ShoppingBag size={40} className="text-gray-300" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Your cart is empty</h3>
                                    <p className="text-gray-500 text-sm mb-6">Looks like you haven't added anything to your cart yet.</p>
                                    <button onClick={closeCart} className="bg-black text-white px-8 py-3 rounded-full font-bold">Start Shopping</button>
                                </div>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="flex gap-4 group">
                                        <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                                            {item.image ? (
                                                <Image src={item.image} alt={item.name} width={96} height={96} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200" />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between mb-1">
                                                <h4 className="font-bold text-sm">{item.name}</h4>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-gray-400 hover:text-rose-500 transition-colors"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-500 mb-3">{item.category}</p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center border border-gray-200 rounded-lg">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 hover:bg-gray-50">-</button>
                                                    <span className="px-3 text-sm font-bold border-x border-gray-200">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 hover:bg-gray-50">+</button>
                                                </div>
                                                <span className="font-black">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className="p-6 border-t bg-gray-50 space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-gray-500 text-sm">
                                        <span>Subtotal</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-500 text-sm">
                                        <span>Shipping</span>
                                        <span className="text-emerald-600 font-bold uppercase text-[10px] tracking-widest">Free</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-black pt-2">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    disabled={isLoading}
                                    className="w-full bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Processing...' : <>Checkout with Stripe <ChevronRight size={18} /></>}
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
