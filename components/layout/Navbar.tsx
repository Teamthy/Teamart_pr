'use client'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { useUIStore } from '@/store/uiStore'

export default function Navbar() {
    const cartCount = useCartStore((s) => s.items.reduce((sum, item) => sum + item.quantity, 0))
    const openCart = useUIStore((s) => s.openCart)

    return (
        <header className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">T</span>
                    teamart
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
                    <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                    <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
                    <Link href="/#about" className="hover:text-gray-900 transition-colors">Stories</Link>
                    <Link href="/#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        onClick={openCart}
                        className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                        aria-label="Cart"
                    >
                        <ShoppingBag size={18} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <Link
                        href="/sign-in"
                        className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
                    >
                        Request free trial
                    </Link>
                </div>
            </div>
        </header>
    )
}
