'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Heart, Search, ShoppingBag, User } from 'lucide-react'
import { useCartStore } from '@/store/cartStore'
import { useWishlistStore } from '@/store/wishlistStore'
import { useUIStore } from '@/store/uiStore'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const cartCount = useCartStore((s) => s.items.reduce((sum, item) => sum + item.quantity, 0))
    const wishlistCount = useWishlistStore((s) => s.ids.length)
    const openCart = useUIStore((s) => s.openCart)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-black flex items-center gap-2">
                        <span className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white italic">T</span>
                        TEAMART
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                        <Link href="/#shop" className="hover:text-black transition-colors">Shop</Link>
                        <Link href="/products" className="hover:text-black transition-colors">Categories</Link>
                        <Link href="/#about" className="hover:text-black transition-colors">About</Link>
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold">LIVE CMS</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1.5 rounded-full">
                        <Search size={16} className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-32"
                        />
                    </div>
                    <button className="p-2 relative hover:bg-gray-100 rounded-full transition-colors" aria-label="Wishlist">
                        <Heart size={20} />
                        {wishlistCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>}
                    </button>
                    <button
                        onClick={openCart}
                        className="p-2 relative hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Cart"
                    >
                        <ShoppingBag size={20} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                {cartCount}
                            </span>
                        )}
                    </button>
                    <Link href="/sign-in" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
                        <User size={16} />
                        <span className="hidden sm:inline">Sign In</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
