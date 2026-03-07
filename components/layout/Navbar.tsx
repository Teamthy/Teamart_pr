"use client"

import Link from "next/link"
import { UserButton } from "@clerk/nextjs"
import { useCartStore } from "@/store/cartStore"

export default function Navbar() {
    const items = useCartStore(state => state.items)

    return (
        <nav className="flex justify-between p-4 border-b">
            <Link href="/" className="font-bold text-xl">
                Teamart
            </Link>

            <div className="flex items-center gap-6">
                <Link href="/cart">
                    Cart ({items.length})
                </Link>

                <UserButton afterSignOutUrl="/" />
            </div>
        </nav>
    )
}