'use client'

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'
import { useUIStore } from '@/store/uiStore'

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const cartCount = useCartStore((s) =>
        s.items.reduce((sum, item) => sum + item.quantity, 0)
    )

    const openCart = useUIStore((s) => s.openCart)

    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all rounded-2xl">

            {/* Navigation Links */}
            <div className="hidden sm:flex items-center gap-8">
                <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>

                {/* Search */}
                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input
                        className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
                        type="text"
                        placeholder="Search products"
                    />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        <path clipRule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Cart */}
                <button
                    onClick={openCart}
                    className="relative cursor-pointer"
                    aria-label="Cart"
                >
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
                            stroke="#615fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                            {cartCount}
                        </span>
                    )}
                </button>

                {/* Login */}
                <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Menu"
                className="sm:hidden"
            >
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <a href="#" className="block">Home</a>
                <a href="#" className="block">About</a>
                <a href="#" className="block">Contact</a>

                <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>
        </nav>
    )
}