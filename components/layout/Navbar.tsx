// components/layout/Navbar.tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Search, ShoppingCart, Heart, Menu, User } from 'lucide-react'
import useCart from '@/store/cartStore'
import { UserButton, SignInButton } from '@clerk/nextjs'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const cartCount = useCart((s) => s.totalQuantity)
    const wishlistCount = 0 // replace with persistent wishlist selector

    return (
        <header className="w-full bg-white border-b sticky top-0 z-50">
            <div className="container flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="white" /></svg>
                    </div>
                    <span className="text-indigo-600 font-semibold">brand</span>
                </Link>

                <nav className="hidden md:flex gap-8 items-center">
                    <Link href="/" className="text-sm text-gray-700 hover:text-indigo-600">Home</Link>
                    <Link href="/about" className="text-sm text-gray-700 hover:text-indigo-600">About</Link>
                    <Link href="/contact" className="text-sm text-gray-700 hover:text-indigo-600">Contact</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <div className="hidden lg:flex items-center border rounded-full px-3 py-1.5 w-[320px]">
                        <input placeholder="Search products" className="flex-1 text-sm bg-transparent outline-none" />
                        <Search size={16} className="text-gray-400" />
                    </div>

                    <button aria-label="wishlist" className="relative p-2 rounded-full hover:bg-gray-100">
                        <Heart size={18} />
                        {wishlistCount > 0 && <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs w-4 h-4 rounded-full">{wishlistCount}</span>}
                    </button>

                    <Link href="/store/cart" className="relative p-2 rounded-full hover:bg-gray-100">
                        <ShoppingCart size={18} className="text-indigo-600" />
                        {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-[11px] w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>}
                    </Link>

                    <div className="hidden sm:block">
                        <SignInButton>
                            <button className="px-4 py-2 rounded-full bg-indigo-500 text-white text-sm">Login</button>
                        </SignInButton>
                    </div>

                    <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2" aria-label="Open menu">
                        <Menu size={20} />
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t">
                    <div className="flex flex-col px-6 py-4 gap-3">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/store/cart">Cart ({cartCount})</Link>
                        <SignInButton>
                            <button className="mt-2 bg-indigo-500 text-white rounded-full py-2">Login</button>
                        </SignInButton>
                    </div>
                </div>
            )}
        </header>
    )
}