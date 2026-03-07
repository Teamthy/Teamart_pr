'use client';
import React, { useEffect, useState } from 'react';
import { ShoppingBag, Heart, Search, User } from 'lucide-react';

type Props = { cartCount: number; wishlistCount: number; onOpenCart: () => void };

export default function Navbar({ cartCount, wishlistCount, onOpenCart }: Props) {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <h1 className="text-2xl font-bold tracking-tighter text-black flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white italic">T</div>
                        TEAMART
                    </h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center bg-gray-100 px-3 py-1.5 rounded-full">
                        <Search size={16} className="text-gray-400" />
                        <input type="text" placeholder="Search..." className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-32" />
                    </div>
                    <button className="p-2 relative hover:bg-gray-100 rounded-full transition-colors">
                        <Heart size={20} />
                        {wishlistCount > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full"></span>}
                    </button>
                    <button onClick={onOpenCart} className="p-2 relative hover:bg-gray-100 rounded-full transition-colors">
                        <ShoppingBag size={20} />
                        {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">{cartCount}</span>}
                    </button>
                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
                        <User size={16} />
                        <span className="hidden sm:inline">Sign In</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
