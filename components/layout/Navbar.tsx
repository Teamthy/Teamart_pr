'use client'
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

export default function Navbar() {
    return (
        <header className="w-full bg-gray-100 border-b">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 h-[70px]">

                {/* Logo */}
                <h1 className="text-2xl font-semibold text-gray-700">
                    design
                </h1>

                {/* Navigation */}
                <nav className="hidden md:flex gap-8 text-sm text-gray-700">
                    <Link href="#">Home</Link>
                    <Link href="#">Shop</Link>
                    <Link href="#">Categories</Link>
                    <Link href="#">Deals</Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-6">

                    <ShoppingBag className="w-5 h-5 text-gray-600" />

                    <button className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium">
                        Shop Now
                    </button>

                </div>

            </div>
        </header>
    )
}